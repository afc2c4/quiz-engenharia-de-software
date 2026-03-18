# Levantamento de requesitos
## Adriano D' Marco

### 1. Requisitos Funcionais

- **RF01**: O sistema do usuário precisa que na interface haja opções de cadastramento de questões que sejam salvos e possuam enunciado,
alternativas, resposta correta e explicação para que, com a boa organização, o usuário "Professor" consiga analisar os conteúdos passados por ele mesmo.

- **RF02**: O sistema deve ter a opção de começar o quiz, mas antes com a opção perguntando se o usuário gostaria de usar e poder configurar o tempo do conômetro, e depois de configurar, ter a opção de iniciar o quiz, que deverá gerar perguntas e respostas rapidamente. 

- **RF03**: O sistema precisa dar a opção na interface do usuário "Professor" para que o conteúdo "prova", do usuário, gerado pelo "Gerador de provas" deva ser exportado diretamente para um PDF, já formatado e com logotipo da instituição do usuário.

- **RF04**: O sistema deve ter uma restrição de acesso á área dos "Professores", exclusicamente para usuários autenticados e validados com perfil "docente".

- **RF05**: O sistema deve fazer aparecer um painel de visualização de estatísticas ao final de cada semana que mostre o histórico de pontuação, que mostre a taxa de acerto por cada tópico e que mostre o tempo médio de resposta por questão.

- **RF06**: O sistema deve fazer aparecer na interface uma opção para o usuário poder baixar questões que errou no quiz em formato ".apkg" ou ".csv" quando quiser.

- **RF07**: O sistema deve ter uma opção no "QuizCard" que sirva para reportar erros, caso o usuário encontrar algum na questão, que irá notificar de imediato os admins/professores sobre os erros reportados.

- **RF08**: O sistema deve ter e mostrar uma tabela de rank, semanal e mensal, de pontos global e que todos da comunidade possam ver a tabela.

- **RF09**: Deve-se ter uma opção no sistema onde o usuário possa salvar a questão de preferência e um local onde ela ficará armazenada as questões escolhidas como favoritas e somente o usuário poderá ver.

- **RF10**: Antes de começar um quiz e de aparecer a opção de conômetro, na interface do sistema deve surgir uma opção de seleção de dificuldade, assim as questões estarão mais adaptadas para o usuário que escolher certa dificuldade.

- **RF11**: O sistema tem que fazer aparecer em cada questão uma thread de comentários onde todos possam comentar sobre a questão livremente.

- **RF12**: No sistema, é ideial que haja uma opção onde o usuário "Professor" possa usar e com isso fazer uma exportação automática das notas dos usuários "Aluno" para um outro local.

- **RF13**: O sistema, quando o usuário "Aluno" conseguir um desempenho acima de 80% nos resultados, deve mostra uma opção de poder compartilhar o perfil para que outros usuários possam ver em um feed. 

- **RF14**: O sistema deve usar as ferramentas Markdown e Syntax Highlighting na área de cadastro e leitura para que os usuários "Professor" quando cadastrarem uma nova questão que contém um snippet de código não passem por problemas.  

- **RF15**: No sistema de interface dos usuários "Aluno", deve aparecer uma opção de fazer dowload das questões selecinadas e serem armazenadas para serem acessadas quando os usuários quiserem.

### 2. Requesitos Não Funcionais

- **RNF01**: O sistema deve carregar instanâneamente todos os enunciados, todas as alternativas, respostas e explicações dos questionários, além de ter que carregar a página rapidamente.

- **RNF02**: O Cronômetro do sistema deve ser cronometrado com o mínimo de deley (se possível) e não pode travar ou falhar durante o momento que o usuário está respondendo e deve encerrar ao final do questionário feito e começar ao entrar em um questionário.

- **RNF03**: No sistema, quando o usuário "Professor" for fazer a exportação da prova usando a opção, que deve ocorrer sem deley e com rapidez, a prova tem que instantâneamente estar em arquivo PDF, formatado e com logotipo da instituição do usuário.

- **RNF04**: O sistema deverá rapidamente fazer a verificação de usuário ao verificar os dados e se bater ou não os dados, dar ou não permissão ao usuário. 

- **RNF05**: No sistema, o painel deve surgir de forma instantânea quando o usuário usar a opção para ele aparecer. Independente do volume do histórico do aluno, o painel deve carregar instantâneamente.

- **RNF06**: No sistema a opção para baixar as questões que errou devem baixar os arquivos questões em formato .apkg ou .csv.  

- **RNF07**: O sistema deve saber identificar o erro reportado e sinalize rapidamente os usuários "Professores" e ou administradores.

- **RNF08**: A tabela do rank global do sistema deve ser carregada instantâneamente, independente da quantidade de dados armazenados e deve ser possível ser vista pelos que estão classificados.

- **RNF09**: O sistema deve armazenar as questões que os usuários selecionarem por meio de "Favoritos" e terem a capacidade de poderem acessar a lista de questões.

- **RNF10**: O sistema deve pegar as questões classificadas por cada dificuldade e carregar as questões instantâneamente de acordo com a dificuldade selecionada. 

- **RNF11**: O sistema deve carregar e suportar todas as abas de comentários em todos os questionários sem delay, independente de quantos comentários tenham sido feitos em cada um.

- **RNF12**: O sistema deve carregar as notas que o usuário "Professor", ao usar a opção, diretamente de forma instantâneamente para o local selecionado.

- **RNF13**: O sistema tem que gerar uma opção de compartilhar o progresso que o usuário teve nas questões, caso tenha passado dos 80% de sucesso, para o feed de sua escolha.

- **RNF14**: 

- **RNF15**:




