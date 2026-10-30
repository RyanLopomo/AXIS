import { LegalDocumentPage } from "../../src/components/content/LegalDocumentPage";
import { SiteContentShell } from "../../src/components/layout/SiteContentShell";
import { pageMetadata } from "../../src/config/siteMetadata";

export const metadata = pageMetadata({
  title: "Termos de Uso | AXIS",
  description: "Condições de navegação no site institucional da Engineraxis, contato comercial e apresentação do AXIS CLIPES em desenvolvimento.",
  path: "/termos",
});

export default function TermsRoute() {
  return <SiteContentShell><LegalDocumentPage kind="terms" /></SiteContentShell>;
}
