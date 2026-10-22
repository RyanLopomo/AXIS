const clipesSlides = [
  {
    title: { "pt-BR": "Visão geral do CLIPES", en: "CLIPES overview" },
    description: {
      "pt-BR": "Conheça a plataforma e os recursos para transformar vídeos longos em clipes com IA.",
      en: "Explore the platform and its tools for turning long videos into AI-powered clips.",
    },
  },
  {
    title: { "pt-BR": "Processamento confiável", en: "Reliable processing" },
    description: {
      "pt-BR": "Acompanhe o progresso, recupere tarefas e visualize métricas e notificações.",
      en: "Track progress, recover jobs, and review metrics and notifications.",
    },
  },
  {
    title: { "pt-BR": "Contas e publicação em escala", en: "Accounts and publishing at scale" },
    description: {
      "pt-BR": "Gerencie canais e publique conteúdos no YouTube, TikTok e outras plataformas.",
      en: "Manage channels and publish content to YouTube, TikTok, and other platforms.",
    },
  },
  {
    title: { "pt-BR": "Do vídeo à publicação", en: "From video to published clip" },
    description: {
      "pt-BR": "Importe vídeos, encontre trechos com IA, edite e publique clipes prontos.",
      en: "Import videos, find moments with AI, edit, and publish ready-to-share clips.",
    },
  },
  {
    title: { "pt-BR": "Informações importantes", en: "Important information" },
    description: {
      "pt-BR": "Veja os requisitos de uso local, a conexão necessária e o status beta do CLIPES.",
      en: "Review local usage requirements, internet needs, and the CLIPES beta status.",
    },
  },
];

export const clipesImagesByTheme = {
  dark: clipesSlides.map((slide, index) => ({
    ...slide,
    src: `/Dark/${String(index + 1).padStart(2, "0")}_dark.png`,
  })),
  bright: clipesSlides.map((slide, index) => ({
    ...slide,
    src: `/Bright/${String(index + 1).padStart(2, "0")}_bright.png`,
  })),
};
