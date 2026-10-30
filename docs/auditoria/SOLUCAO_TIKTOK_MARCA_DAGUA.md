# Compatibilidade TikTok e marca promocional

## Estado da correção

- Diretriz oficial consultada: [TikTok Content Sharing Guidelines — Watermark Guidelines](https://developers.tiktok.com/docs/en/content-sharing-guidelines).
- O aplicativo não deve adicionar sua marca, logotipo ou outro material promocional aos vídeos enviados pela integração TikTok. A validação que bloqueia mídia promocional não deve ser removida para liberar o upload.
- O relatório recebido descreve esse bloqueio em `backend/app/services/tiktok.py:285`. Esse caminho pertence ao repositório do aplicativo informado na fonte, não ao site.
- O repositório do outro computador não está disponível aqui. O responsável informou o GitHub `RyanLopomo/VideoCliper`, clonado em `apps/VideoCliper` na branch `fix/tiktok-destination-watermark`, baseado em `f7b7413`. Essa versão não contém as alterações locais mais recentes descritas no relatório recebido.
- O responsável escolheu explicitamente TikTok sem marca promocional da AXIS em todos os planos, inclusive gratuito. A implementação local e seus testes estão registrados no [relatório da implementação](./IMPLEMENTACAO_TIKTOK_MARCA_DAGUA.md). Integração com o código mais recente e homologação real permanecem pendentes.

## Alternativa recomendada: saída por destino

Manter TikTok disponível no gratuito, gerando a saída destinada ao TikTok sem marca promocional adicionada pelo AXIS, em todos os planos. Para outros destinos e exportações permitidas, preservar a regra de marca do gratuito e a diferenciação comercial definida pelo responsável. Essa exceção explícita foi aprovada pelo responsável. O controle comercial de planos continua sendo requisito futuro.

A imagem enviada ao TikTok deve corresponder à prévia revisada pelo usuário. A correção é no artefato de mídia e no fluxo de revisão, não em um booleano que afirma que um vídeo marcado está limpo.

### Caminho técnico proposto

1. Identificar a fonte e o estágio em que a marca é aplicada. Renderizar a variante TikTok a partir da fonte ou de um intermediário comprovadamente sem marca do aplicativo.
2. Manter variantes/cache por política de destino: a variante TikTok não pode reutilizar por engano o render promocional de outro destino.
3. Não tentar cortar, desfocar ou remover marcas de terceiros já presentes no vídeo. Se não houver origem adequada ou não for possível comprovar a mídia selecionada, bloquear aquele envio com motivo claro.
4. Preservar as guardas de marca, elegibilidade, escopos, revisão, consentimento, formato e resultado remoto incerto para Inbox e Direct Post.
5. Usar o arquivo correto em prévia, confirmação, agendamento, upload e retry; uma falha na geração não pode causar fallback para arquivo marcado.
6. A variante interna não constitui um segundo clipe/publicação nem pode alterar contadores, duplicação de upload ou a política comercial de outros destinos.
7. Conservar arquivos compartilhados enquanto houver destinos pendentes. Não aproveitar essa tarefa para implantar a limpeza integral, que tem divergências próprias.

## Alternativa comercial

Se o responsável decidir não liberar vídeo TikTok sem marca no gratuito, tornar o destino indisponível nesse plano de forma explícita na interface e nos documentos. Não contornar pelo modo Inbox ou por uma alteração falsa de metadados. Planos comerciais não existem no código examinado: não inventar controle de assinatura para aparentar que essa alternativa já funciona.

## Critérios de conclusão

- Regra de produto escolhida e documentada.
- Código do aplicativo acessível e alteração efetiva no fluxo correto.
- Testes isolados de dois destinos, prévia, upload mockado, retry, cache e falha de geração.
- Vídeo marcado ou de origem incerta continua bloqueado; nenhuma validação essencial é desativada.
- Nenhum upload real, exclusão de dados de usuário ou envio de credenciais nos testes.
- Relatório da implementação recebido, com arquivos e resultados reais.
- Só então marcar a implementação como concluída no checklist do site. Aprovação do aplicativo pelo TikTok permanece uma verificação separada.

## Próximo passo no repositório do aplicativo

Integrar a implementação local ao código mais recente do aplicativo, usando [o prompt de implementação](./PROMPT_CORRIGIR_TIKTOK_MARCA_DAGUA.md) com a regra A já aprovada. Verificar FFmpeg com vídeo real, prévia, upload e permissões em ambiente autorizado antes de disponibilizar. Não foi feito push ou publicação.
