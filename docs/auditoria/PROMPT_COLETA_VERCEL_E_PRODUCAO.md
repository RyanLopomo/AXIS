# Prompt — coletar somente o que falta para publicar o institucional

Use no Codex com acesso autorizado ao projeto Vercel da Engineraxis. A tarefa é **somente leitura e relatório**. Não publicar, alterar configurações, criar serviços, enviar mensagens ou coletar dados de visitantes.

## Contexto

Site: `https://www.engineraxis.com.br`. A versão local é Next.js, na pasta `AXIS` do workspace. `/privacidade` e `/termos` agora descrevem somente o site institucional. `/axisclipes` é apresentação de produto em desenvolvimento: sem download, compra, cadastro, suporte por IA ou conexão social funcionando nessa página.

Em 30/10/2026, checagem HTTPS pública encontrou `/` com HTTP 200 e `/axisclipes`, `/privacidade`, `/termos` com HTTP 404. O código local já possui essas rotas; verificar qual revisão está realmente implantada antes de atribuir a causa ao código.

## Restrições

- Não ler ou imprimir valores de variáveis de ambiente, tokens, chaves, cookies de sessão, dados de faturamento ou mensagens reais.
- Não solicitar nem usar credenciais de visitantes. Não acessar WhatsApp ou e-mail do responsável.
- Para variáveis de ambiente, relatar somente nomes relevantes e presença/ausência; a URL pública do site pode ser relatada se for realmente pública.
- Não exportar logs brutos. Descrever esquema/campos a partir de configuração ou exemplos sintéticos/redigidos, sem IPs reais ou identificadores de pessoas.
- Não contornar login, captcha ou controle de acesso. Se faltar acesso, marcar o item como não verificado e indicar a tela onde o responsável pode consultar.

## Coleta

1. **Deploy:** confirmar framework, diretório raiz, comando de build, revisão/branch implantada, domínio de produção e redirecionamento com/sem www. Informar se a revisão contém `app/axisclipes`, `app/privacidade`, `app/termos`. Não expor IDs privados da equipe/projeto.
2. **Rotas:** em produção, conferir as quatro páginas, título, HTTPS e códigos HTTP. Verificar se os avisos novos correspondem à revisão implantada. Não considerar o build local como teste de produção.
3. **Logs:** distinguir access/request logs, runtime, firewall/security, analytics e audit/activity logs. Para cada tipo ativo, informar campos registrados, finalidade, retenção real configurada, exclusão automática, exportações/log drains, backups, região e quem possui acesso. Se uma resposta vier de documentação do fornecedor e não da configuração, rotular essa diferença. Não confundir janela visível no painel com prazo efetivo de exclusão.
4. **Recursos opcionais:** conferir Analytics, Speed Insights, integrações, injeções de scripts e toolbar no domínio de produção. Informar ativos/inativos/não verificados. Não ativar nada.
5. **Navegador limpo:** listar domínios chamados automaticamente pelas quatro páginas, cookies por nome/finalidade/expiração (sem valores) e chaves de armazenamento local. Não enviar formulário de verdade. No código local, esperam-se Google Fonts e preferências `axis-language`/`axis-theme`; comportamento em produção precisa ser medido.
6. **Cabeçalhos:** verificar HTTPS, redirecionamentos, X-Content-Type-Options, Referrer-Policy, X-Frame-Options/CSP, Permissions-Policy e overrides da Vercel. Não afirmar segurança completa com base em cabeçalhos.
7. **Links:** conferir se o e-mail exibido é `engineeraxisltda@gmail.com` e se o WhatsApp aponta ao número esperado pelo responsável. Não enviar mensagem. Links de redes sociais só devem ser apresentados após confirmação de titularidade.

## Resposta para encaminhar a este chat

Para cada item, preencher: **resultado observado | fonte/tela/caminho | data | comprovado ou pendente | ação necessária**. Separar código local, documentação do fornecedor e configuração efetiva de produção.

Ao final, fornecer lista curta dos dados ainda necessários para fechar a privacidade do site: retenção e acesso aos registros, regiões/fornecedores e recursos opcionais ativos. Não alterar regras do produto AXIS CLIPES nem tratar este relatório como aprovação jurídica.
