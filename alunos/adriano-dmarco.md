# Levantamento de requesitos
## Adriano D' Marco

### 1. Requisitos Funcionais

- **RF01**: O sistema do usuário precisa que na interface haja opções de cadastramento de questões que sejam salvos e possuam enunciado, alternativas, resposta correta e explicação para que, com a boa organização.

- **RF02**: Os usuários tem que ter, em sua interface, a opção de configurar e iniciar um cronômetro antes de começar o quiz. 

- **RF03**: O usuário "Professor" precisa de uma opção em sua interface que faça com que as provas sejam exportadas diretamente para um arquivo PDF, ja formatado e com o logotipo da insttituição desse usuário.

- **RF04**: O sistema deve ter uma restrição de acesso á área dos "Professores", exclusicamente para usuários autenticados e validados com perfil "docente".

- **RF05**: No painel de visualização de estatísticas ao final de cada semana, deve mostrar o histórico de pontuação, a taxa de acerto por cada tópico e o tempo médio de resposta por questão.

- **RF06**: A interface precisa que apareça uma opção para o usuário poder baixar questões que errou no quiz em formato ".apkg" ou ".csv" quando quiser.

- **RF07**: Colocando uma opção no "QuizCard" que sirva para reportar erros caso um usuário encontre, assim notificando de imediato os admins/professores sobre os erros reportados.

- **RF08**: O sistema deve ter e mostrar uma tabela de rank, semanal e mensal, de pontos global e que todos da comunidade possam ver a tabela.

- **RF09**: Deve-se ter uma opção no sistema onde o usuário possa salvar a questão de preferência e um local onde ela ficará armazenada as questões escolhidas como favoritas e somente o usuário poderá ver.

- **RF10**: Antes de começar um quiz, deve aparecer a opção de cronômetro e também na interface deve surgir uma opção de seleção de dificuldade que adapte as questões.

- **RF11**: O sistema tem que fazer aparecer em cada questão uma thread de comentários onde todos possam comentar sobre a questão livremente.

- **RF12**: No sistema, é ideal que haja uma opção onde o usuário "Professor" possa usar para fazer uma exportação automática das notas dos usuários "Aluno" para um outro local.

- **RF13**: Quando o usuário "Aluno" conseguir um desempenho acima de 80% nos resultados, deve mostra uma opção de conseguir compartilhar o perfil para que outros usuários possam ver em um feed. 

- **RF14**: O sistema deve usar as ferramentas Markdown e Syntax Highlighting na área de cadastro e leitura para que os usuários "Professor" quando cadastrarem uma nova questão que contém um snippet de código.  

- **RF15**: No sistema de interface dos usuários, deve aparecer uma opção de fazer dowload das questões selecinadas e serem armazenadas para serem acessadas quando os usuários quiserem.

### 2. Requesitos Não Funcionais

- **RNF01**: O sistema deve carregar instanâneamente todos os enunciados, todas as alternativas, respostas e explicações dos questionários, além de ter que carregar a página rapidamente.

- **RNF02**: O Cronômetro do sistema tem que ter o mínimo de deley e não pode travar ou falhar durante o momento que o usuário está respondendo e deve encerrar ao final do questionário feito e começar ao entrar em um questionário.

- **RNF03**: Quando o usuário "Professor" for fazer a exportação da prova, a prova tem que instantâneamente estar em arquivo PDF, formatado e com logotipo da instituição do usuário ap

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

- **RNF14**: O sistema irá usar as ferramentas Markdown e Syntax Highlighting para fazerem um sistema de cadastramento e de leitura para fazer as próximas formatações de novas questões com snippet código, não falhem.

- **RNF15**: O sistema irá baixar os dados das questões selecionadas pelo usuário para que quando o usuário quiser, possa acessálas offline.


### 3. Regras de negócio: 
### a) Quais funcionalidades são o "coração" do app (o que ele faz, independente de tecnologia)?

R- O app foi feito para gerar questionários que são criados por alguém para que outros, que vão usar desses questionários, possam revisar os assuntos passados. Gerar perguntas criadas a serem respondidas.

### 4. Detalhes (Acessórios):
### a) Onde os dados serão guardados ou como será a interface?
### b) (Lembre-se que, para a engenharia, isso é secundário à lógica do problema).

R- A interface deve ser gerada de uma forma onde qualquer um que for ver, consiga saber onde ir e o que está fazendo. A interface tem que ser, essencialmente, interativa, para que a experiência do usuário seja a melhor possível. Os dados serão guardados no banco de dados do app. 

### 5. Análise de Modelo de Entrega (Cloud):
### a) Decida como o "Mestre da Engenharia de Software 2.0" será entregue aos usuários finais:
### b) Escolha um modelo:
### i. O app será oferecido como SaaS (acesso via navegador sem instalação), ou a escola deve contratar um IaaS para hospedar sua própria infraestrutura?
### ii. Justifique com base na conveniência para o Professor.

R- Se a pessoa quiser algo que já esteja pronto para poder ser usado, e se quiser adaptar alguams coisas, o SaaS acaba sendo a melhor opção, caso a pessoa já queira algo feito. Mas se o dono quiser começar do começo já tendo uma estrutura, será ótimo para ela moldar a estrutura do jeito que ele quiser, então, IaaS.

### 6. O que o sistema NÃO faz:
### a) Defina um limite para o escopo desta versão (Ex: O sistema não fará correção automática de provas discursivas).

R- Não tem uma acesso de chat onde todos podem conversar livremente nesta versão.


