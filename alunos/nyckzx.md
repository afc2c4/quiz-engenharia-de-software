"## Nycollas Rodrigues
## 1-Requisitos funcionais
RF01: O sistema deve permitir que professores cadastrem questões com enunciado, alternativas, resposta correta e explicação. (US01)

RF02: O sistema deve permitir que alunos ativem um cronômetro regressivo configurável antes de iniciar um quiz. (US02)

RF03: O sistema deve permitir exportar provas geradas para PDF com formatação e cabeçalho institucional. (US03)

RF04: O sistema deve autenticar usuários e restringir o acesso à área de professor ao perfil "Docente". (US04)

RF05: O sistema deve exibir um painel semanal de estatísticas com:

Histórico de pontuação

Taxa de acerto por tópico

Tempo médio por questão (US05)

RF06: O sistema deve permitir exportar questões erradas em formato CSV e/ou APKG (Anki). (US06)

RF07: O sistema deve permitir reportar erros em questões por meio de um botão no quiz. (US07)

RF08: O sistema deve exibir um leaderboard global, semanal e mensal. (US08)

RF09: O sistema deve permitir favoritar/salvar questões para revisão posterior. (US09)

RF10: O sistema deve permitir filtrar questões por nível de dificuldade (Junior, Pleno, Senior). (US10)

RF11: O sistema deve permitir comentários/discussões em cada questão (thread). (US11)

RF12: O sistema deve disponibilizar uma API REST ou webhook para exportação de resultados para sistemas externos (LMS). (US12)

RF13: O sistema deve permitir compartilhar resultados em redes sociais quando o desempenho for ≥ 80%. (US13)

RF14: O sistema deve permitir cadastro e exibição de questões com suporte a Markdown e syntax highlighting. (US14)

RF15: O sistema deve permitir uso offline com download de quizzes para realização sem internet (PWA). (US15)

## 2-Requisitos nao funcionais
RNF01 – Desempenho:
O painel de estatísticas deve carregar rapidamente, independentemente do volume de dados. (US05)

RNF02 – Segurança:
O sistema deve garantir autenticação segura e controle de acesso baseado em perfis (ex: Docente). (US04)

RNF03 – Usabilidade:
A interface deve ser intuitiva para alunos e professores, facilitando cadastro, navegação e uso geral. (US01, US02)

RNF04 – Escalabilidade:
O sistema deve suportar crescimento no número de usuários e volume de dados. (US05)

RNF05 – Interoperabilidade:
O sistema deve permitir integração com sistemas externos via API REST. (US12)

RNF06 – Portabilidade:
O sistema deve funcionar como aplicação web progressiva (PWA), incluindo uso offline. (US15)

RNF07 – Compatibilidade:
O sistema deve funcionar em navegadores modernos e dispositivos móveis. (US15)

RNF08 – Confiabilidade:
Os dados (questões, respostas, estatísticas) devem ser persistidos de forma segura e consistente.

RNF09 – Performance de Exportação:
A geração de arquivos (PDF, CSV, APKG) deve ocorrer de forma rápida e sem falhas. (US03, US06)

RNF10 – Acessibilidade:
A interface deve seguir boas práticas de acessibilidade (contraste, legibilidade, navegação).

RNF11 – Responsividade:
A interface deve se adaptar a diferentes tamanhos de tela (desktop e mobile).
## 3- Regras de Negócio 
O sistema tem como principal objetivo permitir a criação, aplicação e correção de quizzes educacionais.

Os professores são responsáveis por cadastrar e gerenciar questões, enquanto os alunos utilizam o sistema para responder quizzes e acompanhar seu desempenho.

As respostas dos alunos são corrigidas automaticamente, e o sistema apresenta feedback com explicação para auxiliar no aprendizado.

O sistema também registra o desempenho dos alunos ao longo do tempo, permitindo análise de acertos, erros e evolução.

Além disso, o sistema oferece recursos de apoio ao aprendizado, como:

Revisão de questões erradas

Favoritar questões

Ranking entre alunos

Exportação de dados para estudo externo

O acesso a funcionalidades administrativas (como cadastro de questões) é restrito a professores autenticados.

## 4-Detalhes (Acessórios):
Os dados do sistema serão armazenados em um banco de dados, contendo informações como usuários, questões, respostas e desempenho dos alunos.

A interface será uma aplicação web, acessível pelo navegador, com telas para:

Cadastro de questões (professor)

Realização de quizzes (aluno)

Visualização de estatísticas e ranking

O sistema poderá utilizar uma interface moderna e responsiva, adaptada para computadores e dispositivos móveis.

Também poderá contar com recursos como:

Editor com suporte a formatação (Markdown)

Gráficos para estatísticas

Funcionalidade offline (PWA)

  Esses aspectos são considerados acessórios, pois não alteram a lógica principal do sistema, apenas a forma como ele é implementado e utilizado.
  ## 5-Análise de Modelo de Entrega (Cloud)
O sistema será entregue no modelo SaaS (Software as a Service), sendo acessado diretamente pelo navegador, sem necessidade de instalação.

Essa escolha se justifica pela facilidade de uso para o professor, que não precisará configurar servidores ou infraestrutura, podendo apenas acessar o sistema e utilizá-lo imediatamente.

Além disso, o modelo SaaS permite:

-Atualizações automáticas

-Acesso de qualquer lugar

-Menor custo e complexidade técnica
## 6-O que o sistema NÃO faz
Para esta versão (2.0), o sistema não contemplará funcionalidades fora do foco principal de quizzes objetivos.

Assim, o sistema não fará:

Correção automática de questões discursivas

Criação automática de questões por inteligência artificial

Gestão acadêmica completa (matrícula, frequência, boletim escolar)

Aplicação de provas presenciais com leitura de gabarito físico

Moderação avançada de comentários (apenas funcionalidades básicas)

Personalização avançada de layout de provas além do padrão

Integração com todos os sistemas externos (apenas via API básica)

Isso define um limite claro do sistema, mantendo o foco em quizzes, avaliação e aprendizado.