## Nicolas Vinícius Santos de Melo

### 1. Requisitos Funcionais

- **US01**: Professores podem cadastrar novas questões com enunciado, alternativas, resposta correta e explicação.

- **US02**: Alunos podem ativar um cronômetro configurável (ex.: 15, 30 ou 60 minutos) antes do quiz.

- **US03**: Professores podem exportar a prova gerada com formatação e logotipo da instituição.

- **US04**: Somente usuários autenticados e com perfil “Docente” podem acessar o Gerador de Provas e Cadastro de Questões.

- **US05**: Alunos visualizam histórico de pontuações, taxa de acerto por tópico e tempo médio de resposta.

- **US06**: Alunos podem exportar questões que erraram em formato .apkg ou .csv para revisão espaçada.

- **US07**: Alunos podem reportar erros diretamente no quiz sem precisar enviar email para suporte.

- **US08**: Alunos visualizam ranking global/semanal/mensal de desempenho nos quizzes.

- **US09**: Alunos podem marcar questões para revisão futura.

- **US10**: Alunos filtram quizzes por nível de dificuldade (Junior, Pleno, Senior).

- **US11**: Alunos discutem e comentam sobre cada questão.

- **US12**: Professores podem acessar e exportar notas via API para sistemas como Moodle.

- **US13**:Alunos compartilham resultados de quizzes no LinkedIn.

- **US14**: Área de cadastro e visualização de questões suporta Markdown e destaque de sintaxe para códigos.

- **US15**: Alunos podem baixar um conjunto de questões e responder offline.

### 2. Requisitos Não Funcionais

- **US01**: O sistema deve permitir cadastro de questões de forma clara, intuitiva e sem erros, mesmo com muitos campos (enunciado longo, alternativas, explicação).

- **US02**: O cronômetro deve contar o tempo corretamente, sem atrasos ou travamentos, mesmo em quizzes longos.


- **US03**: PDFs devem ter formatação consistente, com cabeçalhos, logotipo e layout correto em diferentes dispositivos.


- **US04**: Somente usuários autenticados e com perfil docente podem acessar a área, garantindo proteção contra acesso indevido.

- **US05**: Gráficos e histórico devem carregar rapidamente, mesmo com grande volume de dados.

- **US06**: Arquivos .apkg ou .csv devem ser gerados corretamente, compatíveis com ferramentas externas, sem perda de dados.

- **US07**: Sistema deve garantir que o feedback seja registrado corretamente e notificado aos administradores sem falhas.

- **US08**:Rankings devem atualizar e exibir dados em tempo real ou quase real, mesmo com muitos usuários simultâneos.

- **US09**:Questões salvas devem permanecer corretamente na lista de favoritos, sem risco de perda ou inconsistência.

- **US10**: O filtro deve aplicar as seleções instantaneamente, mesmo com grandes volumes de questões.

- **US11**: Comentários devem carregar rapidamente, ser navegáveis e evitar sobrecarga do sistema com muitos usuários comentando simultaneamente.

- **US12**: API deve retornar resultados corretos, com autenticação segura, suporte a grandes volumes de requisições e integridade dos dados.

- **US13**: Compartilhamento deve funcionar em diferentes navegadores e dispositivos, mantendo a segurança de dados do usuário.

- **US14**: Suporte a Markdown e destaque de sintaxe deve tornar os códigos legíveis e visualmente claros, mesmo em trechos longos ou complexos.

- **US15**: App deve permitir download de questões, funcionar sem internet, armazenar respostas localmente e sincronizar quando online, garantindo experiência consistente.

### 3. Regras de Negócio

O que faz:

Gestão de questões

Professores criam, editam e organizam questões com enunciados, alternativas e respostas corretas.

É a base do conteúdo que será usado em quizzes.

Execução de quizzes para alunos

Alunos respondem questões, com possibilidade de filtros de dificuldade e cronômetro.

Permite praticar e avaliar o conhecimento de forma estruturada.

Feedback e revisão

Alunos recebem correção automática, histórico de desempenho e podem revisar erros.

Inclui funcionalidades de salvar questões favoritas, reportar erros e exportar para revisão.

Controle de acesso e segurança

Apenas usuários autorizados podem acessar áreas de professores ou APIs de resultados.

Garante proteção do conteúdo e integridade dos dados.

Gamificação e engajamento

Rankings (leaderboards), comentários em questões e compartilhamento de resultados.

Estimula aprendizado contínuo e interação social.

Exportação e integração com sistemas externos

Geração de PDFs, exportação de resultados ou questões para LMS, Anki ou CSV.

Facilita uso do conteúdo fora do app e integração com processos acadêmicos.

Disponibilidade e continuidade do estudo

Permite estudo offline, com download de questões e sincronização posterior.

Garante que o aluno possa praticar em qualquer lugar, sem depender de internet.

## 4. Detalhes (Acessórios)

**a**) Os dados do app serão guardados principalmente no servidor central (questões, respostas, rankings, comentários e reports), enquanto informações temporárias ou offline, como questões baixadas, favoritos e respostas pendentes, ficam armazenadas localmente no dispositivo, com sincronização posterior. Arquivos exportados (PDF, CSV, Anki) podem ser salvos localmente ou baixados pelo usuário.

A interface será clara e funcional, mostrando quizzes com cronômetro, filtros de dificuldade, painéis de estatísticas, botões de exportação, leaderboard, comentários e indicadores de modo offline. Códigos nas questões terão destaque de sintaxe (syntax highlighting) para melhor leitura.

**b**) Os dados dos acessórios serão guardados no servidor ou localmente dependendo do caso: favoritos, questões baixadas e respostas offline ficam no dispositivo, enquanto comentários, rankings e reports vão para o servidor. Arquivos exportados (PDF, CSV, Anki) podem ser salvos localmente ou baixados.

A interface desses acessórios será intuitiva e visual, com cronômetro, filtros de dificuldade, painéis de estatísticas, botões de exportação, leaderboard, comentários, indicadores de modo offline e destaque de código, mas todos esses elementos são secundários à lógica principal do app, que é criar, aplicar e corrigir quizzes.

## 5. Análise de Modelo de Entrega (Cloud)

**a**) “Mestre da Engenharia de Software 2.0” será entregue aos usuários finais como uma aplicação web baseada em nuvem, acessível por navegadores modernos sem necessidade de instalação.

Backend (servidor): hospedado em cloud, gerenciando banco de dados centralizado para questões, respostas, rankings, comentários e reports.

Frontend (interface): aplicação web responsiva, carregando quizzes, dashboards, filtros, cronômetro, comentários e exportações.

Funcionalidades offline/PWA: permitem que os alunos baixem conjuntos de questões e respondam mesmo sem internet, sincronizando depois com a nuvem.

Distribuição contínua: atualizações do sistema e do conteúdo de forma centralizada, garantindo que todos os usuários tenham sempre a versão mais recente.

Exportação e integração: PDFs, CSV, Anki e APIs para LMS são gerados pelo servidor ou disponibilizados para download, mantendo consistência e segurança.

**b**) Modelo escolhido:

SaaS (Software como Serviço) – o app será oferecido via navegador, sem necessidade de instalação ou manutenção de infraestrutura própria pela escola.

Justificativa para o Professor:

Facilidade de acesso: Professores podem entrar no sistema de qualquer dispositivo com internet, sem configurar servidores ou bancos de dados.

Atualizações automáticas: Novas funcionalidades, correções de bugs e melhorias de conteúdo ficam disponíveis imediatamente, sem ação do usuário.

Menor esforço de manutenção: Não é necessário gerenciar hardware, backups ou segurança; tudo é responsabilidade do provedor do serviço.

Escalabilidade: Pode suportar qualquer número de alunos ou turmas sem que o professor precise se preocupar com capacidade de infraestrutura.

Integração e exportação simplificada: PDFs, exportação para Anki e APIs para LMS funcionam diretamente, sem necessidade de configuração adicional.

## 6. O que o sistema NÃO faz

**a**) Limite do escopo (versão atual do Mestre da Engenharia de Software 2.0):

O sistema não fará correção automática de provas discursivas; apenas questões de múltipla escolha ou formatos compatíveis com gabarito automático serão corrigidas.

Não suportará criação de conteúdos complexos como simulações interativas (ex: laboratórios virtuais ou exercícios de programação em tempo real).

Não permitirá personalização total de layout de PDFs ou relatórios, além dos padrões oferecidos.

Não gerenciará autenticação de terceiros além do próprio sistema (ex.: login único via Google, LDAP ou SSO).

Não garantirá análise de desempenho avançada (ex: inteligência artificial para previsão de erros ou sugestão de estudo).

Não funcionará completamente offline em todas as funcionalidades; apenas quizzes baixados poderão ser respondidos sem internet, mas relatórios e rankings dependem da nuvem.