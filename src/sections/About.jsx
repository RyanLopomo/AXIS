// Importa o React e o useRef.
import React, { useRef } from "react";

// Importa o ícone de seta.
import { ArrowUpRight } from "lucide-react";

// Importa os textos da seção Sobre.
import { aboutItems } from "../data/about";

// Importa o hook de animações GSAP.
import { useAxisAnimations } from "../animations/useAxisAnimations";

// Cria a seção Sobre.
export function About() {
  // Cria uma referência para a seção inteira.
  const aboutSectionRef = useRef(null);

  // Cria uma referência para o trilho horizontal.
  const aboutTrackRef = useRef(null);

  // Ativa as animações GSAP para esta seção.
  useAxisAnimations({ aboutSectionRef, aboutTrackRef });

  // Retorna a seção Sobre.
  return (
    // Define a seção com altura de tela e overflow escondido.
    <section id="sobre" ref={aboutSectionRef} className="relative h-screen overflow-hidden border-y border-white/5 bg-transparent">
      {/* Adiciona uma luz radial no fundo. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,153,255,0.20),transparent_30%)]" />

      {/* Cria o trilho horizontal movido pelo GSAP. */}
      <div ref={aboutTrackRef} className="flex h-full w-max items-center gap-8 px-6 md:px-20">
        {/* Cria o primeiro bloco explicativo. */}
        <article className="w-[86vw] max-w-[560px] shrink-0">
          {/* Mostra o rótulo da seção. */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Sobre a AXIS
          </p>

          {/* Mostra o título da seção. */}
          <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-7xl">
            Tecnologia com visão, design e propósito.
          </h2>

          {/* Mostra o texto explicativo. */}
          <p className="mt-7 text-lg leading-8 text-white/60">
            Unimos estratégia, estética e desenvolvimento para criar produtos digitais modernos, escaláveis e memoráveis.
          </p>
        </article>

        {/* Renderiza os cards narrativos. */}
        {aboutItems.map((item) => (
          // Cria um card individual.
          <article key={item.number} className="h-[430px] w-[78vw] max-w-[580px] shrink-0 rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-9 shadow-2xl backdrop-blur-xl">
            {/* Mostra o número do card. */}
            <span className="text-6xl font-light text-cyan-400">{item.number}</span>

            {/* Mostra o título do card. */}
            <h3 className="mt-20 text-3xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>

            {/* Mostra o texto do card. */}
            <p className="mt-5 max-w-md text-lg leading-8 text-white/64">{item.text}</p>

            {/* Mostra o ícone decorativo. */}
            <ArrowUpRight className="mt-10 text-cyan-300" />
          </article>
        ))}
      </div>
    </section>
  );
}

