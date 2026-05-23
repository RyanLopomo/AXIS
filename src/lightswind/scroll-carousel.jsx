// Importa React e hooks.
import React, { useLayoutEffect, useRef } from "react";

// Importa GSAP.
import gsap from "gsap";

// Importa ScrollTrigger.
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importa ícone de seta.
import { ArrowUpRight } from "lucide-react";

// Registra o plugin ScrollTrigger.
gsap.registerPlugin(ScrollTrigger);

// Cria o carrossel duplo controlado pelo scroll.
export function ScrollCarousel({ items }) {
  // Referência da seção do carrossel.
  const sectionRef = useRef(null);

  // Referência da linha superior.
  const topRowRef = useRef(null);

  // Referência da linha inferior.
  const bottomRowRef = useRef(null);

  // Separa os 8 primeiros itens para a linha superior.
  const topItems = items.slice(0, 8);

  // Separa os 8 últimos itens para a linha inferior.
  const bottomItems = items.slice(8, 16);

  // Executa a animação depois que o layout estiver montado.
  useLayoutEffect(() => {
    // Cria um contexto GSAP para limpar tudo corretamente depois.
    const context = gsap.context(() => {
      // Para a função se a seção não existir.
      if (!sectionRef.current) return;

      // Para a função se a linha superior não existir.
      if (!topRowRef.current) return;

      // Para a função se a linha inferior não existir.
      if (!bottomRowRef.current) return;

      // Calcula a distância da linha superior.
      const topDistance = topRowRef.current.scrollWidth - window.innerWidth + 48;

      // Calcula a distância da linha inferior.
      const bottomDistance = bottomRowRef.current.scrollWidth - window.innerWidth + 48;

      // Define a linha superior começando na posição inicial.
      gsap.set(topRowRef.current, { x: 0 });

      // Define a linha inferior começando deslocada para a esquerda.
      gsap.set(bottomRowRef.current, { x: -bottomDistance });

      // Cria uma timeline controlada pelo scroll.
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 46px",
          end: "+=1500",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Move a linha superior para a esquerda.
      timeline.to(
        topRowRef.current,
        {
          x: -topDistance,
          ease: "none",
        },
        0
      );

      // Move a linha inferior para a direita.
      timeline.to(
        bottomRowRef.current,
        {
          x: 0,
          ease: "none",
        },
        0
      );
    }, sectionRef);

    // Atualiza os cálculos do ScrollTrigger.
    ScrollTrigger.refresh();

    // Remove animações quando o componente desmontar.
    return () => context.revert();
  }, [items]);

  // Renderiza o carrossel.
  return (
    <div
      ref={sectionRef}
      className="relative h-[calc(100vh-88px)] min-h-[600px] overflow-hidden bg-transparent"
    >
      {/* Luz suave de fundo. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,153,255,0.14),transparent_36%)]" />

      {/* Degradê lateral esquerdo. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#020916] to-transparent" />

      {/* Degradê lateral direito. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#020916] to-transparent" />

      {/* Container das duas linhas. */}
      <div className="relative z-10 flex h-full flex-col justify-center gap-2 py-8">
        {/* Linha superior. */}
        <div ref={topRowRef} className="flex w-max gap-4 will-change-transform">
          {topItems.map((item) => (
            <CarouselCard key={item.title} item={item} />
          ))}
        </div>

        {/* Linha inferior. */}
        <div ref={bottomRowRef} className="flex w-max gap-4 pl-12 will-change-transform">
          {bottomItems.map((item) => (
            <CarouselCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Cria o card individual do carrossel.
function CarouselCard({ item }) {
  // Retorna o card padronizado.
  return (
    <article className="group relative h-[230px] w-[410px] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] shadow-2xl transition duration-500 hover:scale-[1.01] md:h-[260px] md:w-[460px]">
      {/* Imagem do projeto com tamanho fixo e preenchimento padronizado. */}
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
      />

      {/* Overlay escuro para melhorar leitura. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

      {/* Brilho discreto no hover. */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:bg-cyan-300/[0.04] group-hover:opacity-100" />

      {/* Conteúdo textual do card. */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Nome do projeto. */}
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
          {item.title}
        </h3>

        {/* Descrição limitada para não quebrar o card. */}
        <p className="mt-2 line-clamp-2 max-w-md text-xs leading-5 text-white/62 md:text-sm">
          {item.description}
        </p>

        {/* Botão do projeto. */}
        <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 backdrop-blur-md transition hover:border-cyan-300/60 hover:text-cyan-300 md:text-sm">
          Ver projeto <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}

