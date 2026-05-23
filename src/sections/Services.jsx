// Importa o React para permitir JSX.
import React from "react";

// Importa o ícone de seta.
import { ArrowUpRight } from "lucide-react";

// Importa os serviços.
import { serviceItems } from "../data/services";

// Cria a seção Serviços.
export function Services() {
  // Retorna a seção de serviços.
  return (
    // Define a seção com espaçamento vertical.
    <section id="servicos" className="relative bg-transparent py-28">
      {/* Centraliza o conteúdo. */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Agrupa o cabeçalho. */}
        <div data-animate className="mb-14 max-w-3xl">
          {/* Mostra o rótulo. */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Serviços
          </p>

          {/* Mostra o título. */}
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-6xl">
            Soluções para transformar presença em resultado.
          </h2>
        </div>

        {/* Cria o grid dos serviços. */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Renderiza cada serviço. */}
          {serviceItems.map((service) => (
            // Cria o card de serviço.
            <article data-animate key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]">
              {/* Mostra o ícone do card. */}
              <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
                <ArrowUpRight />
              </div>

              {/* Mostra o título do serviço. */}
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{service.title}</h3>

              {/* Mostra a descrição do serviço. */}
              <p className="mt-5 text-sm leading-7 text-white/58">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

