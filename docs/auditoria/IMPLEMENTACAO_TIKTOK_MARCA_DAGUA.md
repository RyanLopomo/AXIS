# Correção local: saída TikTok sem marca promocional

Data: 28/10/2026. Regra escolhida expressamente pelo responsável: **TikTok sem marca promocional adicionada pela AXIS em todos os planos, inclusive gratuito; demais destinos permitidos preservam a regra da marca do gratuito.**

## Código e limites da entrega

- Repositório informado: https://github.com/RyanLopomo/VideoCliper.
- Cópia local: `C:/Users/R/Documents/AXIS/apps/VideoCliper`.
- Branch: `fix/tiktok-destination-watermark`, baseada no commit `f7b7413`.
- O relatório recebido examinou também alterações não commitadas do outro computador. Elas não estão no GitHub clonado. Esta implementação não substitui nem valida essas alterações mais recentes.
- Implementação local, sem commit, push, merge, publicação do site ou upload real para plataformas.
- Patch transportável: `patches/tiktok-destination-watermark.patch`, com caminhos relativos à raiz do aplicativo. Usar `git apply --check` antes de integrar; se houver diferenças, adaptar os trechos com revisão. Não sobrescrever o código mais recente com arquivos antigos.

## Comportamento implementado

1. A prévia/publicação TikTok usa uma variante gerada a partir do vídeo original e das legendas salvas, com `show_logo=False`. A versão promocional existente não é usada como fallback nem modificada. Não há tentativa de remover marcas de terceiros já presentes na fonte.
2. A variante possui manifesto, identificação dos insumos e SHA-256 do arquivo. Fonte/legendas/estilo/recorte alterados, mídia ausente, corrompida ou assinatura diferente exigem nova preparação/revisão. A identificação dos arquivos de origem usa caminho, tamanho e horário de alteração; não é uma análise visual de marcas presentes no conteúdo original.
3. `POST /clips/{id}/tiktok/prepare` gera/reutiliza a variante sob bloqueio da linha do clipe; `GET /clips/{id}/tiktok/stream` e `/download` exigem a assinatura da variante.
4. A tela mostra a prévia TikTok separada, aguarda seu carregamento e apresenta erro/repetição se a preparação falhar. Envia a assinatura dessa versão junto da confirmação. Preserva o modo Inbox/Direct da publicação em revisão.
5. Inbox e Direct Post exigem revisão e consentimento. Os planos de agendamento TikTok aguardam revisão; o publisher valida a variante antes da inicialização remota. Limites, escopos, privacidade, elegibilidade, divulgação comercial e proteção contra resultado remoto incerto continuam ativos.
6. O `PULL_FROM_URL` existente aponta para a variante verificada. A implementação não acrescenta `FILE_UPLOAD`, não valida domínio nos consoles e continua exigindo a configuração HTTPS verificada prevista pelo aplicativo.
7. A limpeza só remove as variantes/manifestações após as proteções existentes para destinos pendentes. Não implementa a política futura de apagar integralmente original/transcrição. Dois arquivos internos continuam correspondendo ao mesmo clipe e às publicações já existentes por destino.
8. Um teste com FFmpeg revelou escape insuficiente dos caminhos de legenda no Windows. `subtitle_filter` agora aplica escape nas duas camadas do filtro. O lockfile do frontend também foi corrigido: faltava `@emnapi/runtime`, impedindo `npm ci`.

## Arquivos principais

- `backend/app/services/tiktok_media.py`: preparação e verificação da variante.
- `backend/app/api/clips.py`, `backend/app/api/publications.py`, `backend/app/services/tiktok.py`: preparação, prévia, confirmação e envio.
- `publication_destinations.py`, `publication_scheduler.py`, `publication_batch.py`, `publisher_worker.py`: planejamento, revisão e uso do arquivo por destino.
- `backend/app/youtube/cleanup.py`, `backend/app/services/subtitle_generator.py`: limpeza segura das variantes e escape das legendas.
- `frontend/src/App.tsx`, APIs e seletor de destinos: prévia TikTok e assinatura revisada.
- `backend/tests/test_tiktok_media.py`, `test_tiktok_ffmpeg.py`, `frontend/tests/social-publications.spec.ts`: verificação da correção.

## Validação executada

- **15 testes de backend aprovados**: 14 testes isolados e um teste opcional com FFmpeg real. Cobrem variante limpa e render principal preservado, cache, alteração de legenda, corrupção, ausência de fonte, falha de render, prévia, Inbox/Direct, consentimento/escopos, deduplicação e limpeza aguardando ambos os destinos com banco SQLite temporário.
- O teste FFmpeg gerou um vídeo sintético, executou corte/adaptação/legendas, decodificou a saída 1080×1920 e verificou a ausência da sobreposição vermelha sintética presente apenas no render principal. O pacote portátil não inclui ffprobe: somente nesse teste, a sondagem usa metadados lidos do FFmpeg. A instalação de produção continua exigindo FFmpeg e ffprobe.
- **9 testes Playwright aprovados no Chrome**: contas, planejamento por destino, filtros, prévia/assinatura Direct Post, falha de preparação, modo Inbox e layouts em 320/768/1440 pixels. APIs sociais são simuladas; a prévia usa um arquivo sintético decodificável. Não representam publicação remota real.
- Frontend do aplicativo: `npm run build` e `npm run lint` aprovados.
- Site: documentos PT/EN regenerados e `npm run build` aprovado.
- `git diff --check` e verificação de aplicação do patch na base original.

Reprodução dos testes Python: `PYTHONPATH=backend`, `FFMPEG_SMOKE=1`, Python 3.12 com as dependências do backend e `imageio-ffmpeg`, então `python -B -m unittest discover -s backend/tests -v`. Sem `FFMPEG_SMOKE=1`, o teste opcional de mídia é ignorado. Frontend: `PLAYWRIGHT_CHANNEL=chrome` e `node node_modules/@playwright/test/cli.js test social-publications.spec.ts --workers=1`.

## Pendências reais

- Integrar a correção com a árvore mais recente do outro computador e repetir as verificações nesse código.
- Homologar vídeos representativos do produto, FFmpeg/ffprobe do ambiente final, prévia, agendamento e entrega remota em ambiente autorizado.
- Confirmar aprovações, domínio HTTPS, escopos e elegibilidade efetivos nos consoles TikTok/YouTube. A correção de marca não equivale à aprovação do aplicativo.
- Definir/implementar controles comerciais, instalador, autenticação/isolamento antes de exposição pública e demais itens do checklist jurídico/técnico. As rotas de mídia seguem o modelo de acesso já existente; a assinatura de integridade não é autenticação.

Referências oficiais: [diretrizes TikTok sobre compartilhamento e marca](https://developers.tiktok.com/docs/en/content-sharing-guidelines) e [escape de filtros FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#Notes-on-filtergraph-escaping).
