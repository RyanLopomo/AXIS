// Importa o React e o useRef.
import React, { useRef } from "react";

// Importa o ícone de seta.
import { ArrowUpRight } from "lucide-react";

// Importa o hook de animações GSAP.
import { useAxisAnimations } from "../animations/useAxisAnimations";
import { translations } from "../data/translations";
import { useSitePreferences } from "../context/site-preferences";

// Cria a seção Sobre.
export function About() {
  const { language } = useSitePreferences();
  const content = translations[language].about;
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
            {content.eyebrow}
          </p>

          {/* Mostra o título da seção. */}
          <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-7xl">
            {content.title}
          </h2>

          {/* Mostra o texto explicativo. */}
          <p className="mt-7 text-lg leading-8 text-white/60">
            {content.text}
          </p>
        </article>

        {/* Renderiza os cards narrativos. */}
        {content.items.map((item) => (
          // Cria um card individual.
          <article key={item.title} className="relative h-[430px] w-[78vw] max-w-[560px] shrink-0 overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl md:p-9">
            {/* Mostra a imagem do card. */}
            <img
              src={item.image}
              alt=""
              className="absolute right-7 top-7 h-24 w-24 rounded-3xl border border-white/10 object-cover shadow-2xl md:h-28 md:w-28"
            />

            {/* Cria um brilho sutil atrás do conteúdo. */}
            <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

            {/* Mostra o título do card. */}
            <h3 className="relative mt-36 max-w-[18rem] text-3xl font-semibold tracking-[-0.03em] text-white md:mt-40">
              {item.title}
            </h3>

            {/* Mostra o texto do card. */}
            <p className="relative mt-5 max-w-md text-base leading-7 text-white/64 md:text-lg md:leading-8">{item.text}</p>

            {/* Mostra o ícone decorativo. */}
            <ArrowUpRight className="relative mt-9 text-cyan-300" />
          </article>
        ))}
      </div>
    </section>
  );
}

