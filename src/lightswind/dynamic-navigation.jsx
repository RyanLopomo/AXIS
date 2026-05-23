// Importa o React para permitir JSX.
import React from "react";

// Cria a navegação dinâmica.
export function DynamicNavigation({ items, logo }) {
  // Retorna a navbar fixa.
  return (
    // Define o header fixo no topo.
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#020916]/55 backdrop-blur-xl">
      {/* Centraliza o conteúdo da navbar. */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Cria o link da logo. */}
        <a href="#inicio" className="flex items-center gap-3">
          {/* Mostra a imagem da logo. */}
          <img src={logo} alt="AXIS" className="h-12 w-auto" />
        </a>

        {/* Cria os links centrais. */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-white/75 md:flex">
          {/* Renderiza cada item da navegação. */}
          {items.map((item) => (
            // Cria um link individual.
            <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Cria o seletor visual de idiomas. */}
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          {/* Mostra o idioma português. */}
          <span>pt-br</span>

          {/* Mostra o separador. */}
          <span className="text-white/40">|</span>

          {/* Mostra o idioma inglês. */}
          <span>en</span>

          {/* Mostra a bandeira do Brasil. */}
          <span className="ml-2">ðŸ‡§ðŸ‡·</span>

          {/* Mostra a bandeira dos Estados Unidos. */}
          <span>ðŸ‡ºðŸ‡¸</span>
        </div>
      </div>
    </header>
  );
}
