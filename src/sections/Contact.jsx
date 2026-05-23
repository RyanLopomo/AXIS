// Importa o React e o useState para controlar os campos do formulário.
import React, { useState } from "react";

// Importa os ícones usados na seção.
import {
  ArrowUpRight,
  Camera,
  Mail,
  MessageCircle,
  BriefcaseBusiness,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

// Importa o botão magnético.
import { MagneticButton } from "../lightswind/magnetic-button";

// Define o número de WhatsApp que receberá o briefing.
const whatsappNumber = "5513991087633";

// Cria a seção Contato.
export function Contact() {
  // Guarda o valor digitado no campo nome.
  const [name, setName] = useState("");

  // Guarda o tipo de projeto selecionado.
  const [projectType, setProjectType] = useState("");

  // Guarda o orçamento selecionado.
  const [budget, setBudget] = useState("");

  // Guarda a mensagem digitada.
  const [message, setMessage] = useState("");

  // Função executada ao clicar em "Enviar briefing".
  function handleSendBriefing() {
    // Monta a mensagem que será enviada para o WhatsApp.
    const briefingMessage = `
Olá, vim pelo site da AXIS e quero iniciar um projeto.

Nome: ${name || "Não informado"}
Tipo de projeto: ${projectType || "Não informado"}
Orçamento estimado: ${budget || "Não informado"}

Ideia:
${message || "Não informado"}
    `.trim();

    // Codifica a mensagem para funcionar corretamente dentro da URL.
    const encodedMessage = encodeURIComponent(briefingMessage);

    // Monta o link final do WhatsApp.
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba.
    window.open(whatsappUrl, "_blank");
  }

  // Retorna a seção de contato.
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-transparent py-28"
    >
      {/* Luz principal de fundo. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(0,145,255,0.24),transparent_34%)]" />

      {/* Luz lateral suave. */}
      <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Container principal. */}
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Coluna esquerda. */}
        <div data-animate>
          {/* Label da seção. */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
            Contato
          </p>

          {/* Título principal. */}
          <h2 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-white md:text-7xl">
            Pronto para criar algo marcante?
          </h2>

          {/* Texto de apoio. */}
          <p className="mt-7 max-w-lg text-lg leading-8 text-white/62">
            Conte sua ideia e vamos transformar o conceito em uma experiência digital premium.
          </p>

          {/* Botão principal. */}
          <div className="mt-9">
            <MagneticButton asChild>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold text-[#020916] shadow-[0_0_44px_rgba(34,211,238,0.38)] transition hover:bg-cyan-300"
              >
                Falar no WhatsApp
                <ArrowUpRight size={18} />
              </a>
            </MagneticButton>
          </div>

          {/* Selos de confiança. */}
          <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
              <Clock className="mb-3 text-cyan-300" size={22} />
              <p className="text-sm font-semibold text-white">
                Resposta rápida
              </p>
              <p className="mt-1 text-xs text-white/50">Até 24h úteis</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
              <Sparkles className="mb-3 text-cyan-300" size={22} />
              <p className="text-sm font-semibold text-white">
                Visual premium
              </p>
              <p className="mt-1 text-xs text-white/50">
                Design de alto nível
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
              <ShieldCheck className="mb-3 text-cyan-300" size={22} />
              <p className="text-sm font-semibold text-white">
                Projeto seguro
              </p>
              <p className="mt-1 text-xs text-white/50">Código escalável</p>
            </div>
          </div>
        </div>

        {/* Coluna direita. */}
        <div data-animate className="space-y-5">
          {/* Card principal do formulário. */}
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl md:p-8">
            {/* Cabeçalho do formulário. */}
            <div className="mb-7 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Envie um briefing rápido
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Preencha os detalhes iniciais e enviaremos tudo direto para o
                  WhatsApp da AXIS.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
                <Mail size={24} />
              </div>
            </div>

            {/* Formulário visual. */}
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/50"
              />

              <select
                value={projectType}
                onChange={(event) => setProjectType(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/80 outline-none transition focus:border-cyan-300/50"
              >
                <option value="">Tipo de projeto</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Sistema Web">Sistema Web</option>
                <option value="Aplicativo">Aplicativo</option>
                <option value="Inteligência Artificial">
                  Inteligência Artificial
                </option>
                <option value="Identidade Digital">Identidade Digital</option>
              </select>

              <select
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/80 outline-none transition focus:border-cyan-300/50"
              >
                <option value="">Orçamento estimado</option>
                <option value="Até R$ 1.000">Até R$ 1.000</option>
                <option value="R$ 1.000 a R$ 3.000">
                  R$ 1.000 a R$ 3.000
                </option>
                <option value="R$ 3.000 a R$ 7.000">
                  R$ 3.000 a R$ 7.000
                </option>
                <option value="Acima de R$ 7.000">Acima de R$ 7.000</option>
              </select>

              <textarea
                placeholder="Fale rapidamente sobre sua ideia..."
                rows="4"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/50"
              />

              <button
                type="button"
                onClick={handleSendBriefing}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#020916] transition hover:bg-cyan-300"
              >
                Enviar briefing pelo WhatsApp
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>

          {/* Cards sociais menores. */}
          <div className="grid gap-4 sm:grid-cols-2">
            <ContactMiniCard
              icon={Camera}
              title="Instagram"
              text="Projetos e bastidores"
              href="https://instagram.com/axis"
            />

            <ContactMiniCard
              icon={MessageCircle}
              title="WhatsApp"
              text="Atendimento direto"
              href={`https://wa.me/${whatsappNumber}`}
            />

            <ContactMiniCard
              icon={Mail}
              title="E-mail"
              text="contato@axis.dev"
              href="mailto:contato@axis.dev"
            />

            <ContactMiniCard
              icon={BriefcaseBusiness}
              title="LinkedIn"
              text="Conexão profissional"
              href="https://linkedin.com/company/axis"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Cria um card social pequeno.
function ContactMiniCard({ icon: Icon, title, text, href }) {
  // Retorna o card clicável.
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-300/[0.04]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
          <Icon size={21} />
        </div>

        <div>
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="mt-1 text-xs text-white/50">{text}</p>
        </div>
      </div>

      <ArrowUpRight
        size={17}
        className="text-white/35 transition group-hover:text-cyan-300"
      />
    </a>
  );
}

