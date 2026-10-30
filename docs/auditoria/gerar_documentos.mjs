// Keep the offline drafts and current-state summary aligned with the website data.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const url = (source) => "data:text/javascript;base64," + Buffer.from(source).toString("base64");
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const configUrl = url(read("src/config/institutionalData.js"));
const auditUrl = url(read("src/data/appAuditFindings.js"));
const reviewUrl = url(read("src/data/legalReviewStatus.js").replace('"./appAuditFindings"', JSON.stringify(auditUrl)));
const documentsUrl = url(read("src/data/legalDocuments.js")
  .replace('"../config/institutionalData"', JSON.stringify(configUrl))
  .replace('"./legalReviewStatus"', JSON.stringify(reviewUrl)));
const { legalDocuments } = await import(documentsUrl);
const text = legalDocuments["pt-BR"];

for (const language of ["pt-BR", "en"]) {
  const localized = legalDocuments[language];
  for (const key of ["auditItems", "confirmedItems", "pendingItems", "privacy", "terms"]) {
    if (!Array.isArray(localized[key]) || !localized[key].length) throw new Error("Missing document data: " + language + ":" + key);
  }
  for (const kind of ["privacy", "terms"]) {
    const titles = localized[kind].map(([title]) => title);
    if (new Set(titles).size !== titles.length) throw new Error("Duplicate section titles: " + language + ":" + kind);
  }
}

const evidence = [
  "Fonte recebida: [relatório do aplicativo, 28/10/2026](./fontes/RELATORIO_APP_RECEBIDO_2026-10-28.txt).",
  "A fonte descreve o diretório de trabalho do aplicativo com HEAD `f7b74138cffb3d5ab60e68f58e0d2daa8ba8da19`, 129 entradas modificadas e 62 não rastreadas. O commit sozinho não representa o estado examinado.",
  "A árvore mais recente do aplicativo indicada na fonte não foi disponibilizada neste workspace. Uma cópia posterior do GitHub recebeu uma correção isolada de TikTok, documentada separadamente; a auditoria integral e os testes da árvore original não foram repetidos. A revisão editorial de 30/10/2026 atualizou os textos e não validou as demais funções do aplicativo.",
];
const audit = ["## " + text.auditTitle, "", text.auditNote, "", ...text.auditItems.map((item) => "- " + item)];
const requirements = ["## " + text.confirmedTitle, "", text.confirmedNote, "", ...text.confirmedItems.map((item) => "- **Decisão registrada, não validação operacional:** " + item)];
const pending = ["## " + text.pendingTitle, "", ...text.pendingItems.map(([title, body]) => "- [ ] **" + title + ":** " + body)];
const write = (name, lines) => fs.writeFileSync(path.join(root, "docs/auditoria", name), lines.join("\n") + "\n", "utf8");

for (const [kind, name] of [["privacy", "POLITICA_PRIVACIDADE_RASCUNHO.md"], ["terms", "TERMOS_DE_USO_RASCUNHO.md"]]) {
  write(name, [
    "# " + (kind === "privacy" ? text.privacyTitle : text.termsTitle) + " — AXIS CLIPES", "",
    "**" + text.draft + "**", "", text.reviewed, "", ...evidence, "",
    kind === "privacy" ? text.privacyIntro : text.termsIntro, "", ...audit, "", ...requirements, "", ...pending, "",
    "## Texto da minuta", "",
    ...text[kind].flatMap(([title, body], index) => ["### " + (index + 1) + ". " + title, "", body, ""]),
    "Esta minuta não foi aprovada. Relatório técnico, informação do responsável e implementação testada são evidências diferentes.",
  ]);
}
write("ESTADO_ATUAL.md", [
  "# Estado atual dos documentos legais", "", "**Relatório recebido e incorporado em 28/10/2026.**", "", ...evidence, "",
  ...audit, "", ...requirements, "", ...pending, "",
  "## Histórico e validações", "",
  "- Versões anteriores à incorporação: `historico/antes_relatorio_app_2026-10-28/`.",
  "- A fonte relata testes anteriores de uma alteração da Central: 94 backend aprovados e 1 ignorado, 9 PostgreSQL e 78 de interface aprovados, build e lint aprovados. Eles não foram repetidos nesta auditoria do aplicativo nem validam a versão inteira, cobrança, instalador ou telemetria.",
  "- A coleta do aplicativo relatou análise estática e metadados; não executou uploads reais, exclusões, cobrança, envio de e-mails, build/lint ou testes funcionais nessa etapa.",
  "- Verificação HTTPS pública em 30/10/2026: inicial com www HTTP 200; /axisclipes, /privacidade e /termos com www HTTP 404. A versão institucional local recebeu avisos próprios do site e passou build/9 testes Chrome; implantação e configurações efetivas de produção continuam pendentes. Ver PREPARACAO_PUBLICACAO_INSTITUCIONAL.md.", "",
  "## Próximas respostas do responsável", "",
  "1. Regra TikTok já respondida: sem marca promocional da AXIS em todos os planos. Correção local implementada; falta integrar ao código mais recente e homologar.",
  "2. Em 29/10/2026, o responsável informou YouTube aprovado e TikTok aguardando aprovação. Falta conferir alcance/escopos nos consoles, sem repetir a pergunta já respondida.",
  "3. Preço, meios de pagamento, intermediador final e fornecedor de hospedagem continuam pendentes até nova definição do responsável. Verificação pelo intermediador já escolhida; Stripe é apenas possibilidade, sem integração ou capacidade de verificação confirmadas.", "",
  "Lançamento inicial definido em 30/10/2026: somente usuários no Brasil, com primeira versão exclusivamente para Windows. Versões do Windows e requisitos mínimos expressamente mantidos pendentes pelo responsável em 30/10/2026; arquitetura e compatibilidade efetiva também dependem de validação técnica, sem anunciar suporte a versões/configurações específicas. Fluxo de disponibilização ainda precisa de implementação/validação; essa decisão não define residência de todos os dados, fornecedor definitivo ou lei/foro.", "",
  "Ryan Lopomo declarou ser o único titular do código próprio, marca e materiais originais do AXIS; a declaração exclui componentes de terceiros e não substitui conferência documental ou comprovação de registro de marca.", "",
  "Código próprio fechado e um computador ativo por conta nos planos gratuito e pago foram definidos em 29/10/2026. Transferência permitida após desativação anterior; bloquear nova ativação/acesso enquanto houver um ativo, preservando o acesso existente. Desativação normal pelo aplicativo e pelo site; perda/quebra do computador anterior exige solicitação ao suporte pelo próprio site ou aplicativo. Esses canais de suporte ainda precisam ser implementados e validados; o e-mail permanece como contato de privacidade. Falta definir limite de instalações e verificação de titularidade pelo suporte e implementar/testar os controles; a revisão das licenças de terceiros permanece pendente.", "",
  "Suporte: análise pela IA de mensagens e anexos voluntários, com indicador de pagante repassado pelo backend. Pagamentos, renovação, recuperação de conta e ações com risco de segurança ficam com o técnico humano. Manter pedido humano direto e confirmação explícita para ações permitidas. IA responderá dúvidas frequentes e tratará falhas simples do programa; técnico atenderá casos mais complexos. Liberação de computador será encaminhada ao técnico por alterar controle de acesso, sob a restrição mais recente de segurança. Rotinas simples de correção ainda precisam ser definidas, implementadas e testadas, com confirmação explícita antes da execução. Fornecedor, retenção e controles ainda pendentes de definição/implementação.", "",
  "Backup automático dos projetos será local no computador do usuário, sem envio à AXIS/nuvem por esse recurso. Preservar vídeo finalizado ou estado/arquivos para retomar o projeto da etapa em que parou. Apagar backups correspondentes na exclusão do projeto ou limpeza após todas as postagens. Em 30/10/2026, definidos checkpoint ao concluir cada etapa e somente o último backup válido por projeto, substituindo o anterior apenas após validar o novo salvamento e preservando-o em caso de falha. Ao reabrir após interrupção, oferecer ‘Voltar de onde parei’; aguardar a escolha do usuário para retomar do último checkpoint válido, mantendo as configurações salvas. Projetos interrompidos e backups expirarão após 30 dias de inatividade desde o último uso de cada projeto individualmente; abrir o app ou usar outro projeto não reinicia esse prazo. Avisar cinco dias antes na central de notificações do próprio app, sem e-mail para esse evento. Se não puder avisar antes, ao reabrir excluir imediatamente arquivos expirados, sem prazo adicional e antes de oferecer retomada. Excluir arquivos do projeto gerenciados pelo app, incluindo cópia do original, clipes/finalizado, legendas, transcrições, intermediários e backup/checkpoint; preservar somente o histórico com links publicados até exclusão pelo usuário. Definir controles técnicos/arquivos compartilhados e implementar/testar expiração, sem alterar prazos de logs, telemetria, assinatura ou histórico de links. Arquivos/pontos seguros de retomada, destino, espaço, proteção, implementação da opção, restauração e remoção ainda precisam de definição ou implementação/teste. Não confundir com backups de serviços comerciais e suporte.", "",
  "Ollama exclusivamente no computador do usuário foi a decisão confirmada em 29/10/2026; a restrição ao endpoint local ainda precisa de implementação/verificação. Retenção de solicitações de suporte no site/app e mensagens de contato por e-mail/WhatsApp continua a definir.", "",
  "Telemetria definida em 29/10/2026: médias de CPU/GPU em porcentagem e RAM em MB; calendário de Brasília; envio somente do mês-calendário anterior à data efetiva de envio e exclusão local dos relatórios pendentes mais antigos, sem acúmulo. Implementação e validação continuam pendentes.", "",
  "O endereço foi completado pelo responsável: Rua Graça Aranha, sem número, Colônia, Jundiaí/SP, CEP 13219-040. Em 30/10/2026, ele confirmou ter conferido nome empresarial, CNPJ e endereço no comprovante oficial, sem correções, e confirmou WhatsApp +55 13 99108-7633. Não houve consulta cadastral independente pelo assistente.",
  "Cadastro, assinatura, cobrança, instalador e telemetria foram confirmados como ainda não prontos. As metas anteriores de desenvolvimento não foram tratadas como recursos implementados.",
  "Intenção mantida de uso sem idade mínima; compras restritas a titulares de CPF com 18 anos completos ou mais. Verificação prevista por intermediador de pagamentos; Stripe citada apenas como possibilidade. Método/capacidade de verificação, fornecedor final, dados recebidos e retenção ainda não definidos; não se presume armazenamento de CPF nem vínculo de responsável legal. Proteção de menores, aprovação jurídica e data de vigência não foram preenchidas por presunção.",
]);
process.stdout.write("Offline drafts and current state generated from PT/EN website data.\n");
