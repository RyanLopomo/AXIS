"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

const padIndex = (index) => String(index + 1).padStart(2, "0");

export function PortfolioImageCarousel({
  images,
  projectName,
  imageLabel,
  imageFit = "object-contain",
  language = "pt-BR",
  slideKey,
  onSlideChange,
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);
  const reducedMotion = useReducedMotion();
  const currentSlide = images[index];
  const currentImage = typeof currentSlide === "string" ? currentSlide : currentSlide.src;
  const hasMultipleImages = images.length > 1;
  const localize = (value) => (typeof value === "string" ? value : value?.[language] || value?.["pt-BR"] || "");
  const currentTitle = localize(currentSlide.title) || projectName;
  const currentDescription = localize(currentSlide.description);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (isPaused || isOpen || reducedMotion || !hasMultipleImages) return undefined;

    const timerId = window.setTimeout(() => {
      setIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => window.clearTimeout(timerId);
  }, [hasMultipleImages, images.length, index, isOpen, isPaused, reducedMotion]);

  useEffect(() => {
    if (!hasMultipleImages) return undefined;

    const nextImage = new window.Image();
    const nextSlide = images[(index + 1) % images.length];
    nextImage.src = typeof nextSlide === "string" ? nextSlide : nextSlide.src;
    return () => {
      nextImage.onload = null;
      nextImage.onerror = null;
    };
  }, [hasMultipleImages, images, index]);

  useEffect(() => {
    onSlideChange?.(slideKey, currentSlide);
  }, [currentSlide, onSlideChange, slideKey]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") moveBy(-1);
      if (event.key === "ArrowRight") moveBy(1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length]);

  function moveBy(amount) {
    setIndex((currentIndex) => (currentIndex + amount + images.length) % images.length);
  }

  function pauseForTouch(event) {
    if (event.pointerType === "touch") setIsPaused(true);
  }

  function resumeAfterTouch(event) {
    if (event.pointerType === "touch") setIsPaused(false);
  }

  const imageCounter = `${padIndex(index)} / ${padIndex(images.length - 1)}`;

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-40"
        role="group"
        aria-roledescription="carousel"
        aria-label={`${projectName} — ${imageLabel}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
        }}
        onPointerDown={pauseForTouch}
        onPointerUp={resumeAfterTouch}
        onPointerCancel={resumeAfterTouch}
      >
        <motion.img
          key={currentImage}
          src={currentImage}
          alt={`${imageLabel}: ${projectName} ${padIndex(index)}`}
          loading="lazy"
          decoding="async"
          draggable="false"
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.35, ease: "easeOut" }}
          className={`pointer-events-none absolute inset-0 h-full w-full ${imageFit}`}
        />

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              aria-label={`${projectName}: imagem anterior`}
              onClick={() => moveBy(-1)}
              style={{ left: "clamp(12px, 1vw, 16px)", top: "50%", translate: "0 -50%" }}
              className="pointer-events-auto absolute left-3 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/45 bg-[#020916]/80 text-cyan-300 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:border-cyan-200 hover:bg-[#020916] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:left-4 sm:h-10 sm:w-10"
            >
              <ChevronLeft size={19} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={`${projectName}: próxima imagem`}
              onClick={() => moveBy(1)}
              style={{ right: "clamp(12px, 1vw, 16px)", top: "50%", translate: "0 -50%" }}
              className="pointer-events-auto absolute right-3 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/45 bg-[#020916]/80 text-cyan-300 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:border-cyan-200 hover:bg-[#020916] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-4 sm:h-10 sm:w-10"
            >
              <ChevronRight size={19} aria-hidden="true" />
            </button>
          </>
        ) : null}

        <button
          type="button"
          aria-label={`Ampliar imagens: ${projectName}`}
          onClick={() => setIsOpen(true)}
          style={{ right: "clamp(12px, 1vw, 16px)", top: "clamp(12px, 1vw, 16px)" }}
          className="pointer-events-auto absolute right-3 top-3 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#020916]/80 text-cyan-300 shadow-lg backdrop-blur-sm transition hover:border-cyan-300/60 hover:bg-[#020916] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-4 sm:top-4"
        >
          <Maximize2 size={16} aria-hidden="true" />
        </button>

        {hasMultipleImages ? (
          <span
            style={{ right: "clamp(12px, 1vw, 16px)", bottom: "clamp(12px, 1vw, 16px)" }}
            className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/20 bg-[#020916]/75 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-white/90 backdrop-blur-sm sm:bottom-4 sm:right-4 sm:text-xs"
          >
            {imageCounter}
          </span>
        ) : null}
      </div>

      {isOpen && portalRoot
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020916]/95 p-3 backdrop-blur-md sm:p-6"
              role="presentation"
              onClick={(event) => {
                if (event.target === event.currentTarget) setIsOpen(false);
              }}
            >
              <div
                className="relative flex h-[min(94dvh,1100px)] w-[min(96vw,1600px)] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#071426] p-2 shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:rounded-3xl sm:p-5"
                role="dialog"
                aria-modal="true"
                aria-label={`${projectName} — ${imageLabel}`}
              >
                <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={`${currentTitle}: ${currentDescription}`}
                    decoding="async"
                    initial={{ opacity: reducedMotion ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
                    className="max-h-full max-w-full object-contain"
                  />

                <button
                  type="button"
                  aria-label="Fechar galeria"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#020916]/85 text-white shadow-lg backdrop-blur-sm transition hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-5 sm:top-5"
                >
                  <X size={19} aria-hidden="true" />
                  </button>

                {hasMultipleImages ? (
                  <>
                    <button
                      type="button"
                      aria-label={`${projectName}: imagem anterior`}
                      onClick={() => moveBy(-1)}
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#020916]/80 text-white shadow-lg backdrop-blur-sm transition hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:left-5 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft size={22} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label={`${projectName}: próxima imagem`}
                      onClick={() => moveBy(1)}
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#020916]/80 text-white shadow-lg backdrop-blur-sm transition hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-5 sm:h-12 sm:w-12"
                    >
                      <ChevronRight size={22} aria-hidden="true" />
                    </button>
                  </>
                ) : null}
                </div>

                <motion.div
                  key={`modal-caption-${slideKey}-${index}`}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
                  className="flex shrink-0 items-center justify-between gap-4 px-2 pb-1 pt-3 sm:px-4 sm:pt-4"
                  aria-live="polite"
                >
                  <div className="min-w-0">
                    <h2 className="truncate text-base font-semibold text-white sm:text-lg">{currentTitle}</h2>
                    {currentDescription ? <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/65 sm:text-sm">{currentDescription}</p> : null}
                  </div>
                  <span className="shrink-0 rounded-full border border-white/20 bg-[#020916]/80 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-white/90 backdrop-blur-sm">
                    {imageCounter}
                  </span>
                </motion.div>
              </div>
            </div>,
            portalRoot,
          )
        : null}
    </>
  );
}
