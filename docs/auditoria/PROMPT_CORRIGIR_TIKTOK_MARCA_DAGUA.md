# Prompt para corrigir a incompatibilidade de marca no TikTok

Use no Codex aberto no repositório do **aplicativo AXIS CLIPES**, com frontend e backend. A regra **A foi escolhida pelo responsável**. Uma implementação local está em `apps/VideoCliper`, branch `fix/tiktok-destination-watermark`, baseada no GitHub `f7b7413`. Integre-a com cuidado ao código mais recente do outro computador; não substitua suas alterações locais pela versão anterior do GitHub. Veja [o relatório da implementação](./IMPLEMENTACAO_TIKTOK_MARCA_DAGUA.md).

Registro das alternativas apresentadas (a escolha já foi respondida):

- **A:** TikTok sem marca promocional adicionada pelo aplicativo em todos os planos; demais destinos/exportações preservam suas regras.
- **B:** destino TikTok indisponível no gratuito, preservando a exigência de marca para esse plano.

Se a escolha não estiver informada, prepare a análise e pergunte qual regra aplicar antes de alterar direitos do plano gratuito. Não considere uma escolha automaticamente autorizada pelo tempo decorrido.

---

Corrija a incompatibilidade entre a marca promocional aplicada pelo AXIS CLIPES e o envio ao TikTok, seguindo a regra de produto informada acima. Implemente a correção no código real e execute os testes apropriados. Não entregue apenas sugestões.

## Contexto e fonte

O relatório recebido em 28/10/2026 identifica:

- bloqueio de marca promocional ou mídia sem comprovação de ausência em `backend/app/services/tiktok.py:285`;
- renderização/marca em `backend/app/services/video_cutter.py`, `backend/app/services/reel_adapter.py`, `backend/app/services/watermark_derivative.py` e configurações de projeto;
- mídia TikTok em `backend/app/services/tiktok_media.py` e publicação em `backend/app/workers/publisher_worker.py`;
- interface/planejamento no frontend e histórico/retry por destino;
- marca atualmente opcional e ausência de backend comercial/planos no escopo examinado.

Esses caminhos são pontos de partida: confirme o estado atual e as instruções do repositório antes de editar. Há alterações locais relevantes; preserve trabalho existente e não faça resets ou limpezas amplas.

Leia a fonte oficial vigente: https://developers.tiktok.com/docs/en/content-sharing-guidelines . A integração não deve acrescentar marca/logotipo promocional ao conteúdo compartilhado. A correção não equivale à aprovação de auditoria, escopos ou elegibilidade do app.

## Regra A — variante compatível por destino

1. Gere ou reutilize uma variante destinada ao TikTok sem marca promocional adicionada pelo AXIS, a partir da fonte ou de um intermediário comprovadamente limpo. Não tente retirar marcas de terceiros do conteúdo original.
2. Preserve a marca configurada para outros destinos/exportações. Num projeto com YouTube e TikTok, cada destino deve selecionar a variante adequada sem modificar destrutivamente o arquivo do outro.
3. Inclua a política de marca/destino e os demais parâmetros necessários na chave de cache ou identidade do artefato. Não reutilize uma variante marcada por colisão de cache.
4. A prévia apresentada, a confirmação do usuário, o agendamento, o upload e o retry TikTok devem se referir ao mesmo artefato/política. Não altere silenciosamente mídia já revisada de um agendamento existente; se a mudança exigir revisão, preserve o controle do usuário e explique o motivo.
5. Preserve a validação final de mídia. Não basta definir `watermark=false`, declarar o arquivo seguro ou mudar um flag sem garantir qual pipeline gerou o arquivo enviado. Se a fonte/geração não permitir provar a variante adequada, falhe com motivo claro.
6. Se a renderização falhar, o arquivo sumir ou a variante ficar desatualizada, bloqueie ou reprepare conforme as regras existentes. Nunca envie a variante promocional como fallback.
7. A variante é interna: não é um segundo clipe ou uma segunda publicação. Não duplique upload, histórico, retry ou consumo de cota por gerar dois arquivos. Preserve deduplicação, isolamento por conta/destino e bloqueios de resultado remoto incerto.
8. Considere concorrência, referência de arquivos e limpeza: a conclusão de um destino não deve remover mídia ainda necessária ao outro. Não implemente a limpeza integral proposta em outra tarefa.

## Regra B — destino indisponível no gratuito

1. Identifique se há implementação real de planos no estado atual. Se não houver, reporte a dependência; não invente um flag de cliente ou cadastro fictício para aparentar controle de assinatura.
2. Onde houver autorização de plano real, impeça o destino TikTok no gratuito no backend e na interface, com mensagem clara antes de agendar/processar ações desnecessárias.
3. Mantenha prévia e validação de mídia compatível também para usuários elegíveis. Não contorne a regra com Inbox, reenvio ou alteração de metadados.

## Requisitos comuns

- Preserve restrições reais de Inbox/Direct Post, elegibilidade, scopes, privacidade, divulgação comercial, consentimento, conta de destino e estados remotos. Não marque o app como aprovado/auditado sem evidência.
- Preserve permissões autorais e conteúdo do criador; não apague, recorte ou desfoque marcas de terceiros para passar uma validação.
- Não inclua marca ou propaganda do AXIS em frames, miniaturas enviadas, legendas ou outros elementos como substituto disfarçado da marca bloqueada. Reveja qualquer material adicional gerado pelo app que integre o envio.
- Não altere políticas de autocura, fusos, tolerâncias, filas ou limites comerciais sem necessidade para esta correção. Não transforme o limite proposto de 20 em cota oficial do TikTok.
- Não acesse valores de `.env`, tokens, chaves, mídia pessoal ou bancos reais. Não faça upload/publicação real, revogação de contas ou cobrança. Use fixtures e serviços mockados, com banco/arquivos descartáveis.
- Não reinicie serviços reais ou importe inicializadores com migrações contra dados de usuário apenas para verificar a mudança. Siga os ambientes isolados de teste existentes.

## Testes mínimos relevantes

Adapte os testes ao desenho real, demonstrando:

- projeto com YouTube/TikTok seleciona as variantes corretas sem contaminação de cache;
- marca promocional e mídia de proveniência insuficiente continuam bloqueadas;
- preview e upload mockado recebem o artefato correto;
- falha de geração não causa fallback marcado;
- retry usa o artefato/política corretos e não repete envio de resultado incerto;
- dois destinos e contas diferentes não compartilham indevidamente mídia/estado;
- a limpeza de um destino não apaga mídia ainda pendente;
- se a regra B foi escolhida, autorização real é verificada no backend e o usuário entende a indisponibilidade.

Execute testes existentes relevantes, além de build/lint do frontend se alterado. Informe os comandos e resultados atuais; não reutilize os números do relatório anterior como novos testes.

## Entrega para o assistente do site

Na resposta final, apresente:

1. Regra A/B efetivamente aplicada e comportamento por destino.
2. Arquivos/funções alterados, com referências de linha.
3. Como a seleção de mídia, prévia, revisão, cache, upload e retry foram protegidos.
4. Testes/comandos executados e resultados reais.
5. Dependências não resolvidas, incluindo planos ausentes, configuração/API em execução ou aprovações externas.
6. Texto curto que já pode constar no site, distinguindo alteração implementada, teste isolado e disponibilidade pública.

Não declare integração totalmente aprovada ou incompatibilidade resolvida se a alteração não puder ser aplicada/testada. Se o repositório do aplicativo estiver indisponível, informe exatamente o que falta.
