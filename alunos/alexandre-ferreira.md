# Arquivo de Exemplo
## Alexandre Ferreira

Com base estritamente nas Histórias de Usuário listadas acima, elabore um documento contendo:
Lista de Requisitos Funcionais (RF): 
Identifique e descreva claramente as funcionalidades e ações que o sistema deverá ser capaz de executar. (Enumere-os como RF01, RF02, etc.).

Com base nas Histórias de Usuário (US) fornecidas, os requisitos funcionais (RF) identificados para a versão 2.0 do aplicativo são:
RF01: Cadastro de Questões: O sistema deve permitir que professores cadastrem novas questões contendo enunciado, alternativas, resposta correta e explicação.
RF02: Suporte a Markdown e Syntax Highlighting: A interface de cadastro e leitura de questões deve suportar Markdown e destaque de sintaxe para snippets de código.
RF03: Cronômetro para Quizzes: O sistema deve oferecer ao aluno a opção de ativar um cronômetro regressivo configurável (ex: 15, 30 ou 60 minutos) antes de iniciar um quiz.
RF04: Exportação de Provas em PDF: O sistema deve permitir a exportação de provas geradas para o formato PDF, com formatação específica e inclusão de logotipo/cabeçalho institucional.
RF05: Autenticação e Controle de Acesso: O sistema deve restringir o acesso às funcionalidades de "Professor" (Gerador de Provas e Cadastro de Questões) apenas a usuários autenticados com o perfil "Docente".
RF06: Painel de Estatísticas do Aluno: O sistema deve disponibilizar um painel semanal para o aluno com histórico de pontuações, taxa de acerto por tópico e tempo médio de resposta.
RF07: Exportação de Erros para Revisão Espaçada: O sistema deve permitir que o usuário baixe as questões que errou no quiz nos formatos .apkg (Anki) ou .csv.
RF08: Reportar Erro em Questão: O sistema deve disponibilizar um botão diretamente no "QuizCard" para que o usuário reporte erros no gabarito ou explicações aos administradores/professores.
RF09: Ranking Global (Leaderboard): O sistema deve implementar um ranking global, com filtros semanal e mensal, para competição entre os usuários.
RF10: Favoritar Questões: O sistema deve permitir que o aluno salve ou "favorite" questões específicas em uma lista para revisão posterior.
RF11: Filtro por Nível de Dificuldade: O sistema deve permitir a filtragem de questões por nível de dificuldade (ex: Junior, Pleno, Senior ou Fácil).
RF12: Seção de Comentários: O sistema deve disponibilizar uma thread de comentários abaixo de cada questão para discussão entre os usuários.
RF13: API de Integração com LMS: O sistema deve fornecer um endpoint ou webhook para exportação automática de notas para sistemas de gestão de aprendizagem (LMS), como o Moodle.
RF14: Compartilhamento em Redes Sociais: O sistema deve oferecer um botão para compartilhar o resultado do quiz no LinkedIn, especificamente quando o desempenho for superior a 80%.
RF15: Modo Offline (PWA): O sistema deve permitir que o aluno baixe um conjunto de questões (ex: 50 questões) para serem respondidas sem conexão com a internet.

Lista de Requisitos Não Funcionais (RNF): 
Identifique e classifique as restrições, atributos de qualidade, segurança, usabilidade ou desempenho que o sistema deverá respeitar. (Enumere-os como RNF01, RNF02, etc.).
	Com base nas Histórias de Usuário (US) do documento, os requisitos não funcionais (RNF) identificados são:
RNF01: Desempenho no Carregamento de Gráficos: Os gráficos do painel de estatísticas devem carregar instantaneamente, independentemente do volume do histórico de dados do aluno.
RNF02: Segurança e Controle de Acesso: O sistema deve garantir que o acesso às funcionalidades de professor seja restrito exclusivamente a usuários autenticados com o perfil "Docente", visando a integridade do banco de dados e o sigilo dos gabaritos.
RNF03: Portabilidade e Disponibilidade Offline: O sistema deve ser transformado em um PWA (Progressive Web App) para permitir o funcionamento em modo offline, possibilitando que o usuário responda questões sem conexão com a internet.
RNF04: Formatação de Documentos (PDF): A exportação de provas para PDF deve seguir uma formatação específica, incluindo elementos de identidade visual como o logotipo e cabeçalho da instituição.
RNF05: Usabilidade (Acessibilidade de Feedback): O botão de reportar erro deve estar localizado diretamente no "QuizCard" para facilitar o acesso do usuário no momento da identificação do problema, sem a necessidade de buscar canais externos de suporte.
RNF06: Interoperabilidade: O sistema deve prover mecanismos de integração (API REST ou webhooks) para permitir a exportação automática de notas para sistemas externos de gestão de aprendizagem (LMS), como o Moodle.
RNF07: Suporte a Padrões de Texto: A interface de cadastro e leitura de questões deve ser compatível com Markdown e Syntax Highlighting para a correta exibição de trechos de código e formatação de texto.

Regras de Negócio: 
Quais funcionalidades são o "coração" do app (o que ele faz, independente de tecnologia)?
Com base na análise exclusiva do código fonte fornecido (arquivos .tsx e .ts), é possível deduzir que o "coração" do aplicativo (suas regras de negócio e funcionalidades principais, independentemente da tecnologia utilizada) divide-se em dois grandes pilares de atuação: um voltado para o estudo interativo e outro para a criação de avaliações. Aqui estão as funcionalidades centrais deduzidas diretamente da lógica do código:
a. Motor de Resolução de Quizzes (Foco no Aluno)
Esta é a lógica que rege como os questionários são aplicados e avaliados:
Embaralhamento Dinâmico (Anti-Decoreba): Sempre que um quiz é iniciado, o sistema randomiza a ordem das perguntas de um determinado tópico. Além disso, ele também embaralha a ordem das opções de resposta dentro de cada pergunta, recalculando dinamicamente qual é o índice correto para aquela tentativa específica.
Correção e Feedback em Tempo Real: Ao selecionar uma resposta, o aplicativo avalia imediatamente se a opção escolhida condiz com a resposta correta esperada para a questão. Após a resposta do usuário, o sistema exibe automaticamente a alternativa correta e revela a explicação (justificativa) teórica vinculada à pergunta.
Cálculo e Classificação de Desempenho: Ao finalizar as questões de um tópico, o sistema calcula uma pontuação baseada na quantidade de acertos. A partir da porcentagem atingida, o sistema enquadra o conhecimento do usuário em níveis de avaliação predefinidos, que variam de advertências para revisar a base (abaixo de 50%) até o nível de "Arquiteto Sênior" (100% de acerto).
b. Gerador de Provas (Foco no Professor/Avaliador)
Esta lógica compõe a ferramenta de auxílio para criação de testes físicos ou externos:
Seleção e Filtragem de Questões: É possível navegar pelo banco de questões, filtrar pelo tópico desejado e selecionar individualmente ou em bloco quais questões devem compor a avaliação.
Regra de Quantidade Restrita: Existe uma regra de negócio específica no gerador: a prova só pode ser elaborada e exportada se houver a seleção de exatas 10 questões.
Processamento e Formatação Automática: Uma vez cumprida a exigência de 10 questões, o aplicativo embaralha a ordem destas perguntas selecionadas, embaralha também as alternativas dentro de cada uma e constrói um texto formatado, numerando de 1 a 10 e adicionando as letras de "A" a "E".
Geração Inteligente de Gabarito: No final do documento de prova construído, o sistema anexa automaticamente o gabarito correto. Como as questões e as alternativas sofrem um novo embaralhamento neste momento, o gabarito gerado reflete a letra correta correspondente a esse novo arranjo aleatório.
Exportação por Texto: O sistema consolida todo o documento e o gabarito em um bloco textual que o usuário pode facilmente copiar para a área de transferência do seu dispositivo, visando uso em editores de texto.
c. Estrutura Abstrata de Domínio (A Entidade Central)
A base vital do funcionamento do aplicativo é a definição abstrata do que constitui um problema educacional. Independentemente do banco de dados utilizado, o aplicativo exige que os itens de conhecimento contenham obrigatoriamente um id, um tópico, uma pergunta textual, um conjunto de alternativas possíveis, a demarcação explícita de qual dessas opções está correta e um texto de explicação que fundamente essa correção.


Detalhes (Acessórios): 
Onde os dados serão guardados ou como será a interface? 
Lembre-se que, para a engenharia, isso é secundário à lógica do problema.
Com base na análise exclusiva do código-fonte fornecido, eis os detalhes técnicos (acessórios) sobre a implementação atual:
a. Onde os dados estão guardados (Armazenamento)?
Não existe um banco de dados real ou persistência de dados (como LocalStorage ou uma API de retaguarda/backend) no código atual.
Banco de Questões: Os dados das perguntas, opções, respostas corretas e explicações estão estáticos (hardcoded) num ficheiro TypeScript, mais especificamente na constante QUIZ_DATABASE.
Estado do Utilizador: Todo o progresso do aluno (pontuação, respostas selecionadas, índice da questão atual) e as seleções do professor (questões escolhidas para a prova) são mantidos temporariamente na memória da aplicação, utilizando o hook useState do React. Se a página for recarregada, todos estes dados são perdidos.
b. Como é a interface?
A interface é uma aplicação Web moderna construída como uma Single Page Application (SPA) e as suas características principais são:
Tecnologias Base: A interface é construída com componentes React.
Estilização Visual: Todo o estilo, responsividade e animações são geridos através de Tailwind CSS (usando classes utilitárias diretamente nos elementos). O projeto também utiliza FontAwesome para a renderização de ícones gráficos.
Acessibilidade e Usabilidade: A interface suporta alternância dinâmica entre Modo Claro e Modo Escuro (Dark Mode).
Navegação: A interface possui um cabeçalho fixo (Header) que permite alternar a visualização central do ecrã entre duas áreas distintas: a secção de "Quiz" (onde o aluno responde às perguntas) e a secção "Professor" (onde o docente pode usar o ExamBuilder para gerar uma prova).


Análise de Modelo de Entrega (Cloud)
Decida como o "Mestre da Engenharia de Software 2.0" será entregue aos usuários finais: 
Escolha um modelo: 
O app será oferecido como SaaS (acesso via navegador sem instalação), ou a escola deve contratar um IaaS para hospedar sua própria infraestrutura? 
Justifique com base na conveniência para o Professor. 
Com base na arquitetura e na estrutura do código-fonte fornecido, a decisão lógica para o "Mestre da Engenharia de Software 2.0" é:
Modelo Escolhido: SaaS (Software as a Service)
Justificativa baseada no código (Foco na Conveniência para o Professor):
Arquitetura Front-end Pronta para Web: O repositório mostra que o aplicativo é uma Single Page Application (SPA) puramente web, construída com React e Vite. Ele foi projetado para ser injetado e rodar diretamente no navegador do usuário (via index.html).
Eliminação de Atrito Técnico (IaaS inviável para leigos): Se o modelo escolhido fosse IaaS (Infraestrutura como Serviço), a escola ou o professor teriam a responsabilidade técnica de alugar servidores, configurar o sistema operacional, preparar o ambiente Node.js e executar os comandos de compilação como npm run build. Isso é totalmente inviável e inconveniente para um perfil de usuário focado na docência (Professor).
Conveniência de Uso Imediato: No modelo SaaS, o professor simplesmente acessará uma URL e começará a usar o sistema instantaneamente para gerar suas provas ou cadastrar questões, sem precisar instalar nada. Curiosamente, a própria base de dados do aplicativo baseia essa decisão: na questão cloud-4 do arquivo constants.ts, o sistema ensina que o modelo SaaS "Fornece a aplicação completamente pronta para uso pela internet eliminando quaisquer preocupações com instalação e com infraestrutura". Além disso, a explicação da questão cloud-9 reforça que no SaaS "o cliente é um usuário, não um administrador de sistemas".


O que o sistema NÃO faz: 
Defina um limite para o escopo desta versão (Ex: O sistema não fará correção automática de provas discursivas).
Com base na análise do código atual (que lida estritamente com lógica de múltipla escolha via arrays e índices) e nas 15 Histórias de Usuário levantadas para a Versão 2.0, podemos definir claramente os limites do escopo.
Aqui está o que o sistema NÃO fará nesta versão:
1. Não suportará questões discursivas (abertas) ou preenchimento de lacunas:
Tanto o código atual quanto a US01 limitam a estrutura da questão a "enunciado, alternativas, resposta correta e explicação". O sistema não fará avaliação de texto livre, processamento de linguagem natural ou correção automática de redações. O foco é 100% em questões de múltipla escolha.
2. Não fará a correção automática de provas aplicadas fisicamente (impressas):
Embora a US03 permita que o professor exporte a prova para PDF, o sistema não possui nenhum recurso de OCR (leitura ótica) para escanear gabaritos de papel e lançar as notas de volta na plataforma. A correção automática ocorre apenas nos quizzes respondidos digitalmente na própria interface.
3. Não importará turmas ou dados do LMS (Apenas Exportação):
A US12 solicita uma API REST/Webhook para exportar os resultados dos alunos para o Moodle. No entanto, o sistema não fará a via de mão dupla completa: não haverá sincronização para importar listas de alunos, turmas ou cronogramas diretamente do LMS da universidade.
4. Não terá chat em tempo real ou mensagens diretas (DM) entre usuários:
A US11 introduz uma seção de comentários (estilo fórum/thread) atrelada a cada questão. Contudo, isso não transforma o app numa rede social. Não haverá inbox, mensagens privadas entre aluno e professor, ou salas de chat ao vivo.
5. Não suportará upload de mídias pesadas (Vídeos ou Áudios) nos enunciados:
A US14 pede suporte a Markdown e Syntax Highlighting (para trechos de código como JSON e Dockerfile). O sistema não fará hospedagem ou streaming de aulas em vídeo, nem permitirá anexar arquivos de áudio nas perguntas. É uma plataforma essencialmente baseada em texto e código.
6. Não fará gestão financeira ou monetização:
Não há nenhuma história de usuário ou funcionalidade base focada em planos de assinatura, paywalls ou gateways de pagamento. A gestão de cobrança de alunos ou venda de pacotes de questões está totalmente fora do escopo desta versão.
