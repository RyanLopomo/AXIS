# Retenção e exclusão — confronto com a fonte recebida

**Atualização: 28/10/2026.** [Fonte](./fontes/RELATORIO_APP_RECEBIDO_2026-10-28.txt). Não foram executadas exclusões neste workspace.

## O que o relatório descreve

| Operação | Alcance relatado | Limite importante |
|---|---|---|
| Limpeza pós-publicação | Tenta remover miniaturas, renders e certos derivados quando configuração/estados permitem | Preserva originais, SRT e referências compartilhadas; não remove integralmente transcrições, áudio e intermediários |
| Falha/pendência de publicação | Preserva mídia em vários estados de recuperação, autenticação e finalização | Nova tentativa depende de arquivo válido; estado remoto incerto bloqueia reenvio |
| Manutenção | Rotina manual reaplica limpeza | Execução periódica não identificada no Compose |
| Excluir projeto | Exclui projeto/relacionados no banco e tenta remover pasta com contenção de caminho | Operações/notificações podem conservar referências; não comprova excluir tudo |
| Excluir publicação | Exclusão lógica, com IDs/URLs e arquivos compartilhados preservados | Ocultar não é remoção integral; não apaga vídeo já publicado |
| Reiniciar vídeo | Remove pasta `clips` do projeto e transcrição associada | Pasta compartilhada pode afetar outros vídeos; risco estático não testado destrutivamente |
| Desconectar YouTube | Desabilita conta local e remove credencial | Revogação remota Google não encontrada; perfil/histórico permanecem |
| Desconectar TikTok | Tenta revogar e remover credencial | Falha pode manter credencial cifrada e `revocation_pending` |
| Remover containers | Não é desinstalador de produto | Pastas, volumes e localStorage podem permanecer |

Evidências da fonte: `backend/app/youtube/cleanup.py:12`, `:32`, `:50`; `backend/app/api/projects.py:154`; `backend/app/services/publication_batch.py:243`; `backend/app/api/videos.py:258`; `backend/app/api/social_accounts.py:214`.

## Prazos existentes não são política geral

Resultados RQ: 7 dias; falhas RQ: 30 dias; progresso/heartbeat temporário de vídeo: 24 horas. Validade OAuth de 10 minutos e cache de prévia de uma hora também não significam exclusão de projeto, arquivos, histórico ou logs.

## Requisitos do responsável ainda não cumpridos/comprovados

- Limpeza integral incluindo original baixado e transcrições: **divergente** da limpeza seletiva.
- Logs do app por 1 dia, depois exclusão automática: **divergente**, mecanismo não encontrado.
- Médias mensais recebidas por 2 dias: **somente planejado**, receptor não encontrado.
- Histórico somente local até o usuário removê-lo integralmente: persistência na instalação descrita, mas **remoção completa não comprovada**.
- Exclusão comercial imediata por `Excluo minha conta`, com encerramento de cobranças: **somente planejado**, cadastro/cobrança não encontrados.
- Desinstalação apagando todos os dados locais: **não verificável**, desinstalador não encontrado.

Esses requisitos permanecem registrados nos rascunhos internos do aplicativo como metas de desenvolvimento já informadas, com implementação e testes pendentes. Até que o aplicativo seja ajustado, sua descrição operacional continua refletindo o comportamento seletivo do relatório; não é necessário repetir decisões anteriores para registrá-las como metas. Decisões posteriores sobre backups e expiração estão consolidadas nos rascunhos atuais e no checklist; não foram encontradas como funções comprovadas pelo relatório original. Os prazos de logs Vercel e de dados comerciais continuam dependentes de definição/configuração. Retenção legal e restituições dependem de revisão jurídica.
