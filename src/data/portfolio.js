// Adicione aqui apenas trabalhos reais e confirmados pela AXIS.
// Cada item usa: { title, description: { "pt-BR", en }, image, href }.
// `image` deve apontar para uma captura otimizada em /public/portfolio/;
// `href` deve ser a URL pública real do projeto.
import { clipesImagesByTheme } from "./portfolioImageSets";

export const portfolioItems = [
  {
    title: "CrisOn Imóveis",
    description: {
      "pt-BR": "Landing page imobiliária premium, desenvolvida para apresentação de imóveis, captação de clientes e geração de oportunidades comerciais.",
      en: "A premium real estate landing page designed to showcase properties, attract clients, and generate business opportunities.",
    },
    image: "/portfolio/crison-capture.png",
    href: "https://crisonimoveis.vercel.app",
  },
  {
    title: "Pizza Fire",
    description: {
      "pt-BR": "Site institucional para pizzaria, com apresentação visual, cardápio digital, apresentação dos produtos e integração com WhatsApp para pedidos.",
      en: "A pizzeria website with a visual presentation, digital menu, product showcase, and WhatsApp ordering integration.",
    },
    image: "/portfolio/pizzafire.jpg",
    href: "https://pizza-fire.vercel.app",
  },
  {
    title: "CLIPES",
    description: {
      "pt-BR": "Aplicativo em desenvolvimento para organizar vídeos e gerar clipes com assistência de inteligência artificial.",
      en: "An app in development for organizing videos and creating clips with AI assistance.",
    },
    image: "/Dark/01_dark.png",
    imagesByTheme: clipesImagesByTheme,
    href: "/axisclipes",
  },
];
