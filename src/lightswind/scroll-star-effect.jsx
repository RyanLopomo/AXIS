// Importa o React e os hooks necessários.
import React, { useEffect, useRef } from "react";

// Cria o componente de estrelas com movimento baseado no scroll.
export function ScrollStarEffect() {
  // Guarda a referência da camada principal do efeito.
  const containerRef = useRef(null);

  // Guarda a referência da primeira camada de estrelas.
  const layerOneRef = useRef(null);

  // Guarda a referência da segunda camada de estrelas.
  const layerTwoRef = useRef(null);

  // Guarda a referência da camada de brilho.
  const glowRef = useRef(null);

  // Executa o efeito quando o componente entra na tela.
  useEffect(() => {
    // Cria a função que será chamada durante o scroll.
    function handleScroll() {
      // Pega a posição atual do scroll vertical.
      const scrollY = window.scrollY;

      // Move a primeira camada lentamente.
      if (layerOneRef.current) {
        layerOneRef.current.style.transform = `translate3d(0, ${scrollY * 0.04}px, 0)`;
      }

      // Move a segunda camada um pouco mais rápido.
      if (layerTwoRef.current) {
        layerTwoRef.current.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
      }

      // Move o brilho principal de forma bem suave.
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(0, ${scrollY * 0.03}px, 0)`;
      }
    }

    // Executa uma vez para iniciar o estado correto.
    handleScroll();

    // Adiciona o evento de scroll na janela.
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Remove o evento quando o componente for desmontado.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Renderiza as camadas visuais do background.
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Camada de estrelas pequenas e densas. */}
      <div
        ref={layerOneRef}
        className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:44px_44px]"
      />

      {/* Camada de estrelas maiores e mais espaçadas. */}
      <div
        ref={layerTwoRef}
        className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(34,211,238,0.42)_1.2px,transparent_1.4px)] [background-size:120px_120px]"
      />

      {/* Grade tecnológica quase invisível. */}
      <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(34,211,238,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.18)_1px,transparent_1px)] [background-size:96px_96px]" />

      {/* Brilho principal azul/ciano. */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
      />

      {/* Brilho lateral esquerdo. */}
      <div className="absolute left-[-160px] top-[30%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Brilho lateral direito. */}
      <div className="absolute right-[-180px] bottom-[12%] h-[460px] w-[460px] rounded-full bg-cyan-300/10 blur-3xl" />

      {/* Vinheta para manter o centro limpo e premium. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,9,22,0.18)_45%,rgba(2,9,22,0.72)_100%)]" />
    </div>
  );
}