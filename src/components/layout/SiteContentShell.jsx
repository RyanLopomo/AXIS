"use client";

import { ArrowLeft, Moon, Sun } from "lucide-react";
import { SitePreferencesProvider, useSitePreferences } from "../../context/site-preferences";
import { MagneticCursor } from "../../lightswind/magnetic-cursor";
import { Footer } from "./Footer";

export function SiteContentShell({ children }) {
  return (
    <SitePreferencesProvider>
      <ContentFrame>{children}</ContentFrame>
    </SitePreferencesProvider>
  );
}

function ContentFrame({ children }) {
  const { language, setLanguage, theme, toggleTheme } = useSitePreferences();
  const isEnglish = language === "en";

  return (
    <main className="axis-atmosphere min-h-screen overflow-x-hidden bg-[var(--axis-bg)] text-[var(--axis-fg)]">
      <MagneticCursor />
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-5 sm:px-8">
        <a href="/" className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold tracking-[0.16em] text-[var(--axis-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          <ArrowLeft size={17} aria-hidden="true" /> AXIS
        </a>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setLanguage(isEnglish ? "pt-BR" : "en")} className="min-h-11 rounded-full border border-white/15 px-3 text-xs font-semibold text-[var(--axis-fg)] hover:border-cyan-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" aria-label={isEnglish ? "Mudar idioma para português" : "Switch language to English"}>
            {isEnglish ? "EN" : "PT"}
          </button>
          <button type="button" onClick={toggleTheme} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[var(--axis-fg)] hover:border-cyan-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" aria-label={isEnglish ? "Toggle color theme" : "Alternar tema de cores"}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>
      {children}
      <div className="mx-auto max-w-7xl px-5 sm:px-8"><Footer /></div>
    </main>
  );
}
