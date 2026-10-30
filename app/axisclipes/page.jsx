import { AxisClipesPage } from "../../src/components/content/AxisClipesPage";
import { SiteContentShell } from "../../src/components/layout/SiteContentShell";
import { pageMetadata, absoluteSiteUrl } from "../../src/config/siteMetadata";

export const metadata = pageMetadata({
  title: "AXIS CLIPES | Criação inteligente de clipes",
  description: "Conheça o AXIS CLIPES, ferramenta em desenvolvimento para criação de clipes com assistência de IA. Lançamento planejado para Windows e Brasil.",
  path: "/axisclipes",
  image: absoluteSiteUrl("/Dark/01_dark.png"),
});

export default function AxisClipesRoute() {
  return <SiteContentShell><AxisClipesPage /></SiteContentShell>;
}
