// Received report, not an audit rerun against the application in this workspace.
export const appAuditFindings = {
  "pt-BR": {
    auditTitle: "O que o relatório técnico recebido esclareceu",
    auditNote: "Fonte: relatório do aplicativo fornecido em 28/10/2026, sobre uma árvore de trabalho com alterações locais. A auditoria integral dessa árvore não foi repetida aqui. A correção posterior e os testes isolados de TikTok na cópia local do GitHub estão documentados separadamente e não validam a versão inteira. Identificação no código não equivale a funcionamento em produção ou aprovação das plataformas.",
    auditItems: [
      "Projetos, importação, transcrição com Faster-Whisper, seleção assistida por Ollama, renderização, legendas, exportação, contas sociais, publicação, agendamento e tratamento de falhas foram identificados no código descrito pelo relatório.",
      "Login comercial Google, cadastro de clientes, planos, cobrança, exclusão de cadastro, telemetria mensal e aceite versionado dos Termos não foram encontrados nos componentes examinados. Permanecem propostas de desenvolvimento.",
      "Instalador Windows, atualizador e desinstalador não foram encontrados. O empacotamento examinado usa Docker; não comprova instalação nativa ou remoção completa dos dados.",
      "A limpeza pós-publicação é seletiva: preserva originais e legendas SRT e não comprova remoção integral de transcrições e outros arquivos. A exclusão completa do histórico também não foi comprovada.",
      "Não foi encontrada exclusão automática de logs em um dia. A marca d’água é opcional, sem vínculo com planos; o limite operacional tem default de cinco, não a cota comercial única de vinte.",
      "O agendamento normal depende dos serviços, arquivos, rede e computador disponíveis. TikTok Inbox exige finalização manual; upload aceito não garante publicação pública. O código bloqueia envio TikTok com marca promocional ou sem comprovação de sua ausência.",
      "O endpoint Ollama é configurável e pode ser remoto. A afirmação de que a AXIS jamais terá acesso aos vídeos depende de implantação, permissões e backups; não foi comprovada como garantia absoluta.",
    ],
  },
  en: {
    auditTitle: "What the received technical report clarified",
    auditNote: "Source: app report supplied on 28 Oct 2026, covering a working tree with local changes. The full audit of that working tree was not repeated here. A later TikTok fix and isolated tests in the local GitHub copy are documented separately and do not validate the entire release. Code identification does not establish production operation or platform approval.",
    auditItems: [
      "Projects, imports, Faster-Whisper transcription, Ollama-assisted selection, rendering, captions, exports, social accounts, publishing, scheduling, and failure handling were identified in the code described by the report.",
      "Commercial Google sign-in, customer registration, plans, billing, registration deletion, monthly telemetry, and versioned Terms acceptance were not found in the examined components. They remain development proposals.",
      "A Windows installer, updater, and uninstaller were not found. Examined packaging uses Docker; it does not establish native installation or complete data removal.",
      "Post-publication cleanup is selective: it preserves originals and SRT captions and does not establish complete removal of transcripts or other files. Complete history deletion was also not established.",
      "Automatic one-day log deletion was not found. Watermarking is optional and not plan-based; the operational limit defaults to five, not a single commercial quota of twenty.",
      "Normal scheduling requires available services, files, networking, and computer. TikTok Inbox requires manual completion; accepted uploads do not guarantee public publication. Code blocks TikTok uploads with promotional watermarks or without evidence of their absence.",
      "The Ollama endpoint is configurable and may be remote. An absolute claim that AXIS can never access videos depends on deployment, permissions, and backups and was not established.",
    ],
  },
};
