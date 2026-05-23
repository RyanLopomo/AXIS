// Importa o React e hooks necessários.
import React, { useEffect, useRef } from "react";

// Cria o cursor magnético.
export function MagneticCursor() {
  // Cria uma referência para o elemento do cursor.
  const cursorRef = useRef(null);

  // Executa o efeito quando o componente monta.
  useEffect(() => {
    // Cria a função que acompanha o mouse.
    function moveCursor(event) {
      // Para se o cursor ainda não existir.
      if (!cursorRef.current) return;

      // Move o cursor para a posição do mouse.
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    }

    // Adiciona o listener de movimento do mouse.
    window.addEventListener("mousemove", moveCursor);

    // Remove o listener ao desmontar o componente.
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Retorna o cursor visual.
  return (
    // Cria a bolinha fixa do cursor.
    <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70 mix-blend-difference transition-transform duration-75 lg:block" />
  );
}
