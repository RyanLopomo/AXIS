# Prompt para coletar informações do aplicativo AXIS CLIPES

Copie o texto abaixo para uma conversa do Codex aberta no repositório **do aplicativo AXIS CLIPES**, incluindo backend e empacotamento. O repositório do site institucional, sozinho, não permite concluir esta auditoria.

---

Analise este repositório do AXIS CLIPES e produza um relatório técnico em português para outro assistente atualizar a apresentação, os Termos de Uso, a Política de Privacidade e o checklist de segurança da Engineraxis.

Execute a coleta; não entregue apenas um plano. Não implemente correções. Informe o que o código realmente faz, o que é somente intenção/documentação e o que não foi possível verificar. Não declare conformidade jurídica ou segurança integral.

## Escopo e limites

- Leia as instruções aplicáveis do repositório. Identifique pasta, commit, alterações locais, versões e componentes examinados. Se encontrar somente o site institucional, informe essa limitação e procure o aplicativo apenas nas pastas autorizadas; não invente seu funcionamento.
- Não modifique arquivos, dependências, configurações ou contas. Não instale pacotes nem execute migrações. Não apague projetos, revogue tokens, publique vídeos, envie telemetria, faça cobranças ou envie e-mails.
- Não abra dados de usuários, vídeos pessoais, bancos reais, backups, arquivos de tokens, chaves privadas ou valores de `.env`. Use código, manifests e exemplos com placeholders. Liste nomes de variáveis e defaults públicos do código, sem revelar credenciais, tokens, IDs privados, URLs assinadas ou dados pessoais.
- Não inicie o aplicativo contra serviços reais: inicializadores e workers podem executar tarefas. Testes somente se já existentes, com fixtures fictícias, instância descartável e sem efeitos externos. Se não houver ambiente seguro, faça análise estática e registre a limitação.
- Para cada conclusão relevante, cite caminho e linha, símbolo/função ou configuração. Não confunda default no código com configuração efetivamente usada no instalador ou em produção.

## 1. Arquitetura, instalação e utilização

Identifique frontend, API, workers/filas, banco, filesystem, modelos e integrações. Mostre quais componentes executam no computador e quais em servidores externos. Descreva instalação Windows, versões suportadas, requisitos documentados, inicialização, uso normal e desinstalação. Separe requisito declarado de compatibilidade testada.

Inventarie telas e funções habilitadas: login, projetos, importação por arquivo/URL, download, extração de áudio, transcrição, seleção de trechos, cortes, legendas, marca d’água, miniaturas, prévia, exportação, publicação, agendamento, notificações, histórico, planos, configurações e suporte. Para cada recurso, informe disponibilidade real, dependências, limitações e código responsável. Recursos parciais ou simulados devem ser identificados.

## 2. Configurações e fluxos de dados

Mapeie configurações por nome, finalidade, tipo, default público, local de leitura e efeito. Destaque armazenamento, limpeza, logs, telemetria, contas, assinatura, publicação, fuso horário, endpoints e atualização. Não exponha valores de segredos.

Verifique FFmpeg, Faster-Whisper, Ollama e outros modelos: qual realiza cada etapa, quais dados recebe, instalação/download de modelos, logs, endpoint padrão e possibilidade de execução remota. Verifique também os destinos de URLs, avatares, fontes e serviços externos. Endereços e regiões de produção só podem ser confirmados com evidência apropriada, sem revelar segredos.

Para cada categoria de dados, indique origem, finalidade implementada, destino, persistência, acesso, retenção e exclusão: e-mail/perfil Google, sessão, cadastro, assinatura, faturamento, vídeos originais, áudio, clipes, legendas, transcrições, prompts/resultados de IA, temporários, agendamentos, histórico, tokens, estatísticas, logs e backups. Distinga dados locais de dados enviados à Engineraxis ou às plataformas.

## 3. Autenticação e plataformas

Distinga login Google de autorização YouTube/TikTok. Liste os campos de perfil solicitados/recebidos, escopos OAuth definidos, armazenamento e renovação de tokens, OAuth state/PKCE quando houver, permissões de API e operações habilitadas.

Verifique limites de contas, troca, desconexão, remoção local de credenciais e revogação remota, inclusive falhas. Identifique armazenamento legado sem cifragem e gestão da chave, sem ler os segredos.

Não conclua que Google/TikTok aprovaram o aplicativo somente porque há código ou credenciais. Informe separadamente o que exige comprovação nos consoles das plataformas.

## 4. Publicação, agendamento e falhas

Explique o que precisa permanecer ligado/aberto/conectado, onde o agendamento executa e como trata fuso, atraso, computador desligado, falha de rede, token expirado, limites da plataforma, cancelamento, duplicidade, tentativas e confirmação de sucesso. Diferencie envio aceito pela API de vídeo efetivamente publicado.

Verifique notificação de falha e republicação, relação com a limpeza e preservação dos arquivos necessários. Informe quais links/dados entram no histórico e onde ficam.

## 5. Conferência das regras já informadas ao assistente do site

As regras abaixo são **declarações/expectativas do responsável, não fatos técnicos verificados**. Compare cada uma com o código, apontando correspondência, divergência e lacunas. Não altere o aplicativo para forçar correspondência.

- Produto em desenvolvimento, acesso apenas do responsável, sem download público; Windows previsto. Futuro instalador somente pelo site oficial, atualizações automáticas e uso pessoal/comercial.
- Gratuito: corte, upload/agendamento, marca d’água, 20 publicações diárias somadas entre YouTube e TikTok, uma conta por plataforma. Cota reinicia à meia-noite de Brasília; trocar conta não reinicia a contagem.
- Pago: mensal, sem marca d’água, sem cota de publicações imposta pelo plano, até 6 contas no total. Ambos permitem troca diária, com reinício à meia-noite de Brasília. Restrições das próprias plataformas continuam aplicáveis.
- Renovação escolhida pelo usuário. Cancelar o plano pelo site mantém benefícios até o fim do período pago. Fatura em atraso tem 30 dias corridos de regularização com benefícios mantidos; ao fim, sem pagamento, plano e fatura correspondente são cancelados, encerrando novas cobranças e retornando ao gratuito.
- Desinstalar não cancela assinatura/cobranças; deve remover dados locais do aplicativo. Excluir cadastro pelo app exige digitar exatamente `Excluo minha conta`, encerra imediatamente o cadastro ativo e novas cobranças, mas não apaga projetos/histórico locais. Isso não exclui a conta Google. Não há reembolso comercial automático pela exclusão, preservados direitos legais; não avalie validade jurídica como conclusão técnica.
- E-mail e situação da assinatura em servidores previstos em São Paulo, Brasil. A AXIS declara não ter acesso aos vídeos. Provedor, demais dados Google e controles efetivos precisam de comprovação.
- Limpeza dos arquivos locais do projeto após todas as publicações, incluindo vídeo baixado e transcrições. Vídeos publicados permanecem nas redes. Histórico com links apenas local, até exclusão pelo usuário. Excluir projeto exige aviso e confirmação. Arquivos com falha permanecem até republicação ou exclusão confirmada; há notificação e possibilidade de nova tentativa.
- Estatísticas opcionais: apenas médias mensais de RAM, CPU e GPU, sem identificação no conteúdo. Escolha inicial e alteração nas configurações. Envio no dia 1º sobre o mês anterior, ou na próxima abertura possível. Desativar apaga relatório pendente. Não incluir falhas, contagens de projetos/clipes, tempos de criação, vídeos, transcrições ou credenciais no envio.
- Retenção prevista: logs técnicos do aplicativo por 1 dia, com exclusão automática; médias já recebidas pela AXIS por 2 dias para análise de anomalias/consumo excessivo, seguidas de exclusão. Esses prazos não definem logs da hospedagem do site nem backups.
- Aceite inicial dos Termos e apresentação da Política antes do acesso; estatísticas têm escolha separada. Mudanças importantes avisadas por e-mail Google e pelo app; alterações importantes dos Termos exigem novo aceite. Contas conectadas podem ser desconectadas pelo app.
- Sem idade mínima declarada; salvaguardas para menores ainda pendentes. Verifique controles existentes, sem presumir adequação. Suporte por e-mail sem prazo comercial definido.

## 6. Retenção, exclusão e estatísticas: comprovação

Para cada regra de limpeza, encontre gatilho, prazo, condições, objetos atingidos, exceções, política de tentativas, efeitos no banco e filesystem e tratamento de referências compartilhadas. Confirme se originais/legendas são preservados apesar da declaração de limpeza integral. Distinga TTL de job, progresso temporário e validade de token de exclusão de arquivos e histórico.

Verifique desinstalador: quais pastas/dados remove, o que pode permanecer e se afeta arquivos externos ou contas remotas. Não execute a desinstalação.

Para estatísticas, identifique o payload real, médias versus amostras/picos, momento da escolha, ausência de envio antes/depois de recusa, registro da preferência, fila mensal, atrasos e descarte ao desativar. Verifique destinatário, armazenamento, retenção e metadados/logs do receptor se houver código disponível. Ausência de nome/e-mail no payload não comprova anonimização completa.

## 7. Segurança, dependências e licenças

Inspecione autenticação/autorização, exposição de API local/portas, CORS, uploads, downloads por URL, SSRF, validação de caminhos e exclusões, execução de FFmpeg/comandos, acesso a arquivos, segredos distribuídos, proteção de tokens/chaves, banco, logs e pacotes de atualização. Considere isolamento entre usuários/contas e proteção de dados de cobrança.

Liste dependências e licenças relevantes, inclusive ferramentas nativas e modelos. Diferencie achado reproduzível de hipótese. Sem instalar/atualizar pacotes, use auditoria já disponível apenas se ela for somente leitura e não enviar código ou dados privados; informe data, comando, erros e limites. Não execute exploração contra sistemas reais.

## Formato obrigatório da resposta

Entregue o relatório completo na resposta final, em Markdown, para eu copiar e enviar ao outro assistente. Não crie arquivos nem aplique mudanças.

1. **Resumo e escopo:** repositório/commit/versão, componentes disponíveis e o que ficou fora.
2. **Arquitetura e utilização:** instalação, fluxo do usuário, componentes locais/remotos e requisitos.
3. **Matriz de funcionalidades:** recurso, implementação, configuração/default, limitações e evidência.
4. **Mapa de dados:** categoria, origem, finalidade, destino/local, acesso, retenção, exclusão e evidência.
5. **Configurações:** nomes, finalidade e defaults públicos, sem segredos.
6. **Conferência das regras declaradas:** uma linha por regra, status, divergência e evidência.
7. **Segurança e licenças:** achados priorizados, alcance demonstrado e limitações.
8. **Verificações executadas:** comandos/testes e resultados; liste o que não foi executado e por quê.
9. **Informações para atualizar o site:** o que já pode ser afirmado, o que precisa ser descrito como intenção e o que continua pendente.
10. **Perguntas restantes ao responsável:** somente o que não pode ser respondido pelo repositório, como acesso a consoles, configuração efetiva, hospedagem ou decisão comercial.

Use estes status sem misturá-los: **identificado no código**, **default do código**, **configuração efetiva verificada**, **testado em ambiente isolado**, **somente declarado/documentado**, **divergente** e **não verificável neste escopo**. Um item pode ter mais de um status, mas explique o alcance de cada um.

Seja específico, cite evidências e não invente lacunas. Não remova pendências jurídicas com base apenas em inspeção técnica.
