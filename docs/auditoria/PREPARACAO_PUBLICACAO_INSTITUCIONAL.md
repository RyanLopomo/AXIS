# Preparação da versão institucional — 30/10/2026

**Entrega local para revisão. Não houve deploy, push ou aprovação jurídica nesta etapa.**

A redação foi submetida a nova [revisão editorial e análise preventiva de riscos em 30/10/2026](./REVISAO_EDITORIAL_E_RISCOS_JURIDICOS_2026-10-30.md). Foram retiradas ambiguidades de oferta/responsabilidade e promessas genéricas de segurança; as lacunas de retenção, bases legais e configuração continuam pendentes.

## Separação realizada

- `/privacidade` e `/termos` usam `src/data/siteLegalDocuments.js`, exclusivo do site institucional.
- As propostas e decisões do aplicativo permanecem em `src/data/legalDocuments.js`, `legalReviewStatus.js` e nos rascunhos em `docs/auditoria`. Não foram convertidas em contrato de produto disponível nem apagadas.
- As páginas públicas não importam a minuta do aplicativo ou o relatório de auditoria. Documentos internos não são copiados para `public` nem recebem rota pública.
- `/axisclipes` apresenta desenvolvimento, primeira versão planejada para Windows/Brasil, sem data, requisitos ou preços inventados. Não oferece download, checkout, login, conexão social ou atendimento por IA.
- As versões em inglês permanecem disponíveis; isso não altera o público planejado para o lançamento do aplicativo.

## Contato e proteção técnica

- E-mail de exemplo substituído pelo endereço confirmado `engineeraxisltda@gmail.com`.
- Perfis genéricos Instagram/LinkedIn retirados da seção pública por falta de confirmação. O WhatsApp `+55 13 99108-7633` foi confirmado pelo responsável em 30/10/2026 e centralizado na configuração institucional.
- Removida a promessa não confirmada de resposta em 24 horas.
- Formulário com aviso antes do encaminhamento ao WhatsApp e link de privacidade. Os dados continuam apenas no estado da página até a ação do usuário; abrir o WhatsApp leva o texto preparado à URL desse serviço, antes do eventual envio da mensagem. Não há endpoint do site recebendo o briefing.
- Envio por Enter é tratado pelo mesmo fluxo do botão, evitando submissão acidental à URL da página. Novas janelas usam `noopener,noreferrer`; campos possuem rótulos e limites de tamanho.
- Preferências de idioma/tema respeitam o estado salvo e toleram bloqueio de localStorage.
- Adicionados cabeçalhos básicos: nosniff, frame denial, no-referrer, Permissions-Policy, DNS prefetch desativado e diretivas CSP para base, objetos, enquadramento e formulários. Essa CSP é parcial; não é uma alegação de proteção completa contra XSS.
- `X-Powered-By` removido e URLs canônicas usam o domínio informado quando a variável pública não estiver definida.
- Google Fonts foi mantido, com conexão externa descrita no aviso. Não foi adicionado analytics, banner de consentimento fictício, pixel ou novo coletor de dados.

## Confirmações recebidas e pendências restantes

1. **WhatsApp — confirmado:** em 30/10/2026, o responsável confirmou `+55 13 99108-7633` como o número correto da Engineraxis. Não perguntar novamente.
2. **Cadastro — conferido pelo responsável:** confirmou ter conferido nome empresarial Ryan Lopomo, CNPJ `69.569.807/0001-46` e endereço no comprovante oficial, sem correções. A conferência foi informada pelo titular; o assistente não realizou consulta cadastral independente. Isso não comprova registro de marca.
3. **Retenção de contatos:** o prazo das mensagens WhatsApp/e-mail permanece expressamente a definir. Não foi inventado prazo de eliminação, nem aplicado o prazo dos logs do aplicativo ao site.
4. **Vercel:** confirmar registros realmente ativos, campos, prazo de conservação/exclusão, acessos, região, exportações e recursos opcionais. Usar [o prompt de coleta](./PROMPT_COLETA_VERCEL_E_PRODUCAO.md).
5. **Revisão:** validar os textos públicos com o tratamento real e obter a revisão jurídica aplicável antes de considerá-los versão definitiva aprovada. O aviso deixa explícitos os períodos ainda não confirmados; isso não substitui sua definição. As confirmações cadastrais e de WhatsApp acima já foram respondidas.

Fornecedor de pagamento, fornecedor da IA de suporte, testes Windows, correções do aplicativo e termos de sua futura distribuição continuam no checklist do produto. Não são apresentados como funções operacionais do site institucional.

## Produção atual: verificação externa

Consulta HTTPS pública em 30/10/2026, por `curl -I -L` com validação TLS:

| URL | Resultado |
|---|---|
| `https://www.engineraxis.com.br` | HTTP 200 |
| `https://www.engineraxis.com.br/axisclipes` | HTTP 404 |
| `https://www.engineraxis.com.br/privacidade` | HTTP 404 |
| `https://www.engineraxis.com.br/termos` | HTTP 404 |

Vercel e HSTS foram observados nos cabeçalhos dessa publicação. Isso não comprova implantação das alterações locais, configuração dos logs ou segurança integral. O domínio ainda precisa receber o build/revisão correta e ser testado novamente após o deploy.

## Validação local

- Build de produção Next.js/TypeScript aprovado.
- **9 testes Playwright aprovados no Chrome**, executados contra o build de produção em `127.0.0.1:3417`.
- Quatro rotas públicas HTTP 200 e cabeçalhos configurados presentes. Tentativa de acesso a um rascunho em `/docs/auditoria/` retornou 404.
- Navegação e documentos PT/EN, persistência de idioma/tema, navegação com localStorage bloqueado e ausência de erros JavaScript nos fluxos verificados.
- Formulário testado por Enter, com dados sintéticos e `window.open` interceptado: URL WhatsApp codificada corretamente, sem envio real de mensagem, sem POST ao site e sem dados do formulário na URL institucional.
- Na navegação local das quatro páginas, armazenamento com apenas `axis-language` e `axis-theme`, nenhum cookie observado e conexões externas automáticas limitadas a Google Fonts. Isso não comprova ausência de scripts ou cookies adicionados pela hospedagem em produção.
- Layouts de 360, 768 e 1440 pixels, imagens do produto nos temas claro/escuro e ausência de links de compra/download verificados.
- `git diff --check` aprovado. O teste é reproduzível por `npm run test:public`; instruções no README.
- Evidência adicional da navegação e cabeçalhos locais: [verificacao-local.json](./preview-institucional/verificacao-local.json). Prévia visual: [AXIS CLIPES desktop](./preview-institucional/axisclipes-desktop.png) e [privacidade no celular](./preview-institucional/privacidade-mobile.png), inspecionadas nesta etapa.

Esses resultados não são certificação de segurança ou aprovação jurídica e não validam o aplicativo AXIS CLIPES, que não foi alterado nesta etapa.

## Fontes consultadas

- [LGPD — texto disponibilizado pelo Ministério da Justiça](https://www.gov.br/mj/pt-br/assuntos/sua-protecao/sedigi/Lei13709.pdf): transparência, finalidade, duração, identificação e direitos.
- [ANPD — direitos dos titulares](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares).
- [ANPD — guia de cookies](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf).
- [Vercel Privacy Notice](https://vercel.com/legal/privacy-notice) e [Runtime Logs](https://vercel.com/docs/logs/runtime): documentação geral não comprova a configuração deste projeto.
- [Next.js — headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers).
