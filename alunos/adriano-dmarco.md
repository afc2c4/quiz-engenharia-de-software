# Levantamento de requesitos
## Adriano D' Marco

### 1. Requisitos funcionais

- **RF01**: O sistema usuário precisa que na interface haja opções de cadastramento de questões que fiquem salvos e possuam enunciado,
alternativas, resposta correta e explicação para que, com a boa organização, o usuário "Professor" consiga analisar os conteúdos passados por ele mesmo.

- **RF02**: O usuário quer, antes de iniciar um quiz, ter a opção de colocar uma contagem regressiva de tempo configurável e depois de configurar, ter a opção de iniciar o quiz, que deverá ter perguntas e respostas. 

- **RF03**: O conteúdo "prova" gerado pelo "gerador de provas" deve ser exportado para um pdf formatado com logotipo da instituição do usuário.

- **RF04**: O sistema deve ter uma restrição de acesso á área dos "Professores", exclusicamente para usuários autenticados e validados com perfil "docente".

- **RF05**: O sistema deve haver um painel de visualização de estatistica ao final de cada semana que mostre histórico de pontuação, mostrando a taxa de acerto por cada tópico e que mostre o tempo médio de resposta por questão. Independente do volume do histórico do aluno, o painel deve carregar instantâneamente.

- **RF06**: O sistema deve ter uma interface que tenha a opção do usuário poder baixar questões que errou no quiz em formato ".apkg" ou ".csv" quando quiser.

- **RF07**: Deve haver uma opção no sistema "QuizCard" que sirva para reportar erros, caso o usuário encontrar algum na questão, que irá notificar de imediato os admins/professores sobre os erros reportados. Para que não aja a necessidade de procurar email de suporte.

- **RF08**: O sistema deve mostrar um sistema de rank, semanal e mensal, de pontos de todos os usuários para que todos consigam ver.

- **RF09**: Deve-se ter um uma opção no sistema onde e
o usuário possa salvar a questão de preferência do usuário e um local onde ela ficará armazenada as questões escolhidas e somente ele poderá ver.

- **RF10**: Antes de começar um quiz, na interface deve surgir uma opção de seleção de dificuldade, assim as questões estarão mais adaptadas para o usuário que escolher certa dificuldade.

- **RF11**: O sistema tem que fazer aparecer em cada questão uma thread de comentários onde todos possam comentar sobre a questão livremente.

- **RF12**: No sistema, é ideial que haja uma opção onde o usuário "Professor" possa fazer uma exportação automática das notas dos usuários "Aluno" para um outro local.

- **RF13**: Adicionar no sistema, quando o usuário "Aluno" consegue um desempenho acima de 80% nos resultados para poder compartilhar o perfil para que outros usuários possam ver em um feed. 

- **RF14**: Para resolver o problema do usuário "Professor" colocar uma questão que contém um snippet de código, Markdown e Syntax Highlighting devem entrar em ação.

- **RF15**: No sistema de interface dos usuários "Aluno", deve aparecer uma opção de fazer dowload das questões selecinadas e serem armazenadas para serem acessadas quando os usuários quiserem.

### 2. Requesitos não funcionais

- **RNF01**: O sistema deve carregar instanâneamente todos os enunciados, todas as alternativas, respostas e explicações dos questionários, além de ter que carregar a página rapidamente.

- **RNF02**: O Cronômetro deve ser cronometrado com o mínimo de deley possível e não pode travar ou falhar durante o momento que o usuário está respondendo e deve encerrar ao final do questionário feito e começar ao entrar em um questionário.

- **RNF03**: Quando o usuário "Professor" for fazer a exportação da prova, que deve ocorrer sem deley e com rapidez, a prova tem que instantâneamente estar em arquivo PDF, formatado e com logotipo da instituição do usuário.

- **RNF04**:

- **RNF05**:

