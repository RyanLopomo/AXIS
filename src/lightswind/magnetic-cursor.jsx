// Importa o React e hooks necessários.
import React, { useEffect, useRef } from "react";

// Cria o cursor magnético.
export function MagneticCursor() {
  // Cria uma referência para o elemento do cursor.
  const cursorRef = useRef(null);

  // Executa o efeito quando o componente monta.
  useEffect(() => {
    function moveCursor(event) {
      if (!cursorRef.current) return;
      if (event.pointerType === "touch") return;

      cursorRef.current.style.transform = `translate3d(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%), 0)`;
      cursorRef.current.style.opacity = "1";
    }

    function hideCursor() {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    }

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);
    };
  }, []);

  // Retorna o cursor visual.
  return (
    // Cria a bolinha fixa do cursor.
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="axis-custom-cursor pointer-events-none fixed left-0 top-0 z-[999] h-5 w-5 rounded-full border border-cyan-300/70 opacity-0 mix-blend-difference"
    />
  );
}
