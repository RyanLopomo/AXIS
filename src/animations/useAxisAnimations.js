// Importa o useLayoutEffect do React para rodar animações depois que o layout estiver montado.
import { useLayoutEffect } from "react";

// Importa o GSAP, que será o motor principal das animações avançadas.
import gsap from "gsap";

// Importa o ScrollTrigger, plugin do GSAP para animações baseadas em scroll.
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin ScrollTrigger dentro do GSAP.
gsap.registerPlugin(ScrollTrigger);

// Cria um hook personalizado para centralizar as animações principais da AXIS.
export function useAxisAnimations({ aboutSectionRef, aboutTrackRef, aboutStatementRef, horizontalEnabled = true }) {
  // Executa as animações depois que os elementos estiverem disponíveis no DOM.
  useLayoutEffect(() => {
    const horizontalMedia = gsap.matchMedia();

    // Cria um contexto GSAP para facilitar a limpeza das animações ao desmontar o componente.
    const context = gsap.context(() => {
      // Seleciona todos os elementos que tiverem o atributo data-animate.
      const animatedElements = gsap.utils.toArray("[data-animate]");

      // Percorre cada elemento encontrado para aplicar uma animação de entrada.
      animatedElements.forEach((element) => {
        // Cria uma animação do estado inicial até o estado final.
        gsap.fromTo(
          // Define qual elemento será animado.
          element,

          // Define o estado inicial do elemento.
          {
            // Começa invisível.
            opacity: 0,

            // Começa levemente deslocado para baixo.
            y: 36,
          },

          // Define o estado final e as configurações da animação.
          {
            // Termina totalmente visível.
            opacity: 1,

            // Termina na posição original.
            y: 0,

            // Define a duração da animação.
            duration: 0.9,

            // Define uma suavização elegante para o movimento.
            ease: "power3.out",

            // Configura o momento em que a animação será disparada pelo scroll.
            scrollTrigger: {
              // Usa o próprio elemento como gatilho.
              trigger: element,

              // Inicia a animação quando o topo do elemento chega a 82% da tela.
              start: "top 82%",

              // Permite tocar a animação ao entrar e reverter ao sair para cima.
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Verifica se a referência da seção Sobre existe.
      if (!aboutSectionRef.current) return;

      // Verifica se a referência do trilho horizontal existe.
      if (!aboutTrackRef.current) return;

      // Mede a posição central real do último card em relação ao trilho.
      // A diferença entre os retângulos elimina o x aplicado pelo GSAP durante refreshes.
      const getHorizontalDistance = () => {
        const track = aboutTrackRef.current;
        const section = aboutSectionRef.current;
        const lastCard = track.querySelector("[data-principle-card]:last-of-type");

        if (!lastCard) return 0;

        const trackRect = track.getBoundingClientRect();
        const cardRect = lastCard.getBoundingClientRect();
        const cardCenterOnTrack = cardRect.left - trackRect.left + cardRect.width / 2;

        return Math.max(0, cardCenterOnTrack - section.clientWidth / 2);
      };

      if (horizontalEnabled) {
        horizontalMedia.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
          // Cria o movimento lateral somente quando existe uma faixa larga para percorrer.
          if (getHorizontalDistance() <= 0) return undefined;

          const horizontalTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: "top top",
              end: () => `+=${getHorizontalDistance()}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          horizontalTimeline.to(aboutTrackRef.current, {
            x: () => -getHorizontalDistance(),
            duration: 1,
            ease: "none",
          }, 0);

          const statementCharacters = aboutStatementRef.current?.querySelectorAll("[data-erasure-char]");
          if (statementCharacters?.length) {
            gsap.set(statementCharacters, { autoAlpha: 0 });
            horizontalTimeline.to(statementCharacters, {
              autoAlpha: 1,
              duration: 0.001,
              ease: "none",
              stagger: { amount: 0.18, from: "start" },
            }, 0.02);
            horizontalTimeline.to(statementCharacters, {
              autoAlpha: 0,
              duration: 0.001,
              ease: "none",
              stagger: { amount: 0.2, from: "end" },
            }, 0.8);
          }
        });

        horizontalMedia.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
          const statementCharacters = aboutStatementRef.current?.querySelectorAll("[data-erasure-char]");
          if (!statementCharacters?.length) return undefined;

          gsap.set(statementCharacters, { autoAlpha: 0 });
          const typingTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: "top 90%",
              end: "top 35%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          typingTimeline.to(statementCharacters, {
            autoAlpha: 1,
            duration: 0.001,
            ease: "none",
            stagger: { amount: 0.55, from: "start" },
          }, 0);
        });
      }

    });

    // Atualiza o percurso se o texto, a fonte ou o tamanho do trilho mudar após a montagem.
    let refreshFrameId;
    const layoutResizeObserver = new ResizeObserver(() => {
      window.cancelAnimationFrame(refreshFrameId);
      refreshFrameId = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    layoutResizeObserver.observe(aboutTrackRef.current);
    layoutResizeObserver.observe(aboutSectionRef.current);

    // Força o ScrollTrigger a recalcular posições depois da montagem.
    ScrollTrigger.refresh();

    // Limpa todas as animações criadas neste contexto quando o componente desmontar.
    return () => {
      layoutResizeObserver.disconnect();
      window.cancelAnimationFrame(refreshFrameId);
      horizontalMedia.revert();
      context.revert();
    };

    // Roda novamente apenas se as referências mudarem.
  }, [aboutSectionRef, aboutTrackRef, horizontalEnabled]);
}
