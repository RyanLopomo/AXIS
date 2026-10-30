import { Mail, MessageCircle } from "lucide-react";
import { institutionalData } from "../config/institutionalData";

// Only owner-confirmed destinations; do not restore generic social profiles.
export const contactCards = [
  {
    title: "WhatsApp",
    description: "Fale com a Engineraxis sobre o seu projeto.",
    icon: MessageCircle,
    href: `https://wa.me/${institutionalData.commercialWhatsAppNumber}`,
  },
  {
    title: "E-mail",
    description: "Envie uma proposta, um resumo do projeto ou uma dúvida comercial.",
    icon: Mail,
    href: `mailto:${institutionalData.privacyEmail}`,
  },
];
