"use client";

import React from "react";
import { motion } from "framer-motion";
import { translations } from "../data/translations";
import { useSitePreferences } from "../context/site-preferences";

export function Hero() {
  const { language } = useSitePreferences();
  const words = translations[language].hero.words;

  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--axis-bg)] px-6 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_50%_75%,rgba(59,130,246,0.14),transparent_34%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--axis-bg)] to-transparent" />

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
          className="text-5xl font-semibold uppercase leading-none text-white sm:text-7xl"
        >
          AXIS
        </motion.h1>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/62 sm:text-sm">
          {words.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 + index * 0.28, duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              {word}
              {index < words.length - 1 && <span className="text-cyan-300">•</span>}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
