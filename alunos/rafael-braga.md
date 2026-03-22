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

 - (US14)RF14: Suporte a Markdown, onde terá coloração nos códigos (Dockerfile, JSON...) e formatação correta.

 - (US15)RF15: Existir a opção do sistema baixar varias questões nos aparelhos. Para que possa ser respondido de forma Offline.





## 2. Requisistos Não Funcionais

 - (US01)RNF01: Na interface, será possivel entrada de dados em barras de inserção de texto para ser utilizado para adicionar questões. 

 - (US02)RNF02: Flexibilidade de configuração do tempo.

 - (US03)RNF03: Formatação com logotipo/cabeçalho no PDF.

 - (US04)RNF04 Acesso à área "Professor" restrita apenas para usuarios autenticados e validados como "Docentes".

 - (US05)RNF05: Carregamento dos dados do painel de forma instantanea (ou o mais rapido possivel), independente do volume de dados.

 - (US06)RNF06: Compatibilidade com Anki.

 - (US07)RNF07: Facilidade de reportar diretamente no sistema.

 - (US08)RNF08: Ordenação e atualização de Ranking com resposta instantanea.

 - (US09)RNF09: Gravar, na nuvem, as informações de quais questões foram favoritadas, para que essas questões sejam acessadas independente do dispositivo e/ou local.

 - (US10)RNF10: Resposta imediata ao clique do botão "filtrar".

 - (US11)RNF11: Comentários devem ser postados de forma instantanea, deve suportar grande quantidade de texto

 - (US12)RNF12: Integração com LMS (ex: Moodle).

 - (US13)RNF13: Botão de compartilhamento deve ser responsivo e acessivel em qualquer plataforma e navegador.

 - (US14)RNF14: Melhor Legibilidade de codigo.
 
 - (US15)RNF15: Uso sem internet.


## 3. Regras de Negócio

  1. Gestão e Tutoria do Conhecimento: O Aplicativo é um meio dos Professores utilizarem seus conteúdos para avaliação de seus alunos. Através de questões e comentários, se é medido o conhecimento de seus alunos e o que pode ser corrigido para o melhor desempenho dos mesmos.

  2. Ciclo de Testes e Aprendizado: O Aplicativo é perfeito para o Aluno desenvolver seu conhecimento e sempre estar se desafiando. Com questões de niveis diversos, o aluno pode testar seus conhecimentos e avaliar os pontos em que precisar melhorar e tentar as questões quantas vezes forem desejadas.

  3. Atuação do Sistema na Avaliação: O Aplicativo será o meio que irá auxiliar ambos Alunos e Professores. Ele sendo responsável, na parte dos Professores, a apresentar os resultados dos alunos e salvar suas correções no sistema, além de guardar novas questões. Já, na parte dos alunos, apresentar aos alunos as questões, corrigir-las e auxiliar no desenvolvimento dos alunos através de novas tentativas e possiveis dicas para melhor desempenho.
        
## 4. Detalhes(Acessórios)

    - A interface terá um login, onde será colocado os dados do usuários. E, após logar e autenticar o tipo de usuário que está logando, entrará na tela com o menu referente ao perfil do usuário. Esses dados estarão guardados em um banco de dados SQL, onde estará bem organizado com suas tabelas especificas e que conversam entre si, e utilizando esses dados do banco de dados com uma conexão com uma linguagem de programação, teremos a autenticação correta. Essa interface estará numa aplicação web responsiva (SPA).

## 5. Análise de Modelo de Entrega (Cloud)

    - Os usuários poderam acessar o "Mestre da Engenharia de Software 2.0" através de um host, a qual ainda será designado. O modelo escolhido será o SaaS. Assim, os usuários não terão que se preocupar com a infraestrutura do site, apenas em usar conforme desejado. O Modelo será o PWA (Aplicação Web Progressiva), pois se trata de uma aplicação com tecnologias web, mas que oferece ao usuário uma experiencia como um app de plataforma. Isso melhora a interação do usuário com o App e o tempo de resposta do mesmo.


## 6. O que o sistema NãO faz

  1. O sistema não corrige as provas discursivas de forma automatica. Por apenas estar "treinada" para apresentar respostas de questões de multipla escolha, o sistema ainda não tem algum tipo de analise de dados para correção de prova discursiva. Por isso, essa parte será inteiramente responsavel ao usuário "PROFESSOR", quem irá ler as respostas e dar suas notas de acordo com o que foi analisado.

  2. O sistema não ranqueará os perfis dos alunos, para que não haja nenhuma forma de demerito ou discriminação com alunos que tem rendimento abaixo dos outros.

  3. Os dados sensiveis não será revelados para nenhum outro usuário. a integridade e segurança dos usuários é fundamental.

  4. Não tem algum sistema que impeça os alunos de "filarem" as respostas em outras abas. O sistema só se preocupará com as respostas dadas nas questões, acreditando que isso é por próprio merito do aluno.

  5. A App não funcionará como uma rede social. Toda e qualquer interação dos usuários será feita através da seção de comentários ou atravás das respostas dadas pelo professor na resolução das questões.

  
        


