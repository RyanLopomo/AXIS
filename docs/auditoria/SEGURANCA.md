# Segurança — achados recebidos e escopo atual

**Fonte: relatório do aplicativo fornecido em 28/10/2026.** [Texto integral](./fontes/RELATORIO_APP_RECEBIDO_2026-10-28.txt). A coleta descrita nesta seção não executou exploração nem inspeção de segredos, banco ou mídia reais. A correção posterior de TikTok na cópia local do GitHub e seus testes isolados estão documentados em `IMPLEMENTACAO_TIKTOK_MARCA_DAGUA.md`; não equivalem a uma auditoria integral da versão mais recente. A prioridade abaixo reproduz o alcance técnico descrito na fonte; não comprova exploração real.

| Prioridade/tema | Achado descrito | Evidência citada na fonte |
|---|---|---|
| Antes de exposição pública | Sem autenticação/autorização de cliente ou isolamento multiusuário; filtros sociais não são fronteira entre clientes | `backend/app/services/local_api_security.py:7`; modelos |
| Importação não confiável | Validação URL não rejeita de forma equivalente rede privada/loopback antes do yt-dlp; prévia tem proteção adicional não reutilizada | `backend/app/services/video_source.py:6`; `backend/app/api/videos.py:327`; `backend/app/services/preview_source.py:21` |
| Preservação de dados | Reiniciar vídeo remove pasta de clipes compartilhada no projeto | `backend/app/api/videos.py:263` |
| Privacidade | Limpeza integral e logs de 1 dia não correspondem ao código; referências podem sobreviver | Ver mapa de dados e retenção |
| Credenciais | Chave pode ficar próxima ao armazenamento cifrado; ACL Windows/backups não verificados | `backend/app/services/social_credentials.py:11`, `:17`, `:48` |
| Legado | Migração para cifra não remove necessariamente o JSON legado; presença real não inspecionada | `backend/app/services/social_credentials.py:108` |
| Consumo de recursos | Upload sem limite explícito de tamanho naquela função, com cópia antes da validação de duração | `backend/app/api/videos.py:142` |
| Infraestrutura | Credenciais fixadas no código/Compose; Redis sem autenticação configurada naquele Compose; host em loopback reduz exposição padrão | `backend/app/db/database.py:4`; `backend/app/queue/redis_connectiuon.py:4`; Compose |
| Reprodutibilidade | Backend sem lock completo; PyAV instalado diverge do pin declarado | `backend/requirements.txt`; metadados descritos na fonte |
| Distribuição | Instalador, atualizador, desinstalador e cadeia de integridade não encontrados | Manifests e inventário da fonte |

## Controles positivos relatados

Loopback no Compose, validação Host/Origin, cookie OAuth HTTP-only, state de uso único, cifragem no fluxo atual, verificação de identidade por conta, guardas de caminho/imagem, comandos FFmpeg por listas e controles de deduplicação/resultado incerto. Eles não substituem autenticação multiusuário, gestão operacional de chaves ou auditoria dinâmica.

## Dependências e licenças

A coleta do aplicativo não executou scanner de vulnerabilidades. Não afirmar ausência de CVEs ou atualização suficiente. O inventário cita FFmpeg compilado com GPL, versões de ferramentas e bibliotecas e licenças parciais; pesos dos modelos, artefatos completos e licença geral do produto continuam pendentes. Não se conclui compatibilidade jurídica de distribuição.

As auditorias anteriores do site e seus resultados de dependências foram preservados no histórico; não são uma auditoria atual das dependências do aplicativo. Esta consolidação não atualizou pacotes nem corrigiu código do app, que está fora do workspace.

## Bloqueios de lançamento

Rever autenticação/isolamento conforme implantação, SSRF, preservação de arquivos compartilhados, limites de recursos, segredos/legado, retenção/exclusão, volumes/backups, versões reproduzíveis, licenças e integridade do instalador/atualizador. Aprovação comercial, jurídica e de plataformas não foi obtida por esta coleta.
