# Revisão editorial e análise preventiva de riscos — 30/10/2026

**Situação: textos locais revisados; publicação e aprovação jurídica não realizadas.** Os níveis abaixo são prioridades preventivas baseadas nos textos e nas evidências disponíveis, não conclusões de ilicitude ou certificação de conformidade. As decisões comerciais do responsável foram preservadas; lacunas não foram preenchidas como se fossem fatos comprovados.

## Escopo e correções

Revisados os textos atuais em português e inglês: apresentação institucional, Sobre, serviços, contato, portfólio, página do AXIS CLIPES, avisos públicos de privacidade e termos, rascunhos internos do aplicativo e notas atuais de auditoria. Fontes recebidas e arquivos de histórico foram preservados como evidência, sem reescrever declarações antigas como se fossem atuais. Não houve nova auditoria integral do código do aplicativo ou das configurações da Vercel.

- Corrigidas concordância, padronização da marca AXIS, construções ambíguas e correspondência entre português e inglês.
- Substituída a expressão “projeto seguro”, que poderia sugerir garantia, por planejamento técnico e escopo definido em proposta.
- Descrições de aplicativos sob medida passaram a indicar plataformas definidas por projeto, evitando confusão com o lançamento Windows do AXIS CLIPES.
- Faixas de orçamento passaram a ter limites sem sobreposição; são informação fornecida pelo visitante, não tabela de preços da Engineraxis.
- Rodapé, títulos dos documentos e rótulos de contato passaram a indicar o escopo institucional de forma consistente.
- Explicado que o formulário prepara uma mensagem para um serviço externo, sem salvar seus campos em servidor próprio, e que o preenchimento automático depende do navegador.
- Removida a formulação ampla de que uma mensagem nunca confirma contratação. O texto distingue briefing inicial de proposta e aceite válidos, inclusive eletrônicos.
- Preservados direitos legais nas cláusulas de oferta, responsabilidade, serviços externos e reutilização de conteúdo.
- Rascunhos do aplicativo ganharam seções separadas para checkpoints/retomada, expiração, arquivos removidos, dados do suporte e limites da IA, sem mudar os prazos e as escolhas já informados.
- Explicitado o direito de arrependimento de sete dias nas relações de consumo à distância em que seja aplicável, sem transformar cancelamento comum em direito irrestrito a reembolso.
- Corrigidas notas que poderiam confundir o relatório original do aplicativo com a correção posterior isolada do TikTok. Os rascunhos foram regenerados a partir das fontes de dados.
- Fontes auxiliares de Sobre/serviços foram alinhadas às traduções atuais; a lista auxiliar de contatos conserva somente os dois canais confirmados, evitando reintroduzir perfis genéricos.

## Riscos do site institucional

| Prioridade | Achado e alcance | Tratamento realizado ou necessário |
|---|---|---|
| **Alta — pendente** | Conservação de mensagens e configuração dos registros Vercel ainda sem prazo/fluxo confirmado. | O aviso continua transparente sobre a lacuna. Definir finalidade, duração/critério de guarda, revisão, exclusão, acesso e exportações. A redação não substitui uma rotina real. |
| **Alta — pendente** | Bases legais e papéis de cada agente não foram formalmente mapeados. | O contato solicitado pelo visitante é distinto de publicidade, preferências e registros de segurança. Mapear cada operação, documentar a hipótese aplicável e avaliar necessidade/proporcionalidade. Não presumir consentimento geral nem legítimo interesse automático. |
| **Alta — pendente** | Vercel, fontes e serviços de contato podem envolver tratamento internacional e configurações fora deste repositório. | O aviso informa conexões externas. Conferir fornecedores, papéis, contratos, mecanismos de transferência e configuração efetiva antes da aprovação definitiva. Público brasileiro não comprova residência brasileira dos dados. |
| **Média — mitigada na redação** | Expressões genéricas de segurança, disponibilidade ou resultado poderiam criar expectativas excessivas. | Textos comerciais revisados e recurso em desenvolvimento identificado. Afirmações objetivas futuras devem corresponder a testes e à oferta real. |
| **Média — pendente** | Portfólio contém nomes, imagens e referências de projetos de terceiros. | Retirada a alegação de identidade visual “exclusiva”. Confirmar autorização, direitos de imagem, marcas, capturas e eventual confidencialidade dos trabalhos apresentados. Não foi concluído que exista infração. |
| **Média — pendente** | Titularidade foi declarada por Ryan, mas registro e alcance de proteção da marca não foram comprovados. | Mantida a declaração sem afirmar marca registrada. Conferir buscas/registro no INPI e documentos aplicáveis quando necessário; CNPJ e domínio não substituem essa conferência. |
| **Operacional — pendente** | Última checagem pública encontrou inicial 200 e três rotas novas 404. | Publicar a revisão correta e repetir a verificação das páginas, links, rede e cabeçalhos no deploy. Testes locais não homologam a produção. |

A LGPD exige informação clara sobre finalidade, forma/duração, identificação, contato e compartilhamento, além de proteção adequada aos dados. Prazo “a definir” é uma pendência real, não solução de conformidade. Fontes: [LGPD, arts. 6º–10, 15–18 e 46](https://presidencia.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm) e [guia da ANPD sobre legítimo interesse](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-lanca-guia-orientativo-sobre-legitimo-interesse).

Transferências internacionais exigem avaliação própria; citar a política de um fornecedor não comprova o mecanismo aplicável a esta operação. Fonte: [ANPD — transferência internacional e Resolução nº 19/2024](https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados). A [política geral da Vercel](https://vercel.com/legal/privacy-notice) não demonstra quais recursos ou períodos estão configurados neste projeto.

## Riscos antes de oferecer o aplicativo

| Prioridade | Achado e alcance | Condição para avançar |
|---|---|---|
| **Alta** | Intenção de uso sem idade mínima, sem controles específicos comprovados. Comprador adulto e usuário menor são sujeitos distintos. | Avaliar provável acesso, melhor interesse, aferição de idade e participação de responsáveis. CPF válido ou pagamento aprovado não comprova maioridade nem vínculo com um responsável legal. |
| **Alta** | Expiração de arquivos após 30 dias, inclusive exclusão ao reabrir sem aviso previamente entregue, pode causar perda inesperada. | Manter a regra escolhida claramente visível antes de usar o recurso. Validar contador por projeto, aviso aos 25 dias, arquivos atingidos, estados de processamento/agendamento, arquivos compartilhados e histórico preservado. A regra não autoriza exoneração ampla por danos. |
| **Alta** | Um único checkpoint no mesmo computador pode não sobreviver à perda/dano do dispositivo. | Informar limites e testar substituição segura, falha de gravação e restauração. Não prometer retomada integral quando o arquivo ou a configuração não estiver disponível. |
| **Alta** | IA de suporte analisará mensagens, capturas e logs, com fornecedor/retenção ainda pendentes. Anexos podem conter credenciais e dados de terceiros. | Definir dados mínimos, revisão dos anexos, acesso humano, contratos, localização, retenção e eventual uso para treinamento. Conversas e logs não foram considerados anônimos. |
| **Alta** | “Falhas simples” e “sem risco de segurança” ainda não definem uma fronteira técnica de execução. | Implementar lista restrita de ações, autorização fora do modelo, confirmação por ação, proteção contra instruções maliciosas em anexos e encaminhamento humano. O texto não cria permissão para comandos irrestritos. |
| **Alta** | Compra, renovação, cancelamento e restituição ainda não implementados/validados. | Preservar opt-in de renovação, canais acessíveis e direitos legais. Desinstalar, excluir cadastro e cancelar plano são operações distintas e devem ter efeitos consistentes e demonstráveis. |
| **Alta** | Stripe é apenas candidata e pagamento não equivale à verificação de idade/titularidade. | Conferir serviço contratado e disponibilidade, resultados recebidos pelo AXIS, retenção e tratamento de CPF/documentos. A documentação de [Stripe Identity](https://docs.stripe.com/identity) descreve um recurso específico de identificação; não prova que esse fluxo esteja contratado, disponível ou configurado para esta operação. |
| **Alta** | Distribuição de código fechado com componentes, FFmpeg e modelos ainda sem aprovação do inventário de licenças. | Conferir builds, opções de compilação, forma de integração e distribuição, avisos e obrigações. Não concluir que todo o app deve ser aberto nem que todo binário é redistribuível apenas por citar GPL/LGPL. |
| **Alta** | Limpeza, exclusão, telemetria, aceite e autorização descritos como metas ainda divergem ou não foram demonstrados no código examinado. | Implementar e obter evidência na versão efetiva. Uma política não deve anunciar como operacional um controle só planejado. Aprovação YouTube informada não comprova aprovação TikTok ou login comercial Google. |

Informação/publicidade suficientemente precisa pode integrar a oferta; cláusulas não afastam direitos obrigatórios. O arrependimento de sete dias deve ser respeitado quando aplicável à contratação de consumo à distância. Não foi criada exceção automática por download, uso ou exclusão de cadastro. Mudanças e novo aceite também não autorizam alterações abusivas de contratos vigentes. Fonte: [CDC, arts. 30–31, 46, 49 e 51](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm).

Ausência de conteúdo considerado nocivo não resolve, sozinha, a proteção de menores: a análise considera características e provável acesso ao serviço. Fonte: [guia da ANPD sobre escopo e obrigações do ECA Digital](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-guia-que-esclarece-quem-deve-cumprir-e-quais-sao-as-responsabilidades-das-plataformas-na-protecao-de-criancas-e-adolescentes).

As condições de licença dependem dos componentes efetivamente utilizados e distribuídos. Fonte: [FFmpeg — licença e considerações legais](https://www.ffmpeg.org/legal.html). Para marca, consultar o [guia oficial do INPI](https://www.gov.br/inpi/pt-br/servicos/marcas/guia-basico). Nenhuma busca de anterioridade ou parecer de licenciamento foi realizado nesta revisão.

## O que depende de informação ou decisão externa

1. **Mensagens:** definir prazo/critério de conservação e rotina de exclusão/revisão. Continua pendente por decisão anterior; não foi escolhido um prazo arbitrário.
2. **Vercel:** executar o [prompt de coleta](./PROMPT_COLETA_VERCEL_E_PRODUCAO.md), sem segredos ou logs pessoais brutos.
3. **Portfólio e marca:** reunir autorizações e documentação aplicável; a declaração de autoria original já recebida não foi desconsiderada nem convertida em registro oficial.
4. **Aplicativo:** conferir a árvore mais recente, contratos/licenças dos fornecedores e provas dos controles. A cópia GitHub analisada anteriormente não substitui a árvore atualizada do outro computador.
5. **Revisão profissional:** validar bases legais, menores, condições de contratação/restituição, responsabilidades, transferências e datas reais antes de declarar documentos definitivos aprovados.

## Validação desta revisão

- `npm run build`: aprovado, incluindo compilação, TypeScript e geração das páginas estáticas.
- `npm run test:public` com Chrome, contra o build de produção local: **9 testes aprovados**, em 54,3 segundos. Cobertura de rotas/cabeçalhos, documentos públicos, idioma/tema, formulário sem envio real, armazenamento bloqueado, conexões externas e três larguras de tela.
- Rascunhos offline regenerados com `node docs/auditoria/gerar_documentos.mjs`.
- `git diff --check`: sem erros de espaços; avisos de conversão de finais de linha em arquivos existentes.

Nenhum deploy, cobrança, mensagem real de suporte, upload ou exclusão de arquivos de usuários foi executado por esta revisão textual. Os testes locais não comprovam configuração de produção nem funcionamento dos controles futuros do aplicativo.
