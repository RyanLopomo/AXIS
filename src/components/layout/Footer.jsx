// Importa o React para permitir JSX.
import React from "react";

// Cria o componente Footer.
export function Footer() {
  // Retorna o rodapé do site.
  return (
    // Define a área do rodapé.
    <footer className="border-t border-white/10 bg-[#020916] py-10">
      {/* Centraliza e distribui o conteúdo. */}
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 text-sm text-white/45 md:flex-row md:items-center">
        {/* Agrupa logo e copyright. */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-black tracking-[0.22em] text-white">AXIS</span>

          {/* Mostra o copyright. */}
          <span>© 2026 AXIS. Todos os direitos reservados.</span>
        </div>

        {/* Agrupa os links legais. */}
        <div className="flex gap-6">
          {/* Link de política de privacidade. */}
          <a href="#privacidade" className="transition hover:text-cyan-300">Política de privacidade</a>

          {/* Link de termos de uso. */}
          <a href="#termos" className="transition hover:text-cyan-300">Termos de uso</a>
        </div>
      </div>
    </footer>
  );
}

