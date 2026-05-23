// Importa o ícone do Instagram.
import { Camera } from "lucide-react";

// Importa o ícone do WhatsApp/mensagem.
import { MessageCircle } from "lucide-react";

// Importa o ícone de e-mail.
import { Mail } from "lucide-react";

// Importa o ícone do LinkedIn.
import { BriefcaseBusiness } from "lucide-react";

// Importa o ícone do GitHub.
import { Code } from "lucide-react";

// Exporta a lista de cards usados na seção de contato.
export const contactCards = [
  // Card do Instagram.
  {
    // Título do card.
    title: "Instagram",

    // Descrição do card.
    description: "Acompanhe bastidores, projetos e novidades da AXIS.",

    // Ícone usado no card.
    icon: Camera,

    // Link do Instagram.
    href: "https://instagram.com/engineraxis",
  },

  // Card do WhatsApp.
  {
    // Título do card.
    title: "WhatsApp",

    // Descrição do card.
    description: "Fale diretamente com a equipe para iniciar seu projeto.",

    // Ícone usado no card.
    icon: MessageCircle,

    // Link do WhatsApp.
    href: "https://wa.me/5513991087633",
  },

  // Card de e-mail.
  {
    // Título do card.
    title: "E-mail",

    // Descrição do card.
    description: "Envie uma proposta, briefing ou dúvida comercial.",

    // Ícone usado no card.
    icon: Mail,

    // Link de e-mail.
    href: "mailto:engineeraxisltda@gmail.com",
  },

  // Card do LinkedIn.
  {
    // Título do card.
    title: "LinkedIn",

    // Descrição do card.
    description: "Conecte-se com a AXIS no ambiente profissional.",

    // Ícone usado no card.
    icon: BriefcaseBusiness,

    // Link do LinkedIn.
    href: "https://linkedin.com/company/axis",
  },

  // Card do GitHub.
  {
    // Título do card.
    title: "GitHub",

    // Descrição do card.
    description: "Veja repositórios, estudos e soluções técnicas.",

    // Ícone usado no card.
    icon: Code,

    // Link do GitHub.
    href: "https://github.com/axis",
  },
];

