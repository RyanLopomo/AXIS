// Importa o React para permitir JSX.
import React from "react";

// Cria os cards com foco.
export function FocusCards({ cards }) {
  // Retorna o grid de cards.
  return (
    // Define o layout dos cards.
    <div className="grid gap-5 sm:grid-cols-2">
      {/* Renderiza cada card. */}
      {cards.map((card) => {
        // Salva o ícone em uma variável com letra maiúscula para usar como componente.
        const Icon = card.icon;

        // Retorna o card.
        return (
          // Cria o link clicável do card.
          <a key={card.title} href={card.href} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-cyan-300/[0.04]">
            {/* Mostra o ícone do card. */}
            <Icon className="mb-12 text-cyan-300 transition duration-300 group-hover:scale-110" size={38} />

            {/* Mostra o título do card. */}
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>

            {/* Mostra a descrição do card. */}
            <p className="mt-3 text-sm leading-6 text-white/58">{card.description}</p>
          </a>
        );
      })}
    </div>
  );
}
