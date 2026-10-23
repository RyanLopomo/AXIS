import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cog, Layers, Star, Target, Users } from "lucide-react";
import { useAxisAnimations } from "../animations/useAxisAnimations";
import { translations } from "../data/translations";
import { useSitePreferences } from "../context/site-preferences";

const principleVisuals = [
  { id: "focus", Icon: Target, accent: "#38bdf8", art: "mountain" },
  { id: "dream", Icon: Star, accent: "#fbbf24", art: "summit" },
  { id: "work", Icon: Cog, accent: "#60a5fa", art: "strength" },
  { id: "transparency", Icon: Layers, accent: "#2dd4bf", art: "clarity" },
  { id: "welcome", Icon: Users, accent: "#a78bfa", art: "community" },
];

export function About() {
  const { language, theme } = useSitePreferences();
  const content = translations[language].about;
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const statementRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const useHorizontalScroll = !prefersReducedMotion;

  useAxisAnimations({ aboutSectionRef: sectionRef, aboutTrackRef: trackRef, aboutStatementRef: statementRef, horizontalEnabled: useHorizontalScroll });

  const isLight = theme === "light";
  const principleItems = (content.principles || translations["pt-BR"].about.principles).map((item, index) => ({
    ...item,
    ...principleVisuals[index],
  }));
  const statementCharacters = splitGraphemes(content.text, language);
  const principlesLabel = language === "en" ? "Our principles" : "Nossos princ\u00edpios";
  const scrollLabel = language === "en" ? "Scroll to explore" : "Role para explorar";

  return (
    <section id="sobre" ref={sectionRef} className="axis-about-section relative bg-transparent" aria-labelledby="about-title">
      <div className="axis-about-heading flex items-center justify-between gap-4">
        <h2 id="about-title" className={`axis-about-label text-xs font-medium uppercase tracking-[0.22em] ${isLight ? "text-cyan-700" : "text-cyan-400"}`}>
          {principlesLabel}
        </h2>
        <p className={`axis-about-scroll-hint hidden text-right text-xs font-medium uppercase tracking-[0.18em] sm:block ${isLight ? "text-slate-500" : "text-[var(--axis-muted)]"}`}>
          {scrollLabel}
        </p>
      </div>
      <div className="axis-about-viewport">
        <div ref={trackRef} className="axis-principle-track flex h-full w-max items-center">
          {principleItems.map((item, index) => (
            <PrincipleCard key={item.id} item={item} index={index} isLight={isLight} reducedMotion={prefersReducedMotion} />
          ))}
        </div>
      </div>
      <div ref={statementRef} className="axis-about-statement text-center">
        <span className="sr-only">{content.text}</span>
        <span aria-hidden="true" className="axis-about-statement-visual">
          {statementCharacters.map((character, index) => (
            <span key={`${index}-${character}`} data-erasure-char>{character}</span>
          ))}
        </span>
      </div>
    </section>
  );
}

function splitGraphemes(text, language) {
  if (typeof Intl.Segmenter === "function") {
    const locale = language === "en" ? "en" : "pt-BR";
    return Array.from(new Intl.Segmenter(locale, { granularity: "grapheme" }).segment(text), ({ segment }) => segment);
  }

  return Array.from(text);
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function PrincipleCard({ item, index, isLight, reducedMotion }) {
  const { Icon } = item;
  const surface = isLight
    ? "border-slate-900/10 bg-white/90 text-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:border-cyan-900/20 hover:shadow-[0_24px_64px_rgba(15,23,42,0.13)]"
    : "border-white/10 bg-[#071426]/95 text-white shadow-[0_24px_70px_rgba(0,0,0,0.25)] hover:border-cyan-300/25 hover:shadow-[0_28px_70px_rgba(0,153,255,0.12)]";

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
      data-principle-card
      className={`axis-principle-card group relative isolate flex flex-col overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-300 motion-reduce:transition-none ${surface}`}
      style={{ aspectRatio: "1 / 1", flex: "0 0 auto" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(${isLight ? "rgba(8,145,178,0.16)" : "rgba(125,211,252,0.20)"} 0.8px, transparent 0.8px)`,
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(135deg, black, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 z-0 h-52 w-52 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-80 motion-reduce:transition-none"
        style={{ backgroundColor: `${item.accent}${isLight ? "12" : "1c"}`, opacity: 0.65 }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border" style={{ color: item.accent, borderColor: `${item.accent}45`, backgroundColor: `${item.accent}14` }}>
            <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <h3 className="axis-principle-title max-w-[72%] text-right text-[1.6875rem] font-bold leading-[1.12] tracking-[-0.035em] sm:text-[1.875rem]">{item.title}</h3>
        </div>
        <p className={`axis-principle-description relative mt-3 max-w-full text-left text-[1.3125rem] leading-[1.35] sm:mt-4 ${isLight ? "text-slate-600" : "text-slate-300/85"}`}>{item.text}</p>
        <div aria-hidden="true" className="axis-principle-art pointer-events-none relative z-0 ml-auto shrink-0 pt-2 opacity-55 transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none">
          <PrincipleArtwork type={item.art} accent={item.accent} id={item.id} />
        </div>
      </div>
    </motion.article>
  );
}
function PrincipleArtwork({ type, accent, id }) {
  const base = `principle-${id}`;

  if (type === "mountain" || type === "summit" || type === "strength") {
    return (
      <svg viewBox="0 0 240 170" fill="none" className="h-full w-full" focusable="false">
        <defs>
          <linearGradient id={`${base}-peak`} x1="120" y1="20" x2="120" y2="165" gradientUnits="userSpaceOnUse">
            <stop stopColor={accent} stopOpacity=".48" />
            <stop offset="1" stopColor={accent} stopOpacity=".02" />
          </linearGradient>
          <linearGradient id={`${base}-path`} x1="90" y1="150" x2="160" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor={accent} stopOpacity=".08" />
            <stop offset="1" stopColor={accent} />
          </linearGradient>
        </defs>
        {type === "summit" ? (
          <g stroke={accent} strokeOpacity=".22" strokeWidth="1.5">
            <path d="M20 61c5-10 18-12 26-4 6-13 27-10 29 5 12 1 16 15 8 22H27c-10-3-13-15-7-23Z" />
            <path d="M124 39c5-10 18-12 26-4 6-13 27-10 29 5 12 1 16 15 8 22h-56c-10-3-13-15-7-23Z" />
          </g>
        ) : null}
        <path d="m22 160 75-112 43 60 27-39 55 91H22Z" fill={`url(#${base}-peak)`} />
        <path d="m76 160 55-82 20 28 16-25 47 79H76Z" fill={accent} fillOpacity=".1" />
        <path d="m96 48 13 21 9-3-21-18-1 0Z" fill="white" fillOpacity=".62" />
        <path d="M121 151c-17-16-13-25 1-33 13-8 13-17 16-25 2-6 7-12 15-16" stroke={`url(#${base}-path)`} strokeWidth="3" strokeLinecap="round" strokeDasharray={type === "mountain" ? "2 7" : undefined} />
        <path d="M153 78V43" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        <path d="M154 44h23l-8 8h-15v-8Z" fill={accent} fillOpacity=".9" />
        <circle cx="153" cy="78" r="4" fill={accent} fillOpacity=".85" />
        {type === "strength" ? (
          <path d="m67 95 15-20-3 16h12L72 116l4-17H67Z" fill={accent} fillOpacity=".95" />
        ) : null}
        <path d="M25 160h196" stroke={accent} strokeOpacity=".25" />
      </svg>
    );
  }

  if (type === "clarity") {
    return (
      <svg viewBox="0 0 240 170" fill="none" className="h-full w-full" focusable="false">
        <rect x="42" y="26" width="92" height="112" rx="18" fill={accent} fillOpacity=".08" stroke={accent} strokeOpacity=".35" />
        <rect x="76" y="39" width="100" height="108" rx="18" fill="white" fillOpacity=".04" stroke="white" strokeOpacity=".22" />
        <rect x="107" y="28" width="92" height="116" rx="18" fill={accent} fillOpacity=".08" stroke={accent} strokeOpacity=".5" />
        <path d="m153 57 23 9v19c0 17-10 29-23 37-13-8-23-20-23-37V66l23-9Z" fill={accent} fillOpacity=".16" stroke={accent} strokeWidth="1.5" />
        <path d="m143 84 7 7 14-16" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45 150h151" stroke={accent} strokeOpacity=".24" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 170" fill="none" className="h-full w-full" focusable="false">
      <circle cx="144" cy="75" r="50" fill={accent} fillOpacity=".06" />
      <circle cx="144" cy="75" r="36" stroke={accent} strokeOpacity=".22" />
      <path d="M70 147c3-23 18-35 38-35s35 12 38 35" fill={accent} fillOpacity=".16" stroke={accent} strokeOpacity=".55" strokeWidth="2" />
      <circle cx="108" cy="90" r="15" fill={accent} fillOpacity=".5" />
      <path d="M119 146c3-19 15-29 31-29s28 10 31 29" fill={accent} fillOpacity=".24" stroke={accent} strokeOpacity=".7" strokeWidth="2" />
      <circle cx="150" cy="99" r="13" fill={accent} fillOpacity=".72" />
      <path d="M161 146c2-14 12-22 25-22s23 8 25 22" fill={accent} fillOpacity=".12" stroke={accent} strokeOpacity=".42" strokeWidth="2" />
      <circle cx="186" cy="111" r="10" fill={accent} fillOpacity=".35" />
      <path d="M56 151h160" stroke={accent} strokeOpacity=".28" />
      <path d="M114 58c12-11 31-11 43 0" stroke={accent} strokeOpacity=".45" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
