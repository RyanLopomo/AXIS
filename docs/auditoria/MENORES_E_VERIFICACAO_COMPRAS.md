# Menores e verificação de compras — decisões de 29/10/2026

Minuta para revisão. Este registro não comprova adequação jurídica, implementação de controle ou autorização para coletar novos dados em produção.

## Informações do responsável

- Mantém a intenção de permitir o uso sem idade mínima, por avaliar que a ferramenta não oferece conteúdo nocivo.
- Define compras de planos somente para compradores titulares de CPF com 18 anos completos ou mais.
- Definiu que a verificação ficará com um intermediador de pagamentos. Stripe foi citada como possibilidade; a escolha final e as demais questões de pagamento continuam pendentes.
- Método/capacidade de verificação, fornecedor final, dados recebidos pelo AXIS, retenção de CPF/data de nascimento e relação entre comprador adulto e usuário menor não foram definidos. Não se presume armazenamento desses dados nem que a aprovação de pagamento comprove maioridade.

## Limites dessa decisão

A ausência de conteúdo considerado nocivo não substitui avaliação dos riscos reais, tratamento de dados, segurança e melhor interesse de menores. A [orientação da ANPD sobre o escopo do ECA Digital](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-guia-que-esclarece-quem-deve-cumprir-e-quais-sao-as-responsabilidades-das-plataformas-na-protecao-de-criancas-e-adolescentes) considera as características e o provável acesso ao produto, não apenas a declaração do fornecedor. A aplicação ao AXIS e as medidas necessárias ainda exigem avaliação e revisão jurídica.

A [Receita Federal informa que pessoas de qualquer idade podem ter CPF](https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/cpf/assuntos-relacionados/perguntas-e-respostas/Perguntas%20e%20Respostas). Assim, possuir CPF ou validar seus dígitos não demonstra idade adulta nem confirma que quem compra é seu titular. O fluxo precisa verificar a condição de comprador com pelo menos 18 anos por mecanismo a definir, sem coletar ou reter documentos por presunção.

Consultar também a [Lei nº 15.211/2025 — ECA Digital](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm). A política de compra por adulto não foi tratada como autorização genérica de uso por menor nem como dispensa das salvaguardas aplicáveis.

## Pendências

- Selecionar e validar método/fornecedor do intermediador para verificar idade e titularidade do comprador. Stripe é apenas uma possibilidade; verificar sua capacidade efetiva e o fluxo contratado, sem atribuir funcionalidades por presunção.
- Definir quais resultados/dados o AXIS recebe e quais, se houver, retém, com finalidade, acesso, proteção e prazo.
- Definir se o comprador adulto deve ser o responsável legal do usuário menor e como esse vínculo será tratado.
- Avaliar e implementar medidas para menores, incluindo eventual participação de responsáveis, conforme enquadramento jurídico e riscos do produto.
- Validar o checkout, a verificação e os documentos antes de oferecer contratação. Nada foi implantado em produção nesta etapa.
