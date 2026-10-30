# Integrações — relatório recebido em 28/10/2026

[Relatório completo](./fontes/RELATORIO_APP_RECEBIDO_2026-10-28.txt). Os achados abaixo são atribuídos à fonte e não foram reexecutados neste workspace.

## Respostas adicionais do responsável — 29/10/2026

- Informou ter recebido aprovação da integração YouTube e estar aguardando aprovação TikTok. Não houve consulta aos consoles para conferir o alcance dessa aprovação ou os escopos efetivos, nem confirmação de aprovação de login comercial Google.
- Definiu execução do Ollama exclusivamente no computador do usuário, sem servidor remoto de IA. O endpoint configurável descrito abaixo pode ser remoto: a decisão exige restrição e validação no aplicativo; não comprova o comportamento atual.
- Manteve a retenção de mensagens recebidas por e-mail/WhatsApp a definir, separada dos prazos de logs e estatísticas.

| Integração | Código descrito | Limite de verificação |
|---|---|---|
| Google/YouTube | OAuth, canal, uploads, metadados, miniaturas e agendamento; escopos youtube.upload/youtube.readonly e youtube.force-ssl em gerenciamento | Não é login comercial Google; aprovação e concessão efetiva não consultadas; revogação remota equivalente não encontrada |
| TikTok | OAuth Web/Desktop, PKCE Desktop, envio Inbox/Direct Post, estado remoto, renovação e revogação | Inbox requer finalização manual; Direct Post depende de configuração/elegibilidade/aprovação; falhas de revogação preservam credencial pendente |
| Marca no TikTok | Bloqueia envio com marca promocional ou sem comprovação de ausência | Conflita com proposta comercial de marca obrigatória no gratuito; não converter o achado de código em afirmação geral de política externa |
| Ollama | Texto da transcrição/contexto via HTTP; default localhost:11434/api/generate, fallback host.docker.internal; cliente qwen3:8b | URL configurável pode ser remota; ambiente efetivo, modelos instalados e retenção não verificados |
| Faster-Whisper | Transcrição do arquivo local, defaults small/cpu/int8; biblioteca pode baixar modelo | Download de modelo não equivale a envio de áudio; artefato/revisão/pesos não verificados |
| yt-dlp/origens | Download por URL e prévias | Compatibilidade depende da origem; proteção SSRF da importação precisa revisão |
| Notificações | Interface, som e navegador conforme preferências/permissão | Sem serviço de e-mail ou push independente identificado; janela/permissões afetam notificações |
| Cadastro/assinatura/telemetria | Backend comercial e coletor/receptor mensais não encontrados | Outro repositório pode existir; não comprovar hospedagem São Paulo ou fluxos propostos por declaração |

Evidências da fonte: `backend/app/api/social_accounts.py:82`, `:118`, `:180`, `:195`, `:214`; `backend/app/services/tiktok.py:123`, `:285`, `:354`, `:383`; `backend/app/services/ollama_client.py:7`; `backend/app/services/transcriber.py:17`; `backend/app/services/notifications.py:13`.

Flags como `TIKTOK_APP_AUDITED`, `TIKTOK_DIRECT_POST_ELIGIBLE` ou modo Desktop não comprovam aprovação nos consoles. Retenção de validade OAuth, cache, upload assinado e polling não é prazo geral de exclusão.

## Diretriz de marca e correção proposta

As [diretrizes oficiais de compartilhamento do TikTok](https://developers.tiktok.com/docs/en/content-sharing-guidelines), consultadas nesta etapa, orientam a não adicionar marca/logotipo ou material promocional da integração ao vídeo compartilhado. Isso confirma a finalidade do bloqueio descrito no relatório, sem validar o aplicativo inteiro.

A regra escolhida pelo responsável é TikTok sem marca promocional da AXIS em todos os planos, preservando a marca do gratuito nos demais destinos permitidos. A variante foi implementada e testada isoladamente na cópia local do GitHub `apps/VideoCliper`, branch `fix/tiktok-destination-watermark`. Veja [o relatório da implementação](./IMPLEMENTACAO_TIKTOK_MARCA_DAGUA.md). O código GitHub é anterior às alterações locais descritas na auditoria recebida: integração com esse código mais recente, renderização real e homologação com as plataformas continuam pendentes. A mudança não comprova aprovação TikTok nem implementa planos comerciais.

## Site institucional

Google Fonts no CSS e encaminhamento WhatsApp estão identificados no código local do site. Cookies/SDKs/rede, cabeçalhos e implantação efetiva continuam sem auditoria dinâmica completa. O site usa Next.js, enquanto o frontend do aplicativo descrito no relatório usa Vite; não misturar suas dependências ou testes.
