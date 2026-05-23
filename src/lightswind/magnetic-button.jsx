// Importa o React para permitir JSX.
import React from "react";

// Cria o botão magnético.
export function MagneticButton({ children, asChild = false }) {
  // Retorna apenas o filho quando usado com asChild.
  if (asChild) return children;

  // Retorna um wrapper padrão quando não houver asChild.
  return (
    // Cria um span com efeito simples de escala.
    <span className="inline-flex transition duration-300 hover:scale-[1.03]">
      {children}
    </span>
  );
}
