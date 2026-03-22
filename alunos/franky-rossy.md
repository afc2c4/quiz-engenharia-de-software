## Franky junior

### 1. Requisitos Funcionais

- **US01**: Cadastro de questões (enunciado, alternativas, resposta, explicação).  

- **US02** : Seleção e disparo de cronômetro regressivo (15, 30, 60 min).

- **US03** : Exportação de provas em PDF com template institucional (Logo/Cabeçalho).

- **US04** : Controle de acesso por perfil (RBAC) restringindo área de "Professor".

- **US05** : Dashboard semanal de desempenho (taxa de acerto e tempo médio).

- **US06** : Exportação de questões erradas nos formatos .apkg ou .csv.

- **US07**: Botão de "Reportar Erro" diretamente na interface da questão.

- **US08** : Leaderboard (Ranking) global dividido por períodos (semanal/mensal).

- **US09**: Funcionalidade de "Favoritar/Estrear" questões para revisão.

- **US10**: Filtro de questões por nível de senioridade (Junior, Pleno, Senior).

- **US11**: Seção de comentários/threads em cada questão para debate.

- **US12**: API REST/Webhooks para exportação de notas para sistemas LMS.

- **US13** : Botão de compartilhamento no LinkedIn para resultados > 80%.

- **US14**: Renderização de Markdown e Syntax Highlighting em códigos.

- **US15**: Modo offline (PWA) para download de questões e uso sem sinal.

### 2. Requisitos Não Funcionais

- **RNF01** (Desempenho): O sistema deve responder às requisições do usuário em no máximo 3 segundos.

- **RNF02** (Desempenho): O sistema deve suportar pelo menos 100 usuários simultâneos sem perda significativa de desempenho.

- **RNF03** (Disponibilidade): O sistema deve estar disponível 99% do tempo, exceto em períodos de manutenção programada.

- **RNF04** (Segurança): As senhas dos usuários devem ser armazenadas de forma criptografada.

- **RNF05** (Segurança): O sistema deve utilizar protocolo HTTPS para transmissão de dados.

- **RNF06** (Segurança): O sistema deve implementar controle de acesso baseado em níveis de permissão.

- **RNF07** (Usabilidade): A interface deve ser intuitiva e de fácil navegação para usuários iniciantes.

- **RNF08** (Usabilidade): O sistema deve ser compatível com dispositivos móveis (design responsivo).

- **RNF09** (Confiabilidade): O sistema deve realizar backups automáticos diários dos dados.

- **RNF10** (Manutenibilidade): O código do sistema deve ser organizado e documentado para facilitar manutenção.

- **RNF11** (Portabilidade): O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Edge).

- **RNF12** (Escalabilidade): O sistema deve permitir expansão para suportar aumento no número de usuários.

- **RNF13** (Legal/Conformidade): O sistema deve estar em conformidade com a LGPD (Lei Geral de Proteção de Dados).

### 3. Regras de Negócio 

Simulação de Desempenho Sob Pressão: O app não é apenas para leitura, é para teste.
O que faz: Coloca o estudante em um cenário de desafio onde ele precisa tomar decisões rápidas dentro de um limite de tempo.

- **Simulação de Desempenho Sob Pressão**: O app não é apenas para leitura, é para teste.

O que faz: Coloca o estudante em um cenário de desafio onde ele precisa tomar decisões rápidas dentro de um limite de tempo.

Essência: Treinar a agilidade mental e a retenção de conteúdo através da simulação de exames reais.

- **Ciclo de Feedback e Diagnóstico**: O app atua como um tutor, não apenas como um juiz.

O que faz: Confronta a escolha do aluno com a verdade técnica (gabarito) e, mais importante, explica o erro no exato momento em que ele ocorre. Além disso, mostra onde o aluno está falhando (estatísticas).

Essência: Transformar o erro em aprendizado imediato e mapear lacunas de conhecimento.

- **Curadoria de Conhecimento Estruturado**: O app não é um "bloco de notas", é um banco de dados pedagógico.

O que faz: Permite que um especialista (professor) crie questões que tenham obrigatoriamente um "porquê" (explicação) e uma "régua" (nível de dificuldade).

Essência: Organizar o caos da informação em itens de avaliação claros e explicativos.
### 4. Detalhes (Acessórios):
#### a
Os dados do sistema serão armazenados em um banco de dados digital, podendo ser local ou em nuvem, garantindo segurança e organização das informações.
A interface do sistema será desenvolvida de forma simples e intuitiva, podendo ser acessada por meio de um navegador (sistema web) ou aplicativo mobile, com telas de fácil navegação, como login, cadastro, listagem e edição de dados.

#### b 
Esses aspectos são considerados secundários porque não definem o funcionamento principal do sistema, mas sim a forma como ele é implementado e apresentado ao usuário.
Na engenharia de software, o mais importante é a definição das regras de negócio e das funcionalidades. A tecnologia utilizada, o tipo de banco de dados ou o design da interface podem ser alterados sem modificar a lógica central do sistema.

### 5. Análise de Modelo de Entrega (Cloud)

#### a 
O sistema “Mestre da Engenharia de Software 2.0” será disponibilizado aos usuários finais por meio da internet, permitindo acesso remoto sem a necessidade de instalação local, facilitando o uso por professores e alunos em diferentes dispositivos.

#### b 
O aplicativo será oferecido como SaaS, ou seja, acessado diretamente por um navegador web, sem necessidade de instalação ou gerenciamento de infraestrutura por parte da escola

#### I
A escolha pelo modelo SaaS se deve principalmente à praticidade e conveniência para o professor, pois:
Não exige instalação de software em computadores
Pode ser acessado de qualquer lugar (casa, escola, celular, etc.)
Reduz problemas técnicos e necessidade de suporte
Atualizações são automáticas, sem interromper o uso

#### II
O modelo SaaS é mais adequado por oferecer simplicidade, acessibilidade e menor custo operacional, garantindo que o professor possa focar no uso do sistema, e não em questões técnicas.

### 6. O que o sistema NÃO faz:

- **NS01**: O sistema não realizará correção automática de provas discursivas.

- **NS02**: O sistema não funcionará sem conexão com a internet (modo offline não disponível).

- **NS03**: O sistema não fará integração com plataformas externas (ex: sistemas acadêmicos institucionais ou ERPs).

- **NS04**: O sistema não permitirá personalização avançada da interface pelo usuário.

- **NS05**: O sistema não enviará notificações em tempo real por aplicativos externos (ex: SMS ou WhatsApp).

- **NS06**: O sistema não realizará análise avançada de desempenho com inteligência artificial.