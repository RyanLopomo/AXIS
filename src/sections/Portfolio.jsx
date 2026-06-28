// Importa o React para permitir JSX.
import React, { useEffect, useState } from "react";

// Importa o ícone de seta.
import { ArrowUpRight } from "lucide-react";

// Importa o carrossel duplo controlado pelo scroll.
import { ScrollCarousel } from "../lightswind/scroll-carousel";

// Importa o botão magnético.
import { MagneticButton } from "../lightswind/magnetic-button";

// Importa os 16 projetos do portfólio.
import { portfolioItems } from "../data/portfolio";
import { translations } from "../data/translations";
import { useSitePreferences } from "../context/site-preferences";

// Cria a seção Portfólio.
export function Portfolio() {
  const { language } = useSitePreferences();
  const content = translations[language].portfolio;
  const translatedPortfolioItems = portfolioItems.map((item, index) => ({
    ...item,
    description: content.items[index] || item.description,
  }));

  // Retorna a seção de portfólio.
  return (
    // Define a seção geral do portfólio.
    <section id="portfolio" className="relative overflow-x-hidden bg-transparent py-24">
      {/* Centraliza o cabeçalho textual do portfólio. */}
      <div className="mx-auto max-w-7xl px-6">
        <div data-animate className="mb-8">
          {/* Mostra o label da seção. */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            {content.eyebrow}
          </p>

          {/* Organiza título e botão na mesma altura no desktop. */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            {/* Mostra o título principal da seção com efeito máquina de escrever. */}
            <TypewriterTitle words={content.typewriterWords} />

            {/* Renderiza o botão magnético de chamada para contato. */}
            <MagneticButton asChild>
              {/* Link para a seção de contato. */}
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:border-cyan-300/60 hover:text-cyan-300"
              >
                {content.cta} <ArrowUpRight size={18} />
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Renderiza o carrossel duplo com scroll vertical. */}
      <ScrollCarousel items={translatedPortfolioItems} viewProjectLabel={content.viewProject} />
    </section>
  );
}

function TypewriterTitle({ words }) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phraseKey = words.join("|");
  const currentText = words[index] || "";
  const text = currentText.slice(0, charIndex);

  useEffect(() => {
    setIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [phraseKey]);

  useEffect(() => {
    if (!words.length) return undefined;

    const isComplete = charIndex === currentText.length;
    const isEmpty = charIndex === 0;
    const delay = isComplete && !isDeleting ? 1300 : isDeleting ? 38 : 82;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (isComplete) {
            setIsDeleting(true);
          } else {
            setCharIndex((currentCharIndex) => currentCharIndex + 1);
          }

          return;
        }

        if (isEmpty) {
          setIsDeleting(false);
          setIndex((currentIndex) => (currentIndex + 1) % words.length);
        } else {
          setCharIndex((currentCharIndex) => currentCharIndex - 1);
        }
      },
      delay,
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, currentText, isDeleting, words.length]);

  return (
    <h2 className="min-h-12 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:min-h-16 md:text-5xl">
      <span>{text}</span>
      <span className="ml-1 inline-block animate-pulse text-cyan-300">|</span>
    </h2>
  );
}

