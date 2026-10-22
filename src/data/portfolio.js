// Adicione aqui apenas trabalhos reais e confirmados pela Axis.
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
    images: [
      {
        src: "/portfolio/crison-capture.png",
        title: { "pt-BR": "CrisOn Imóveis", en: "CrisOn Real Estate" },
        description: {
          "pt-BR": "Uma apresentação premium para conectar pessoas aos imóveis certos.",
          en: "A premium presentation that connects people with the right properties.",
        },
      },
      {
        src: "/portfolio/crison/02.jpg",
        title: { "pt-BR": "Imóveis para cada momento", en: "Properties for every stage" },
        description: {
          "pt-BR": "Categorias organizadas para diferentes perfis e necessidades.",
          en: "Organized categories for different needs and property preferences.",
        },
      },
      {
        src: "/portfolio/crison/03.jpg",
        title: { "pt-BR": "Oportunidades selecionadas", en: "Selected opportunities" },
        description: {
          "pt-BR": "Imóveis em destaque com detalhes para apoiar a escolha.",
          en: "Featured properties with details to support the search.",
        },
      },
      {
        src: "/portfolio/crison/04.jpg",
        title: { "pt-BR": "Atendimento próximo e seguro", en: "Personal, secure service" },
        description: {
          "pt-BR": "A CrisOn combina curadoria de imóveis e acompanhamento humano.",
          en: "CrisOn combines property curation with personal guidance.",
        },
      },
      {
        src: "/portfolio/crison/05.jpg",
        title: { "pt-BR": "Encontre seu próximo imóvel", en: "Find your next property" },
        description: {
          "pt-BR": "Um formulário de contato facilita o envio de interesses à equipe.",
          en: "A contact form makes it easy to share property interests with the team.",
        },
      },
    ],
    href: "https://crisonimoveis.vercel.app",
  },
  {
    title: "Pizza Fire",
    description: {
      "pt-BR": "Site institucional para pizzaria, com identidade visual exclusiva, cardápio digital, apresentação dos produtos e integração com WhatsApp para pedidos.",
      en: "A pizzeria website with a distinctive visual identity, digital menu, product showcase, and WhatsApp ordering integration.",
    },
    image: "/portfolio/pizzafire.jpg",
    images: [
      {
        src: "/portfolio/pizzafire.jpg",
        title: { "pt-BR": "Pizza Fire", en: "Pizza Fire" },
        description: {
          "pt-BR": "Site da pizzaria com identidade visual marcante e pedidos pelo WhatsApp.",
          en: "A pizzeria website with a bold visual identity and WhatsApp ordering.",
        },
      },
      {
        src: "/portfolio/pizzafire/02.jpg",
        title: { "pt-BR": "Forno, fogo e paixão", en: "Oven, fire and passion" },
        description: {
          "pt-BR": "Ingredientes, massa artesanal e os destaques do cardápio.",
          en: "Ingredients, handmade dough, and highlights from the menu.",
        },
      },
      {
        src: "/portfolio/pizzafire/03.jpg",
        title: { "pt-BR": "Sabores mais pedidos", en: "Customer favorites" },
        description: {
          "pt-BR": "Uma seleção de pizzas e sabores em destaque para abrir o apetite.",
          en: "A selection of featured pizzas and flavors to whet the appetite.",
        },
      },
      {
        src: "/portfolio/pizzafire/04.jpg",
        title: { "pt-BR": "Cardápio completo", en: "Full menu" },
        description: {
          "pt-BR": "Opções salgadas e doces organizadas para facilitar o pedido.",
          en: "Savory and sweet options organized to make ordering easier.",
        },
      },
      {
        src: "/portfolio/pizzafire/05.jpg",
        title: { "pt-BR": "Paixão que virou pizza", en: "Passion turned into pizza" },
        description: {
          "pt-BR": "Conheça a história da pizzaria e veja a galeria de produtos.",
          en: "Discover the pizzeria's story and browse its product gallery.",
        },
      },
    ],
    href: "https://pizza-fire.vercel.app",
  },
  {
    title: "CLIPES",
    description: {
      "pt-BR": "Plataforma para transformar vídeos longos em clipes virais com inteligência artificial.",
      en: "A platform for turning long videos into viral clips with artificial intelligence.",
    },
    imagesByTheme: clipesImagesByTheme,
    href: null,
  },
];
