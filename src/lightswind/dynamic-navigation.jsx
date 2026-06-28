"use client";

import React, { useMemo, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useSitePreferences } from "../context/site-preferences";

const labels = {
  "pt-BR": {
    Inicio: "Início",
    Sobre: "Sobre",
    Portfolio: "Portfólio",
    Servicos: "Serviços",
    Contato: "Contato",
  },
  en: {
    Inicio: "Home",
    Sobre: "About",
    Portfolio: "Portfolio",
    Servicos: "Services",
    Contato: "Contact",
  },
};

const labelKeys = {
  "#inicio": "Inicio",
  "#sobre": "Sobre",
  "#portfolio": "Portfolio",
  "#servicos": "Servicos",
  "#contato": "Contato",
};

export function DynamicNavigation({ items, logo }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, isDark, toggleTheme } = useSitePreferences();

  const translatedItems = useMemo(
    () =>
      items.map((item) => {
        const key = labelKeys[item.href];
        return {
          ...item,
          label: key ? labels[language][key] : item.label,
        };
      }),
    [items, language],
  );

  function selectLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="axis-nav-glass flex min-h-16 items-center justify-between rounded-full border px-4 py-2 shadow-2xl backdrop-blur-2xl sm:px-5">
          <a href="#inicio" className="flex items-center gap-3" aria-label="AXIS Home">
            <img src={logo} alt="AXIS" className="h-9 w-9 object-contain" />
            <span className="text-sm font-semibold uppercase tracking-[0.22em]">AXIS</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
            {translatedItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-cyan-300/10 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
              <Languages size={15} className="mx-2 text-cyan-300" aria-hidden="true" />
              {["pt-BR", "en"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectLanguage(option)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase transition ${
                    language === option ? "bg-cyan-300 text-[#02101c]" : "text-current/70 hover:text-current"
                  }`}
                  aria-pressed={language === option}
                >
                  {option === "pt-BR" ? "PT" : "EN"}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition hover:border-cyan-300/45 hover:text-cyan-300"
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
              aria-pressed={!isDark}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen && (
          <div className="axis-nav-glass mt-3 rounded-3xl border p-3 shadow-2xl backdrop-blur-2xl md:hidden">
            <nav className="grid gap-1" aria-label="Navegação mobile">
              {translatedItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-cyan-300/10 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
              <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1">
                {["pt-BR", "en"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectLanguage(option)}
                    className={`rounded-full px-4 py-2 text-xs font-bold uppercase transition ${
                      language === option ? "bg-cyan-300 text-[#02101c]" : "text-current/70"
                    }`}
                    aria-pressed={language === option}
                  >
                    {option === "pt-BR" ? "PT" : "EN"}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
                aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
                aria-pressed={!isDark}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
