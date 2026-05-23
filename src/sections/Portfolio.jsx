// Importa o React para permitir JSX.
import React from "react";

// Importa o ícone de seta.
import { ArrowUpRight } from "lucide-react";

// Importa o carrossel duplo controlado pelo scroll.
import { ScrollCarousel } from "../lightswind/scroll-carousel";

// Importa o botão magnético.
import { MagneticButton } from "../lightswind/magnetic-button";

// Importa os 16 projetos do portfólio.
import { portfolioItems } from "../data/portfolio";

// Cria a seção Portfólio.
export function Portfolio() {
  // Retorna a seção de portfólio.
  return (
    // Define a seção geral do portfólio.
    <section id="portfolio" className="relative overflow-x-hidden bg-transparent py-24">
      {/* Centraliza o cabeçalho textual do portfólio. */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Organiza título e botão em linha no desktop. */}
        <div data-animate className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          {/* Agrupa label e título. */}
          <div>
            {/* Mostra o label da seção. */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
              Portfólio
            </p>

            {/* Mostra o título principal da seção. */}
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Projetos digitais com presença, estética e performance.
            </h2>
          </div>

          {/* Renderiza o botão magnético de chamada para contato. */}
          <MagneticButton asChild>
            {/* Link para a seção de contato. */}
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:border-cyan-300/60 hover:text-cyan-300"
            >
              Criar meu projeto <ArrowUpRight size={18} />
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Renderiza o carrossel duplo com scroll vertical. */}
      <ScrollCarousel items={portfolioItems} />
    </section>
  );
}

