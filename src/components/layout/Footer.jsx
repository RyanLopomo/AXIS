// Importa o React para permitir JSX.
import React from "react";
import { translations } from "../../data/translations";
import { useSitePreferences } from "../../context/site-preferences";

// Cria o componente Footer.
export function Footer() {
  const { language } = useSitePreferences();
  const content = translations[language].footer;

  // Retorna o rodapé do site.
  return (
    // Define a área do rodapé.
    <footer className="border-t border-white/10 bg-[var(--axis-bg)] py-10">
      {/* Centraliza e distribui o conteúdo. */}
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 text-sm text-white/45 md:flex-row md:items-center">
        {/* Agrupa logo e copyright. */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-black tracking-[0.22em] text-white">AXIS</span>

          {/* Mostra o copyright. */}
          <span>© 2026 AXIS. {content.rights}</span>
        </div>

        {/* Agrupa os links legais. */}
        <div className="flex gap-6">
          {/* Link de política de privacidade. */}
          <a href="#privacidade" className="transition hover:text-cyan-300">{content.privacy}</a>

          {/* Link de termos de uso. */}
          <a href="#termos" className="transition hover:text-cyan-300">{content.terms}</a>
        </div>
      </div>
    </footer>
  );
}

