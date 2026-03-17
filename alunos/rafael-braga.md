# Rafael Braga

## 1. Requisitos Funcionais

 - (US01)RF01: Usuario PROFESSOR poder cadastrar atividades atraves da interface.

 - (US02)RF02: Usuario ALUNO poder ativar cronometro regressivo atraves da interface.

 - (US03)RF03: Usuario PROFESSOR poder exportar. em PDF, um arquivo ja formatado com logotipo/cabeçalho da instituição, através do GERADOR DE PROVAS.

 - (US04)RF04: Sistema deve comparar os dados e verificar se é PROFESSOR ou ALUNO para autenticar.

 - (US05)RF05: Usuario ALUNO deseja que o sistema desenvolva um painel de estatisticas, ao final de cada semana. para mostrar seu historico de pontuações e o tempo médio das respostas por questão. E que ele consiga visualizar esse painel.

 - (US06)RF06: Criar botão que baixa apenas as questões erradas no quiz, em formato .apkg ou .csv.

 - (US07)RF07: Criar botão "Reportar Erro" que permite denunciar questão com erro e informar onde está o erro.

 - (US08)RF08: O Sistema deve gerar um leaderboard (semana e mensal) como os alunos e suas pontuações, de forma ordenada, se baseando na quantidade de maior pontuação até a menor.

 - (US09)RF09: Criar botão de "Favoritar" para guardar questões importantes para os usuários, assim terão acesso às questões que favoritaram sempre que desejarem.

 - (US10)RF10: Criar botão de "Filtrar". Utilizando, como base, lista de exercicios marcados com a categoria desejada (Ex.: Facil, Medio, Dificil), o botão filtra e apenas apresenta questões de acordo com a categoria desejada.

 - (US11)RF11: A possibilidade de poder comentar cada questão, logo abaixo da questão. E poder publicar o comentário através de um botão.

 - (US12)RF12: uma API que possa exportar as notas dos alunos diretamente para o Moodle.

 - (US13)RF13: Criar a existência de um botão que irá compartilhar seu resultado (se for maior que 80%) pra o feed do Linkedin.

 - (US15)RF15: Existir a opção do sistema baixar varias questões nos aparelhos. Para que possa ser respondido de forma Offline.





## 2. Requisistos Não Funcionais

 - (US02)RNF01: Flexibilidade de configuração do tempo.

 - (US03)RNF02: Formatação com logotipo/cabeçalho no PDF.

 - (US04)RNF013 Acesso à área "Professor" restrita apenas para usuarios autenticados e validados como "Docentes".

 - (US05)RNF04: Carregamento dos dados do painel de forma instantanea (ou o mais rapido possivel), independente do volume de dados.

 - (US06)RNF05: Compatibilidade com Anki.

 - (US07)RNF06: Facilidade de reportar diretamente no sistema.

 - (US12)RNF07: Integração com LMS (ex: Moodle).

 - (US14)RNF08: Melhor Legibilidade de codigo.
 
 - (US15)RNF09: Uso sem internet.


## 3. Regras de Negócio

  1.  Cadastrar usuarios
  2.  Logar os usuarios
  3.  Autenticar seus perfis (se é aluno ou professor)
  4.  Permitir que crie, edite ou apague questões (Professor)
  5.  Permitir que se resolva as questões (Aluno)
  6.  Deslogar os usuarios
        
## 4. Detalhes(Acessórios)

    - A interface terá um login, onde será colocado os dados do usuários. E, após logar e autenticar o tipo de usuário que está logando, entrará na tela com o menu referente ao perfil do usuário. Esses dados estarão guardados em um banco de dados, onde estará bem organizado, e utilizando esses dados do banco de dados, teremos a autenticação correta.

## 5. Análise de Modelo de Entrega (Cloud)

    - Os usuários poderam acessar o "Mestre da Engenharia de Software 2.0" através de um host, a qual ainda será designado. O modelo escolhido será o SaaS. Assim, os usuários não terão que se preocupar com a infraestrutura do site, apenas em usar conforme desejado.


## 6. O que o sistema NãO faz

  1. O sistema não corrige as provas de forma automatica. O usuário PROFESSOR terá que o fazer de forma manual.
  2. O sistema não ranqueará os perfis dos alunos, para que não haja nenhuma forma de demerito ou discriminação com alunos que tem rendimento abaixo dos outros.
  3. Os dados sensiveis não será revelados para nenhum outro usuário. a integridade e segurança dos usuários é fundamental.
        


