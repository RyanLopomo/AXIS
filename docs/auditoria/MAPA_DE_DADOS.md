# Mapa de dados — relatório recebido em 28/10/2026

**Escopo:** fonte fornecida pelo usuário, sem acesso ao repositório do app neste workspace. [Fonte completa](./fontes/RELATORIO_APP_RECEBIDO_2026-10-28.txt).

## Aplicativo descrito na fonte

| Categoria | Destino/persistência descrita | Retenção/exclusão encontrada | Evidência da fonte |
|---|---|---|---|
| Perfis YouTube/TikTok | PostgreSQL e interface: IDs, nomes/títulos e avatares | Podem permanecer ao desconectar | `backend/app/api/social_accounts.py:180`, `:195` |
| Estado OAuth | Banco/payload cifrado e cookie HTTP-only | Validade de 10 minutos não comprova expurgo | `backend/app/api/social_accounts.py:82`, `:118` |
| Originais | Armazenamento da instalação, pasta de fonte no projeto | Preservados na limpeza pós-publicação; pasta removida na exclusão do projeto | `backend/app/api/videos.py:142`; `backend/app/youtube/cleanup.py:50` |
| URLs de origem | Campo do vídeo no banco e respostas API | Sem TTL geral identificado | `backend/app/api/videos.py:65`, `:327` |
| Áudio/transcrição | Chunks WAV, `transcript.json`; texto enviado ao Ollama | Sem remoção integral após sucesso; reinício/exclusão podem remover parte | `backend/app/services/transcriber.py:28`; `backend/app/pipeline/stages.py:92` |
| Clipes/legendas | Arquivos e banco; render/SRT | Limpeza seletiva; SRT preservado | `backend/app/youtube/cleanup.py:12`, `:32` |
| Prompts e resultados IA | HTTP para endpoint configurado; arquivos/banco de planejamento | Retenção do endpoint não verificada | `backend/app/services/ollama_client.py:15` |
| Agendamentos e operações | PostgreSQL, por conta/destino, razões e horários | Sem expurgo geral; referências podem sobreviver ao projeto | `backend/app/models/publication.py:39`, `:80` |
| IDs/links e notificações | Banco e interface | Exclusão lógica pode preservar dados | `backend/app/services/publication_batch.py:254` |
| Tokens | Arquivos cifrados no fluxo atual, com caminhos JSON legados | Remoção local em desconexão, com exceções; sem revogação Google equivalente encontrada | `backend/app/services/social_credentials.py:48`; `backend/app/api/social_accounts.py:214` |
| Preferências | localStorage: tema, conta/contexto, layout/notificações | Sem limpeza central encontrada | `frontend/src/contexts/SocialAccountContext.tsx:9`; `frontend/src/App.tsx:649` |
| Métricas operacionais | API/banco/Redis: tentativas, contagens e tempos operacionais | Não são telemetria mensal de hardware | `backend/app/main.py:132`, `:156` |
| Logs | stdout/stderr: eventos, IDs, caminhos, duração e erros | Sem expurgo automático de 1 dia encontrado | `backend/app/utils/pipeline_logger.py:5` |
| Backups | Infraestrutura, host e possíveis cópias externas | Não verificável no escopo | Fonte, seção 4 |

## Dados comerciais e telemetria futura

E-mail/cadastro de clientes, assinatura, faturamento e receptor de estatísticas mensais não foram encontrados. O responsável confirmou posteriormente que esses componentes ainda não estão prontos; não informou outro repositório operacional. As decisões de servidores em São Paulo, retenção de médias por 2 dias, login Google comercial e avisos por e-mail continuam requisitos, não tratamentos comprovados na aplicação examinada. Fornecedor de hospedagem permanece pendente.

## Site institucional

O código do site mantém idioma/tema em localStorage, prepara briefing em memória e abre WhatsApp com conteúdo na URL; Google Fonts é carregado por CSS. Logs e configurações da hospedagem Vercel continuam sem validação operacional. Não confundir o site com o frontend local Vite do aplicativo, nem OAuth das plataformas com login comercial.

Regiões, contratos, permissões administrativas e eventual sincronização/backup do computador não foram verificados. O endpoint Ollama pode ser remoto; ausência absoluta de acesso ou transferência não foi comprovada.
