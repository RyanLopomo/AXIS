"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { translations } from "../data/translations";
import { useSitePreferences } from "../context/site-preferences";

export function Hero() {
  const { language } = useSitePreferences();
  const words = translations[language].hero.words;
  const closingLine = translations[language].hero.closingLine;
  const reducedMotion = useReducedMotion();
  const autoScrollStartedRef = useRef(false);
  const phraseCopyRef = useRef({ first: "", second: "" });
  const [displayedPhrase, setDisplayedPhrase] = useState("");
  const [phrasePhase, setPhrasePhase] = useState("waiting");

  phraseCopyRef.current = {
    first: words.join(" • "),
    second: closingLine,
  };

  useEffect(() => {
    let cancelled = false;
    let autoScrollInProgress = false;
    let scrollFrameId;
    const timers = new Set();

    function schedule(callback, delay) {
      const timerId = window.setTimeout(() => {
        timers.delete(timerId);
        if (!cancelled) callback();
      }, delay);
      timers.add(timerId);
    }

    function cancelSequence() {
      if (cancelled) return;

      cancelled = true;
      timers.forEach((timerId) => window.clearTimeout(timerId));
      timers.clear();

      if (autoScrollInProgress) {
        window.cancelAnimationFrame(scrollFrameId);
        window.scrollTo({ left: window.scrollX, top: window.scrollY, behavior: "instant" });
        autoScrollInProgress = false;
      }
    }

    // If the visitor already scrolled before hydration attached these listeners, keep their position.
    if (window.scrollY > 0) {
      cancelled = true;
      return () => {};
    }

    const interactionEvents = ["wheel", "touchstart", "pointerdown", "keydown"];
    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, cancelSequence, { capture: true, passive: true });
    });

    const heroLogo = document.querySelector("#inicio img");
    const logoReady = heroLogo?.decode ? heroLogo.decode().catch(() => undefined) : Promise.resolve();
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([logoReady, fontsReady]).then(() => {
      if (cancelled || autoScrollStartedRef.current) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const { first: firstPhrase } = phraseCopyRef.current;
      let characterIndex = 0;

      function startScroll() {
        if (cancelled || autoScrollStartedRef.current) return;

        const aboutSection = document.getElementById("sobre");
        if (!aboutSection) return;

        autoScrollStartedRef.current = true;
        const startY = window.scrollY;
        const targetY = startY + aboutSection.getBoundingClientRect().top;

        if (prefersReducedMotion || Math.abs(targetY - startY) < 1) {
          window.scrollTo({ left: window.scrollX, top: targetY, behavior: "auto" });
          return;
        }

        const startTime = performance.now();
        const duration = 900;
        autoScrollInProgress = true;

        function scrollFrame(now) {
          if (cancelled) return;

          const progress = Math.min((now - startTime) / duration, 1);
          const easedProgress = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          window.scrollTo({
            left: window.scrollX,
            top: startY + (targetY - startY) * easedProgress,
            behavior: "instant",
          });

          if (progress < 1) {
            scrollFrameId = window.requestAnimationFrame(scrollFrame);
          } else {
            autoScrollInProgress = false;
          }
        }

        scrollFrameId = window.requestAnimationFrame(scrollFrame);
      }

      function showSecondPhrase() {
        if (cancelled) return;

        setPhrasePhase("second");
        schedule(startScroll, prefersReducedMotion ? 1400 : 1700);
      }

      function finishTyping() {
        setPhrasePhase("first");
        schedule(showSecondPhrase, prefersReducedMotion ? 500 : 700);
      }

      function typeNextCharacter() {
        if (cancelled) return;

        characterIndex += 1;
        setDisplayedPhrase(firstPhrase.slice(0, characterIndex));

        if (characterIndex < firstPhrase.length) {
          schedule(typeNextCharacter, 38);
        } else {
          finishTyping();
        }
      }

      schedule(() => {
        if (prefersReducedMotion) {
          setDisplayedPhrase(firstPhrase);
          finishTyping();
          return;
        }

        setPhrasePhase("typing");
        typeNextCharacter();
      }, prefersReducedMotion ? 1000 : 1350);
    });

    return () => {
      cancelSequence();
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, cancelSequence, true);
      });
    };
  }, []);

  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-6 pt-24">
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 64, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/logo-axis.png" alt="AXIS" className="mb-7 h-28 w-28 object-contain sm:h-36 sm:w-36" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease: "easeOut" }}
          className="text-5xl font-black uppercase leading-none text-white sm:text-7xl"
        >
          AXIS
        </motion.h1>

        <div className="relative mt-5 h-7 w-[min(88vw,34rem)] text-center text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-white/62 min-[360px]:text-xs sm:h-8 sm:text-sm sm:tracking-[0.18em]">
          <span className="sr-only">
            {words.join(" • ")}. {closingLine}
          </span>
          <AnimatePresence initial={false} mode="wait">
            {phrasePhase !== "waiting" && (
              <motion.span
                key={phrasePhase === "second" ? "second-phrase" : "first-phrase"}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : -4 }}
                transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                aria-hidden="true"
              >
                {phrasePhase === "second" ? closingLine : displayedPhrase}
                {phrasePhase === "typing" && (
                  <span className="ml-1 text-cyan-300 motion-reduce:animate-none" aria-hidden="true">
                    |
                  </span>
                )}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
