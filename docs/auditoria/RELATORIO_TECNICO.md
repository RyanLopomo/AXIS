# Consolidação do relatório técnico recebido — AXIS CLIPES

**Fonte fornecida em 28/10/2026. Não é auditoria reexecutada neste workspace.**

[Relatório recebido completo](./fontes/RELATORIO_APP_RECEBIDO_2026-10-28.txt) · [Estado atual](./ESTADO_ATUAL.md) · [Checklist](./PENDENCIAS_LEGAIS.md)

O relatório descreve a árvore de trabalho do aplicativo com HEAD `f7b74138cffb3d5ab60e68f58e0d2daa8ba8da19`, 129 entradas modificadas e 62 não rastreadas. O commit não identifica sozinho os arquivos examinados. O caminho do aplicativo indicado na fonte não está disponível neste computador; as referências de código abaixo pertencem ao relatório, não a inspeção independente nossa.

**Resposta posterior do responsável:** cadastro, assinatura, cobrança, instalador e telemetria ainda não estão prontos, e o fornecedor de hospedagem continua pendente. O endereço declarado foi completado para Rua Graça Aranha, sem número, Colônia, Jundiaí/SP, CEP 13219-040. Não houve consulta cadastral independente. Essa confirmação registra o estágio de desenvolvimento, sem deduzi-lo apenas da ausência de download.

## Resultado para os textos do site

O aplicativo examinado é uma aplicação com interface React/Vite, API FastAPI, PostgreSQL, Redis/RQ, processamento FFmpeg/Faster-Whisper e chamadas ao Ollama, além de OAuth e publishers YouTube/TikTok. O Compose usa loopback e volumes persistentes. Isso não é um serviço comercial de cadastro/assinatura já implementado nem um instalador Windows.

| Tema | Resultado recebido | Evidência citada na fonte | Ajuste aplicado ao site |
|---|---|---|---|
| Projetos e mídia | Importação, transcrição, renderização, legendas, prévia/exportação identificadas | `backend/app/api/videos.py:124`; `backend/app/services/transcriber.py:17`; `backend/app/services/subtitle_generator.py:22` | Descrição como recursos identificados no relatório, sujeitos a configuração |
| Login Google de clientes | Não identificado; OAuth de redes é distinto | `frontend/src/App.tsx:806`; inventário de modelos | Tratado como requisito futuro, sem atribuir coleta comercial de e-mail ao app atual |
| Planos/cobrança/cadastro | Não identificados no escopo examinado | Inventário de rotas/modelos | Regras do responsável preservadas como planejamento; nenhum contrato/oferta atual criado |
| Limites e marca | Marca opcional; limite operacional default 5; sem ledger comercial único de 20 ou limite 1/6 contas | `backend/app/schemas/project.py:11`; `backend/app/youtube/config.py:40`; `backend/app/api/social_accounts.py:125` | Não apresentar os limites comerciais como aplicados |
| Limpeza | Seletiva, com originais e SRT preservados; sem remoção integral de transcrição/áudio | `backend/app/youtube/cleanup.py:12`, `:32`, `:50` | Retirada promessa operacional de limpar tudo; divergência explícita |
| Logs | stdout/stderr, sem exclusão automática por 1 dia encontrada | `backend/app/utils/pipeline_logger.py:5` | Prazo de 1 dia mantido apenas como objetivo a implementar |
| Telemetria mensal | Coletor, fila e receptor não encontrados | Inventário de fontes/configurações | Médias mensais, escolha e retenção de 2 dias descritas como proposta |
| Instalador/atualização/desinstalação | Não encontrados; empacotamento Docker | `docker-compose.yml`; Dockerfiles | Não prometer atualização ou remoção completa na versão examinada |
| Agendamento | Depende de serviços locais, mídia, rede e autorização; navegador pode estar fechado | `backend/app/workers/publisher_worker.py:419`; `backend/app/services/schedule_contract.py:14` | Dependências e ausência de operação com computador desligado descritas |
| TikTok | Inbox exige finalização; Direct Post condicionado; bloqueio de marca promocional | `backend/app/services/tiktok.py:123`, `:285`, `:354` | Não igualar upload a publicação pública; conflito da marca gratuita adicionado ao checklist |
| Histórico | Persistido em DB; exclusão lógica e referências podem permanecer | `backend/app/services/publication_batch.py:254`; `backend/app/models/publication.py:80` | Não prometer exclusão integral do histórico |
| Termos/avisos | Bloqueio de entrada, aceite versionado e e-mail não encontrados | Inventário de interface e serviços | Decisões de aceite/reaceite e avisos mantidas como requisitos futuros |

## Configurações que o relatório resolveu parcialmente

- `OLLAMA_URL`: default público `http://localhost:11434/api/generate`; fallback `host.docker.internal:11434/api/generate`; pode ser remoto. Cliente declara `qwen3:8b`. Configuração efetiva e retenção no serviço continuam desconhecidas.
- `WHISPER_MODEL=small`, `WHISPER_DEVICE=cpu`, `WHISPER_COMPUTE_TYPE=int8` são defaults, não requisitos mínimos de hardware nem garantia de desempenho.
- `MAX_UPLOADS_PER_DAY=5`, `PUBLISH_TIMEZONE=America/Sao_Paulo` e `CLEANUP_AFTER_PUBLISH=true` são defaults; preferências persistidas podem prevalecer. Não constituem limites dos planos comerciais.
- `YOUTUBE_AUTO_PUBLISH=false` e `TIKTOK_PUBLISHING_ENABLED=false` por default; flags de configuração não comprovam aprovação de plataforma.
- Não foram lidos valores de `.env`, tokens, bancos, backups ou mídia. Nomes de variáveis e defaults não comprovam estado da implantação.

## Testes: escopo exato

A fonte relata, **antes da coleta**, 94 testes backend aprovados e 1 ignorado, 9 PostgreSQL e 78 de navegador aprovados, build e lint aprovados para a alteração da Central de Publicações. A própria coleta não repetiu build/lint/testes funcionais, uploads, exclusões, cobrança, e-mail, scanner de vulnerabilidades ou verificações nos consoles. Não somar esses números a outros totais históricos ou usá-los para validar o produto inteiro.

A nota operacional que precede o relatório também informa que a nova API ainda precisava ser carregada no ambiente em execução. O [contexto completo recebido](./fontes/CONTEXTO_COMPLETO_RECEBIDO_2026-10-28.txt) foi preservado; não houve reinício ou implantação de API por este trabalho. Estado do código e estado do serviço em execução não foram equiparados.

Neste workspace foram alterados apenas textos, apresentação e documentação do site. Nenhum código do aplicativo foi corrigido nem operação de publicação/exclusão/cobrança foi executada.

## Bloqueios principais

Ver [segurança](./SEGURANCA.md), [retenção](./RETENCAO_E_EXCLUSAO.md), [integrações](./INTEGRACOES.md) e [checklist](./PENDENCIAS_LEGAIS.md). Aprovação jurídica, distribuição comercial, aprovações das plataformas e configuração efetiva continuam pendentes. As versões anteriores foram preservadas em `historico/antes_relatorio_app_2026-10-28/` e não são o estado atual.
