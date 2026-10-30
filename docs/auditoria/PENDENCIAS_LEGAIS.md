# Pendências atuais — documentos e aplicativo

**Relatório recebido em 28/10/2026; respostas do responsável atualizadas em 30/10/2026. Minuta não aprovada.**

[Estado atual](./ESTADO_ATUAL.md) · [Fonte completa](./fontes/RELATORIO_APP_RECEBIDO_2026-10-28.txt) · [Consolidação técnica](./RELATORIO_TECNICO.md)

[Revisão editorial e análise preventiva de riscos de 30/10/2026](./REVISAO_EDITORIAL_E_RISCOS_JURIDICOS_2026-10-30.md): redação pública corrigida, rascunhos organizados e riscos separados entre site institucional e futura oferta do aplicativo. Essa revisão não é aprovação jurídica.

Uma resposta do responsável registra uma decisão de produto; não marca uma implementação como concluída. A fonte mais recente do relatório recebido não foi reexecutada neste workspace. Posteriormente, a cópia do GitHub em `apps/VideoCliper` recebeu a correção TikTok e testes registrados em [IMPLEMENTACAO_TIKTOK_MARCA_DAGUA.md](./IMPLEMENTACAO_TIKTOK_MARCA_DAGUA.md); essa cópia é anterior às alterações locais relatadas. As versões anteriores estão em `historico/antes_relatorio_app_2026-10-28/`.

## Dados e decisões já registrados

- [x] Em 30/10/2026, definido lançamento inicial somente para usuários no Brasil, com primeira versão exclusivamente para Windows. Versões do sistema, arquitetura, requisitos mínimos e compatibilidade efetiva ainda precisam de definição ou validação em testes. Implementação/validação do fluxo de disponibilização permanece pendente; não se presumiram residência integral dos dados no Brasil, fornecedor definitivo nem escolha de lei/foro.

- [x] Backup automático dos projetos escolhido como recurso planejado, somente no computador do usuário, sem envio à AXIS/nuvem por esse recurso. Preservar vídeo finalizado ou estado/arquivos necessários para continuar o projeto da etapa em que parou. Apagar o backup correspondente na exclusão do projeto ou limpeza após todas as postagens. Em 30/10/2026, definidos checkpoints ao concluir cada etapa e apenas o último backup válido por projeto, substituído após validar o novo salvamento e preservado se esse salvamento falhar. Ao reabrir após interrupção, oferecer ‘Voltar de onde parei’ e aguardar a escolha do usuário; retomar do último checkpoint válido com as configurações salvas, sem retomada automática apenas por reabrir. Expiração de projetos interrompidos/backups definida em 30 dias de inatividade desde o último uso de cada projeto individualmente; usar outro projeto ou apenas abrir o app não reinicia o prazo. Aviso cinco dias antes da expiração somente na central de notificações do app, sem e-mail para esse evento. Caso o aviso não possa ser disponibilizado antes do prazo, ao reabrir excluir imediatamente arquivos expirados, sem prazo adicional e antes de oferecer retomada; a leitura do aviso não condiciona a exclusão. Remover arquivos daquele projeto gerenciados pelo app: cópia do original, clipes/finalizado, legendas, transcrições, intermediários e backup/checkpoint. Preservar somente o histórico com links publicados até exclusão pelo usuário. Definir controles técnicos e arquivos compartilhados; implementar/testar a expiração. Destino, espaço, arquivos/pontos seguros de retomada, restauração e exclusão ainda precisam de definição ou validação; backups comerciais e do suporte permanecem separados.

- [x] Ryan Lopomo declarou ser o único titular do código próprio, da marca e dos materiais originais do AXIS, sem outros autores/titulares declarados. A declaração exclui bibliotecas, modelos e demais componentes de terceiros; não substitui conferência documental ou comprovação de registro de marca.

- [x] Intenção mantida de uso sem idade mínima. Compras somente por titulares de CPF com 18 anos completos ou mais; não se presumiu adequação a todas as idades, armazenamento do CPF ou vínculo de responsável legal entre comprador e usuário menor. Verificação ficará com intermediador de pagamentos; Stripe citada apenas como possibilidade. Fornecedor final e questões de pagamento continuam pendentes. Ver [menores e compras](./MENORES_E_VERIFICACAO_COMPRAS.md).

- [x] Em 29/10/2026, o responsável informou aprovação da integração YouTube e aprovação TikTok ainda pendente. Alcance e escopos efetivos não foram consultados nos consoles; não confundir com aprovação de login comercial Google.
- [x] Decisão confirmada: Ollama exclusivamente no computador do usuário. A restrição de endpoint remoto ainda precisa de implementação e teste no aplicativo.
- [x] Retenção das mensagens de e-mail/WhatsApp expressamente mantida a definir; não aplicar os prazos de logs/telemetria a essas mensagens.
- [x] Ryan Lopomo, nome empresarial Ryan Lopomo, MEI, CNPJ 69.569.807/0001-46 e contato engineeraxisltda@gmail.com.
- [x] Endereço completo informado: Rua Graça Aranha, sem número, Colônia, Jundiaí/SP, CEP 13219-040. Registrado como informação do responsável, sem consulta cadastral independente.
- [x] Responsável confirmou que cadastro, assinatura, cobrança, instalador e telemetria ainda não estão prontos; continuam requisitos de desenvolvimento, com download indisponível.
- [x] Fornecedor de hospedagem expressamente mantido pendente; São Paulo, Brasil, permanece a região pretendida.
- [x] Suporte definido: IA poderá atender e analisar capturas/logs voluntários, com acesso às mensagens, anexos e indicador de pagante do backend. Encaminhar pagamentos, renovação, recuperação de conta e ações com risco de segurança ao técnico humano. Manter acesso pela mesma conta Google, histórico ao técnico, pedido humano direto e confirmação explícita para ações autorizadas. Divisão atual: IA responde dúvidas frequentes e trata falhas simples do programa; técnico atende casos mais complexos e as exceções de segurança. Neste planejamento, liberação de computador será encaminhada ao técnico por alterar controle de acesso, aplicando a restrição mais recente à permissão anterior mais ampla. Fornecedor e retenção pendentes; fluxo não implementado/validado.
- [x] Uso pessoal/comercial, distribuição oficial futura e suporte sem prazo comercial de resposta. Canal atualizado: suporte no próprio site e aplicativo; e-mail permanece para privacidade. Abertura/acompanhamento de solicitações e verificação de titularidade ainda precisam ser implementados e validados.
- [x] Em 29/10/2026, definidos código próprio fechado e um computador ativo por conta nos planos gratuito e pago. Transferência permitida após desativação anterior; bloquear nova ativação/acesso enquanto houver computador ativo, preservando o acesso existente. Desativação normal pelo aplicativo ou pelo site; em caso de perda/quebra do computador anterior, solicitar liberação ao suporte. Limite total de instalações e verificação de titularidade pelo suporte não foram definidos; licenças de terceiros continuam em revisão.
- [x] Regras futuras dos planos, cota de 20 somada, contas 1 por plataforma/6 total, marca d’água, troca diária e renovação.
- [x] Regras futuras de cancelamento, 30 dias de regularização, cancelamento da fatura correspondente, exclusão de cadastro e confirmação textual.
- [x] Intenção de limpeza integral pós-publicação, preservação de arquivos com falha e histórico local até exclusão.
- [x] Telemetria futura de médias RAM/CPU/GPU, escolha separada, envio mensal, descarte ao desativar e retenção recebida de 2 dias.
- [x] Em 29/10/2026, confirmados CPU/GPU em porcentagem e RAM em MB; calendário do envio no horário de Brasília. Enviar somente o mês-calendário imediatamente anterior à data efetiva de envio e apagar relatórios pendentes mais antigos, inclusive ao reabrir após vários meses sem uso. Não acumular envios de meses anteriores.
- [x] Prazo desejado de logs do aplicativo de 1 dia; não confundir com logs Vercel.
- [x] Relatório técnico recebido e incorporado; divergências explicitadas em PT/EN e apresentação do produto.

## Identificação e conclusão jurídica

- [x] Revisão editorial PT/EN dos textos atuais: clareza, concordância, limites de orçamento, escopo institucional, direitos legais preservados e organização dos rascunhos. Documentos históricos e fontes originais preservados.
- [ ] Resolver a matriz jurídica: retenção e bases legais do site, fornecedores/transferências, autorização do portfólio, proteção de menores, licenças e condições comerciais antes da aprovação definitiva. A correção textual não comprova implementação ou regularidade desses pontos.
- [x] Em 30/10/2026, o responsável confirmou ter conferido nome empresarial, CNPJ e endereço no comprovante oficial, sem correções. Conferência declarada pelo titular, sem consulta cadastral independente pelo assistente; não perguntar novamente.
- [x] Bairro, cidade/UF e CEP fornecidos e incorporados ao site em PT/EN; dados posteriormente conferidos pelo responsável conforme o item acima.
- [ ] Revisar controlador/operador, bases legais, contratos, transferências, lei/foro e condições comerciais.
- [ ] Aprovar documentos juridicamente e registrar data real de vigência; data da coleta não é vigência.
- [ ] Definir e implementar salvaguardas para menores, considerando o acesso sem idade mínima pretendido. A alegada ausência de conteúdo nocivo não dispensa proteção de dados, segurança e melhor interesse. Definir e testar verificação de comprador titular de CPF com 18 anos completos ou mais, incluindo titularidade, método, fornecedor, dados recebidos, retenção e tratamento do vínculo entre comprador adulto e usuário menor.
- [ ] Conferir documentalmente a titularidade exclusiva declarada de Ryan Lopomo e eventual registro da marca. Revisar licença do produto, build GPL do FFmpeg, bibliotecas nativas e pesos dos modelos. Inventário parcial não aprova distribuição.

## Divergências de implementação — bloqueios

- [ ] Implementar e validar a meta já informada de limpeza integral. No código relatado, originais e SRT são preservados; transcrições, áudio e intermediários não têm limpeza total comprovada. Até a alteração, o site descreve o comportamento seletivo atual e a meta futura separadamente.
- [ ] Implementar/testar retenção de logs por 1 dia ou revisar essa regra; não foi encontrada rotação/remoção que cumpra o prazo.
- [ ] Resolver remoção de histórico/IDs/operações/notificações: ocultação lógica não é exclusão completa.
- [ ] Desenvolver e validar login Google de clientes, cadastro, assinatura, cobrança, cancelamentos, faturas e exclusão; esses componentes foram confirmados como ainda não prontos, sem outro repositório operacional informado.
- [ ] Implementar cotas por plano, ledger único de 20 publicações, limites de contas, trocas diárias e marca condicionada ao plano. No código relatado, marca é opcional e limite operacional default é 5.
- [ ] Implementar e testar ativação e limite de um computador ativo por conta nos planos gratuito e pago. Aplicar transferência somente após desativação anterior e bloquear novo acesso enquanto houver computador ativo. Implementar desativação normal pelo aplicativo/site e liberação via suporte se o computador anterior estiver perdido, quebrado ou inacessível, sem cancelamento de assinatura ou exclusão de arquivos por essa ação. Definir limite de instalações e verificação de titularidade pelo suporte.
- [x] Regra escolhida: TikTok sem marca promocional da AXIS em todos os planos; marca do gratuito nos demais destinos permitidos.
- [x] Correção e testes isolados na cópia local do GitHub `apps/VideoCliper`, branch `fix/tiktok-destination-watermark`; ver relatório da implementação.
- [ ] Integrar com as alterações mais recentes do outro computador e homologar renderização/envio reais e permissões TikTok.
- [x] Diretriz oficial TikTok sobre material promocional adicionada à análise. Especificação por destino e prompt de implementação preparados em `SOLUCAO_TIKTOK_MARCA_DAGUA.md` e `PROMPT_CORRIGIR_TIKTOK_MARCA_DAGUA.md`.
- [x] Regra comercial e repositório informados; implementação local com 15 testes de backend (incluindo FFmpeg sintético), 9 testes de navegador e builds aprovados. Integração e homologação finais continuam pendentes conforme os itens acima.
- [ ] Implementar coletor/receptor, opção inicial, mudança de preferência, médias mensais de CPU/GPU em porcentagem e RAM em MB, calendário de Brasília e retenção recebida de 2 dias. A fila deve enviar somente o mês anterior à data efetiva do envio e apagar relatórios pendentes mais antigos; validar também descarte ao desativar. Verificar metadados do receptor e evitar afirmação de anonimização sem teste.
- [ ] Implementar aceite/reaceite versionado e comunicações por e-mail; notificações locais existentes não cumprem toda essa proposta.
- [ ] Primeira versão somente Windows já definida. Versões do Windows e requisitos mínimos expressamente mantidos pendentes em 30/10/2026; não perguntar novamente antes de novos testes/definição. Definir/validar arquitetura e compatibilidade; criar/testar instalador, atualização e desinstalador; remover containers não apaga necessariamente volumes e preferências.

## Segurança do aplicativo — fonte recebida, sem exploração nossa

- [ ] Autenticação/autorização e isolamento antes de exposição pública ou hospedagem para múltiplos clientes; Host/Origin/CORS não substituem autenticação.
- [ ] Unificar proteção contra SSRF nas importações por URL; não houve exploração executada.
- [ ] Corrigir/verificar reinício de um vídeo que remove pasta de clipes compartilhada do projeto.
- [ ] Definir limites de upload/recursos e validar entradas antes de gravação/processamento oneroso.
- [ ] Gerenciar chaves, ACLs Windows, credenciais fixadas no código/Compose e arquivos JSON legados; não foram lidos segredos ou arquivos reais de credenciais.
- [ ] Rever reprodutibilidade de dependências, divergência PyAV e licenças; scanner de CVEs não foi executado na coleta do aplicativo.
- [ ] Implementar/testar backup automático local dos projetos; preservar o vídeo finalizado ou estado/arquivos para continuidade e excluir os backups correspondentes ao excluir o projeto ou limpar arquivos após todas as postagens. Salvar checkpoint ao concluir cada etapa e manter somente o último backup válido por projeto; validar o novo salvamento antes de substituir o anterior e preservar o anterior em caso de falha. Implementar a opção ‘Voltar de onde parei’, aguardando escolha do usuário para retomar do último checkpoint válido com as configurações preservadas. Implementar/testar expiração após 30 dias de inatividade individual por projeto, reiniciando no uso daquele projeto e avisando cinco dias antes. Implementar aviso somente na central de notificações do app e exclusão imediata dos arquivos expirados ao reabrir, mesmo sem disponibilização prévia do aviso, sem prazo adicional e antes da retomada. Excluir arquivos daquele projeto gerenciados pelo app, incluindo cópia do original, clipes/finalizado, legendas, transcrições, intermediários e backup/checkpoint, preservando somente o histórico de links até exclusão pelo usuário. Definir e validar controles técnicos, arquivos compartilhados e preservação do histórico; não prometer exclusão local ou aviso durante desligamento. Esse prazo não altera logs, telemetria, assinatura ou histórico de links. Definir arquivos/pontos seguros de retomada, destino, espaço e proteção; testar interrupção, falta de espaço, restauração, preservação das configurações, exclusão e remoção na desinstalação. Proteger volumes e verificar sincronização externa; a decisão de backup local do app não comprova configuração do computador nem define backups comerciais/suporte.

- [ ] Implementar suporte autenticado com a mesma conta Google do AXIS, análise de mensagens e anexos voluntários, indicador de pagante repassado pelo backend e histórico ao técnico. Restringir pagamentos, renovação, recuperação de conta e ações com risco de segurança ao suporte humano; permitir pedido humano direto. Encaminhar liberação de computador ao técnico por envolver controle de acesso. Definir e validar rotinas de correção de falhas simples pela IA, com confirmação explícita antes da execução; IA responde dúvidas frequentes e encaminha casos mais complexos. Definir fornecedor/local, retenção e classificação de risco; validar autorização, titularidade e confirmação explícita para ações que venham a ser permitidas. A confirmação do usuário não autoriza a IA a executar ações excluídas de seu escopo; não presumir que o agente de suporte usa o Ollama local de clipes.

## Configuração e plataformas

- [x] Defaults e fallback do cliente Ollama identificados no relatório, com possibilidade de URL remota.
- [ ] Restringir e testar o Ollama exclusivamente no computador do usuário; conferir OLLAMA_URL, fallbacks, implantação e retenção local. Endereço remoto permitido no código relatado diverge da decisão confirmada.
- [x] OAuth YouTube/TikTok, scopes de código, seleção e desconexão descritos no relatório.
- [ ] Conferir alcance da aprovação YouTube informada e escopos realmente concedidos nos consoles; acompanhar aprovação TikTok, que o responsável aguarda. Declaração do responsável e flags locais não substituem essa conferência.
- [ ] Validar revogação remota Google, não encontrada no fluxo; verificar revogação TikTok pendente em falhas.
- [ ] Testar publicação, Inbox/Direct Post, atraso, resultado remoto incerto, reconexão e deduplicação sem atribuir os testes da Central ao produto inteiro.
- [ ] Identificar fornecedor/região efetivos de qualquer servidor comercial; São Paulo permanece intenção não comprovada.
- [ ] Definir preço, provedor/meios de pagamento e tratamento de contratação; regras de restituição preservam direitos legais e exigem revisão.

## Site institucional

- [x] Em 30/10/2026, preparada versão institucional com avisos próprios do site, separados das minutas do aplicativo e sem relatório interno nas páginas públicas. [Relatório da preparação](./PREPARACAO_PUBLICACAO_INSTITUCIONAL.md).
- [x] Build de produção e 9 testes Chrome aprovados: rotas/cabeçalhos locais, formulários sem envio real, idiomas/tema, armazenamento bloqueado, cookies/conexões observadas e layouts de 360/768/1440 px. Não substituem verificação do deploy.
- [x] Aviso antes do encaminhamento ao WhatsApp, prevenção de submissão acidental dos campos à URL do site, e-mail corrigido e retirada de perfis sociais genéricos não confirmados. Não foi enviado briefing real.
- [ ] Publicar revisão correta e repetir a validação de produção. Em 30/10/2026, HTTPS com www teve inicial HTTP 200 e `/axisclipes`, `/privacidade`, `/termos` HTTP 404. As quatro rotas passaram localmente.
- [ ] Inspecionar rede, cookies/SDKs, armazenamento e cabeçalhos no deploy efetivo; confirmar integrações e scripts configurados no painel. A inspeção dinâmica realizada foi local.
- [ ] Obter configuração, campos, acesso, região e retenção dos logs Vercel. O prazo de 1 dia do app não se aplica ao site. [Prompt de coleta de produção](./PROMPT_COLETA_VERCEL_E_PRODUCAO.md).
- [x] Responsável confirmou WhatsApp comercial `+55 13 99108-7633` e conferência dos dados no comprovante oficial do CNPJ em 30/10/2026. Número centralizado em `institutionalData.js`; não repetir as perguntas. Registro de marca e revisão jurídica permanecem separados.
- [ ] Definir retenção de solicitações do suporte futuro no site/app e de mensagens efetivamente recebidas por contato/e-mail/WhatsApp; responsável manteve o prazo a definir em 29/10/2026. Revisar textos públicos com essas configurações antes de considerá-los aprovados definitivamente.

## Próximas respostas do responsável

1. Regra TikTok já respondida e incorporada; não perguntar novamente. Falta integração e homologação técnica, não nova decisão comercial.
2. YouTube aprovado e TikTok aguardando aprovação, segundo o responsável. Falta conferir alcance/escopos nos consoles; não repetir a pergunta sobre o estado informado.
3. Preço, meios de pagamento, intermediador final e fornecedor de hospedagem continuam pendentes até nova definição do responsável. Já foi decidido que a verificação ficará com um intermediador; Stripe é apenas possibilidade. Não repetir essas perguntas antes de nova definição.
4. Versões do Windows e requisitos mínimos expressamente mantidos pendentes em 30/10/2026; aguardam validação técnica, sem nova pergunta até haver testes ou definição.
