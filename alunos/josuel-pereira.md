# US01:

 ### O usuario professor, quer cadastrar novas questões (com enunciado, alternativas, resposta correta e explicação) para avaliar conteúdos específicos.

 ## Requisitos Funcional, RF01

 O sistema deve permitir que o professor cadastre novas questões, incluindo:

enunciado

alternativas

resposta correta

explicação

## Requisitos Não Funcionais, RNF01

O sistema deve fornecer uma interface intuitiva para cadastro de questões.

Apenas usuários com perfil de professor podem cadastrar questões.


# US02

### O usuario aluno, quero ativar um cronômetro regressivo com tempo configurável antes do quiz.

## Requisitos Funcional, RF01

O sistema deve permitir que o aluno ative um cronômetro regressivo antes de iniciar um quiz.

O sistema deve permitir que o aluno configure o tempo do cronômetro (ex: 15, 30 ou 60 minutos).

## Requisitos Não Funcionais, RNF01

O cronômetro deve ser exibido de forma clara e visível durante o quiz.

O cronômetro deve funcionar com precisão em tempo real, sem atrasos perceptíveis.

# US03

### O usuario Professor, quer exportar provas em PDF já formatado com logo da instituição.

## Requisitos Funcional, RF01

O sistema deve permitir que o professor exporte provas geradas para um arquivo PDF.

O sistema deve gerar o PDF com formatação adequada para impressão.

O sistema deve permitir incluir logotipo e cabeçalho da instituição no PDF gerado.

## Requisitos Não Funcionais, RNF01

A exportação para PDF deve ser simples e acessível.

O arquivo PDF gerado deve ser compatível com leitores padrão.

O PDF deve manter formatação consistente

# US04

### O usario administrador, quer ue apenas usuários com perfil "Docente" podem acessar área de professor.

## Requisitos Funcional, RF01

O sistema deve autenticar usuários antes de permitir acesso às funcionalidades.

O sistema deve permitir controle de acesso baseado em usuario.

O sistema deve restringir o acesso às funcionalidades de professor apenas a usuários com perfil "Docente.

## Requisitos Não Funcionais, RNF01

O sistema deve garantir que usuários não autorizados não acessem áreas restritas.

O sistema deve utilizar mecanismos seguros de autenticação (ex: login e senha).

# US05

### O usuario Aluno quer um painel com estatísticas semanais + gráficos rápidos.

## Requisitos Funcional, RF01

O sistema deve permitir que o aluno visualize um painel de estatísticas semanal.

O sistema deve exibir o histórico de pontuações do aluno.

O sistema deve apresentar a taxa de acerto por tópico (ex: Git, Nuvem).

O sistema deve calcular e exibir o tempo médio de resposta por questão.

## Requisitos Não Funcionais, RNF01

Os gráficos do painel devem carregar instantaneamente, independentemente do volume de dados.

O sistema deve suportar grande volume de histórico sem perda de desempenho.

# US06

### O usuario quer baixar questões erradas em formato compatível com Anki (.apkg ou .csv)

## Requisitos Funcional, RF01

O sistema deve permitir que o aluno exporte as questões respondidas incorretamente em um quiz.

O sistema deve permitir a exportação dessas questões nos formatos .(apkg e .csv.)

## Requisitos Não Funcionais, RNF01

Os arquivos exportados devem ser compatíveis com o Anki.

A funcionalidade de exportação deve ser simples e acessível ao usuário.

# US07

### O Usuário quer um botão de “Reportar Erro” diretamente no quiz.

## Requisitos Funcional, RF01

O sistema deve permitir que o usuário reporte erros em questões diretamente pela interface do quiz.

O sistema deve disponibilizar um botão “Reportar Erro” em cada questão (QuizCard).

O sistema deve registrar o relatório enviado pelo usuário para análise de administradores/professores.

## Requisitos Não Funcionais, RNF01

A funcionalidade de reportar erro deve ser facilmente acessível durante o quiz.

O sistema deve armazenar os relatórios com informações para identificação da questão e do problema.

# US08

### O usuario Aluno quer um sistema de ranking global (leaderboard) semanal e mensal.

## Requisitos Funcional, RF01

O sistema deve exibir um ranking global de usuários com base no desempenho em quizzes.

O sistema deve permitir a visualização de rankings em períodos semanal e mensal.

O sistema deve classificar os usuários com base em critérios de desempenho (ex: pontuação, acertos).

## Requisitos Não Funcionais, RNF01

O ranking deve ser atualizado e exibido rapidamente.

O sistema deve suportar grande quantidade de usuários no ranking sem degradação de performance.

# US09 O usuario Aluno quer favoritar questões para revisar depois.

## Requisitos Funcional, RF01

O sistema deve permitir que o aluno marque questões como favoritas.

O sistema deve permitir que o aluno visualize uma lista de questões favoritas.

O sistema deve permitir que o aluno acesse posteriormente as questões salvas para revisão.

## Requisitos Não Funcionais, RNF01

A funcionalidade de favoritar deve ser simples e acessível durante o quiz.

As questões favoritas devem ser armazenadas para acesso futuro.

# US010

### O suario Aluno quer nível de dificuldade nas questões + filtro por nível.

## Requisitos Funcional, RF01

O sistema deve permitir a classificação das questões por nível de dificuldade (ex: Fácil, Médio, Difícil).

O sistema deve permitir que o aluno filtre quizzes com base no nível de dificuldade das questões.

## Requisitos Não Funcionais, RNF01

O filtro por dificuldade deve ser simples de usar e facilmente acessível.

As questões devem estar corretamente categorizadas para garantir resultados consistentes nos filtros.

# US011

## O usuario Usuário quer uma thread de comentários em cada questão.

## Requisitos Funcional, RF01

O sistema deve permitir que usuários comentem em cada questão.

O sistema deve exibir uma thread de comentários associada a cada questão.

O sistema deve permitir que usuários visualizem e participem das discussões sobre as questões.

## Requisitos Não Funcionais, RNF01

A área de comentários deve ser de fácil acesso e leitura.

As threads devem carregar rapidamente, mesmo com muitos comentários.

# US012

### O usuario Professor quer exportar notas automaticamente via API/webhook para o Moodle

## Requisitos Funcional, RF01

O sistema deve disponibilizar uma API ou webhook para exportação automática de notas dos alunos.

O sistema deve permitir a integração com sistemas externos de ensino, como o Moodle.

O sistema deve permitir que professores configurem a exportação automática de notas.

## Requisitos Não Funcionais, RNF01

O sistema deve ser compatível com APIs externas e padrões de integração.

A exportação de dados deve ocorrer sem perda ou inconsistência de informações.

# US013 

## O usuário quer compartilhar resultado no LinkedIn quando tiver bom desempenho.

## Requisitos Funcional, RF01

O sistema deve permitir que o usuário compartilhe seus resultados de quiz em redes sociais.

O sistema deve disponibilizar um botão de compartilhamento na tela final do quiz.

O sistema deve permitir o compartilhamento no LinkedIn quando o usuário atingir desempenho superior a um determinado percentual (ex: 80%).

## Requisitos Não Funcionais, RNF01

A funcionalidade de compartilhamento deve ser simples.

O sistema deve ser compatível com APIs de redes sociais para compartilhamento.

# US014

### O usuario professor quer suporte a Markdown + syntax highlighting para código.

## Requisitos Funcional, RF01

O sistema deve permitir o cadastro de questões utilizando formatação em Markdown.

O sistema deve renderizar corretamente conteúdos em Markdown na visualização das questões.

O sistema deve aplicar destaque de sintaxe (syntax highlighting) em trechos de código presentes nas questões.

## Requisitos Não Funcionais, RNF01

O sistema deve exibir conteúdos formatados de forma clara e legível.

O sistema deve suportar padrões comuns de Markdown.

O destaque de sintaxe deve ser visualmente adequado para diferentes linguagens de programação.

# US015 

### O usuario Usuário quer usar o app offline (tipo PWA) e baixar questões antes.

## Requisitos Funcional, RF01

O sistema deve permitir que o aluno baixe um conjunto de questões para uso offline.

O sistema deve permitir que o aluno responda quizzes sem conexão com a internet.

O sistema deve sincronizar os dados (respostas, resultados) quando a conexão for restabelecida.

## Requisitos Não Funcionais, RNF01

O sistema deve funcionar mesmo sem conexão com a internet.

O sistema deve suportar funcionamento como Progressive Web App (PWA).

O sistema deve garantir que os dados sejam sincronizados corretamente após reconexão.

# Modelo de Entrega

Software as a Service (SaaS)

# Armazenamento de dados

Os dados (usuários, questões, respostas, estatísticas) devem ser armazenados em banco de dados na nuvem.

Dados offline podem ser armazenados localmente no dispositivo do usuário e sincronizados posteriormente.

# Interface

O sistema deve possuir interface web acessível por navegador.

