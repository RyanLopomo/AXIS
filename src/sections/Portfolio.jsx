import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../lightswind/magnetic-button";
import { PortfolioImageCarousel } from "../components/PortfolioImageCarousel";
import { portfolioItems } from "../data/portfolio";
import { translations } from "../data/translations";
import { useSitePreferences } from "../context/site-preferences";

export function Portfolio() {
  const { language, theme } = useSitePreferences();
  const content = translations[language].portfolio;

  return (
    <section id="portfolio" className="relative overflow-hidden bg-transparent py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <header data-animate className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
            {content.subtitle}
          </p>
        </header>

        {portfolioItems.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={`${item.href || item.title}-${theme}`}
                item={item}
                theme={theme}
                language={language}
                content={content}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] px-6 py-10 text-center sm:px-10 sm:py-14">
            <p className="text-base leading-7 text-white/60">{content.emptyState}</p>
          </div>
        )}

        <div data-animate className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/[0.12] via-white/[0.035] to-transparent px-6 py-9 text-center shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:mt-20 sm:px-12 sm:py-12">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
              {content.ctaTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              {content.ctaText}
            </p>
            <div className="mt-7">
              <MagneticButton asChild>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-[#020916] shadow-[0_0_38px_rgba(34,211,238,0.24)] transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {content.cta} <ArrowUpRight size={18} />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, theme, language, content }) {
  const images = item.imagesByTheme?.[theme === "dark" ? "dark" : "bright"] || item.images || [item.image];
  const slideKey = `${item.href || item.title}-${theme}`;
  const [activeSlide, setActiveSlide] = useState(images[0]);
  const updateActiveSlide = useCallback((_key, slide) => setActiveSlide(slide), []);

  useEffect(() => {
    setActiveSlide(images[0]);
  }, [images]);

  const localized = (value) => (typeof value === "string" ? value : value?.[language] || value?.["pt-BR"] || "");
  const title = localized(activeSlide?.title) || item.title;
  const description = localized(activeSlide?.description) || item.description[language] || item.description["pt-BR"];

  return (
    <article
      className="group relative isolate overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35"
      style={{ isolation: "isolate" }}
    >
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${content.viewProject}: ${item.title}`}
          className="absolute inset-0 z-10 rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <span className="sr-only">{content.viewProject}: {item.title}</span>
        </a>
      ) : null}

      <div className="relative pointer-events-none">
        <div className="relative z-20 isolate aspect-[16/10] overflow-hidden bg-[#071426]">
          <PortfolioImageCarousel
            images={images}
            imageFit={item.imagesByTheme ? "object-contain" : "object-cover transition duration-500 group-hover:scale-[1.03]"}
            projectName={item.title}
            imageLabel={content.projectImageAlt}
            language={language}
            slideKey={slideKey}
            onSlideChange={updateActiveSlide}
          />
        </div>
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
          <motion.div
            key={`${slideKey}-${title}-${description}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="min-w-0 flex-1"
            aria-live="polite"
          >
            <h3 className="min-h-7 text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-white/62">{description}</p>
          </motion.div>
          {item.href ? (
            <span className="mt-1 shrink-0 rounded-full border border-white/15 p-2 text-cyan-300 transition group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10" aria-hidden="true">
              <ArrowUpRight size={17} />
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
