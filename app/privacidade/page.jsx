import { LegalDocumentPage } from "../../src/components/content/LegalDocumentPage";
import { SiteContentShell } from "../../src/components/layout/SiteContentShell";
import { pageMetadata } from "../../src/config/siteMetadata";

export const metadata = pageMetadata({
  title: "Política de Privacidade | AXIS",
  description: "Saiba como a Engineraxis trata dados dos visitantes, preferências de navegação e contatos pelo WhatsApp e e-mail.",
  path: "/privacidade",
});

export default function PrivacyRoute() {
  return <SiteContentShell><LegalDocumentPage kind="privacy" /></SiteContentShell>;
}
