// Importa o useLayoutEffect do React para rodar animações depois que o layout estiver montado.
import { useLayoutEffect } from "react";

// Importa o GSAP, que será o motor principal das animações avançadas.
import gsap from "gsap";

// Importa o ScrollTrigger, plugin do GSAP para animações baseadas em scroll.
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin ScrollTrigger dentro do GSAP.
gsap.registerPlugin(ScrollTrigger);

// Cria um hook personalizado para centralizar as animações principais da AXIS.
export function useAxisAnimations({ aboutSectionRef, aboutTrackRef }) {
  // Executa as animações depois que os elementos estiverem disponíveis no DOM.
  useLayoutEffect(() => {
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

      // Calcula a distância horizontal que o trilho precisa percorrer.
      const horizontalDistance =
        // Pega a largura total do conteúdo horizontal.
        aboutTrackRef.current.scrollWidth -
        // Subtrai a largura visível da janela.
        window.innerWidth;

      // Cria a animação horizontal da seção Sobre.
      gsap.to(aboutTrackRef.current, {
        // Move o trilho para a esquerda com base na distância calculada.
        x: -horizontalDistance,

        // Remove easing para o movimento acompanhar o scroll de forma direta.
        ease: "none",

        // Configura a animação para ser controlada pelo ScrollTrigger.
        scrollTrigger: {
          // Define a seção Sobre como gatilho.
          trigger: aboutSectionRef.current,

          // Começa quando o topo da seção encosta no topo da tela.
          start: "top top",

          // Termina depois da distância horizontal necessária.
          end: () => `+=${horizontalDistance}`,

          // Sincroniza a animação com o scroll.
          scrub: 1,

          // Fixa a seção na tela enquanto o conteúdo horizontal se move.
          pin: true,

          // Ajuda a evitar pequenos saltos no momento do pin.
          anticipatePin: 1,

          // Recalcula valores ao redimensionar a tela.
          invalidateOnRefresh: true,
        },
      });
    });

    // Força o ScrollTrigger a recalcular posições depois da montagem.
    ScrollTrigger.refresh();

    // Limpa todas as animações criadas neste contexto quando o componente desmontar.
    return () => context.revert();

    // Roda novamente apenas se as referências mudarem.
  }, [aboutSectionRef, aboutTrackRef]);
}
