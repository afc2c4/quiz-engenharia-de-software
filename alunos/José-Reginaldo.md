## José Reginaldo

### 1. Requisito Funcional 
 - **US01**: O sistema deve fornecer uma interface para o professor cadastrar questões contendo enunciado, quatro alternativas, indicação da resposta correta e uma justificativa técnica (explicação).

- **US02**: O sistema deve permitir que o aluno selecione um tempo limite (15, 30 ou 60 min) antes de iniciar o quiz e exibir a contagem regressiva durante a prova.

- **US03**: O sistema deve gerar um arquivo PDF das questões selecionadas, incluindo automaticamente o logotipo e o cabeçalho da instituição do professor.

- **US04**: O sistema deve restringir o acesso às ferramentas de criação e gabaritos apenas para usuários autenticados com o perfil "Docente".

- **US05**: O sistema deve calcular e exibir semanalmente a taxa de acerto por tópico (ex: Git, Nuvem) e o tempo médio de resposta do aluno.

- **US06**: O sistema deve permitir que o aluno baixe as questões que errou nos formatos .csv ou .apkg para revisão externa.

- **US07**: O sistema deve disponibilizar um botão "Reportar Erro" em cada questão para que o aluno envie contestações sobre o gabarito aos administradores.

- **US08**: O sistema deve exibir um ranking semanal e mensal com os alunos de melhor pontuação por categoria.

- **US09**: O sistema deve permitir que o aluno "marque" questões específicas para compor uma lista de revisão personalizada no seu perfil.

- **US10**: O sistema deve permitir a classificação de questões por nível (Júnior, Pleno, Sênior) e oferecer um filtro para o aluno antes de gerar o quiz.

- **US11**: O sistema deve permitir que os alunos postem dúvidas e explicações em uma thread de comentários vinculada a cada questão.

- **US12**: O sistema deve fornecer endpoints REST e Webhooks para que notas e resultados sejam exportados automaticamente para sistemas externos como o Moodle.

- **US13**: O sistema deve gerar um card de conquista para compartilhamento no LinkedIn quando o aluno atingir uma nota superior a 80%.

- **US14**: O sistema deve suportar Markdown na edição das questões e colorir automaticamente a sintaxe de códigos (JSON, Dockerfile, etc.).

- **US15**: O sistema deve permitir o download de pacotes de questões para que o aluno realize os testes sem conexão à internet.

### 2. Requisito não Funcional

- **US01**: A interface deve validar o preenchimento de todos os campos obrigatórios antes de permitir o salvamento no banco de dados.

- **US02**: O tempo deve ser controlado pelo servidor para garantir que o aluno não consiga burlar o cronômetro alterando o relógio do navegador.

- **US03**: O arquivo gerado deve ser compatível com o padrão PDF/A para garantir a preservação da formatação e visualização em qualquer dispositivo.

- **US04**: O sistema deve utilizar autenticação baseada em funções (RBAC) e criptografar as credenciais de acesso no banco de dados.

- **US05**: Os gráficos de desempenho devem ser renderizados de forma assíncrona para não travar a interface, independentemente do volume de dados.

- **US06**: O arquivo gerado deve seguir o esquema de mapeamento de campos (Frente/Verso) compatível com a versão estável do software Anki.

- **US07**: Cada reporte deve capturar automaticamente os metadados da questão (ID, versão e autor) para facilitar a triagem.

- **US08**: O ranking deve ser processado em cache para evitar consultas pesadas ao banco de dados a cada carregamento de página.

- **US09**: A lista de favoritos deve ser persistida por usuário, garantindo que os itens salvos não se percam ao limpar o cache do navegador.

- **US10**: O algoritmo de sorteio de questões deve respeitar rigorosamente o filtro selecionado, impedindo que questões de nível superior apareçam em testes de nível inferior.

- **US11**: O sistema deve carregar os comentários sob demanda (Lazy Loading) para otimizar o consumo de dados e a performance da página.

- **US12**: A API deve implementar limites de taxa (Rate Limiting) para prevenir ataques de negação de serviço (DoS).

- **US13**: O sistema deve implementar as Meta Tags de Open Graph para que o preview da imagem apareça corretamente no feed da rede social.

- **US14**: O renderizador de Markdown deve aplicar sanitização no HTML para evitar vulnerabilidades de Cross-Site Scripting (XSS).

- **US15**: O sistema deve utilizar Service Workers para gerenciar o cache e garantir a sincronização dos resultados assim que a conexão retornar.

### 3. Regras de Negócio

## O coração do sistema resume-se em três pilares:

- **Gestão e Curadoria de Conhecimento**: O app é, antes de tudo, um repositório estruturado de saber técnico. Ele permite que especialistas (professores) transformem conteúdos complexos de Engenharia de Software em unidades de avaliação (questões), classificando-as por dificuldade e garantindo que o código fonte seja lido corretamente.

- **Ciclo de Avaliação e Treinamento**: É o motor que permite ao aluno testar e medir sua evolução. Ele oferece um ambiente simulado onde o usuário enfrenta desafios sob pressão (cronômetro), recebe feedback imediato sobre erros e pode organizar seu próprio plano de estudos através de filtros e favoritos.

- **Inteligência de Desempenho e Conexão**: O app transforma respostas em dados estratégicos. Ele mostra ao aluno onde ele é fraco ou forte (estatísticas), permite que a comunidade colabore para sanar dúvidas e possibilita que o progresso seja validado externamente, seja enviando notas para uma instituição ou compartilhando conquistas com o mercado de trabalho.

### 4 Detalhes (Acessórios):

- **A**: Os dados ficam na Nuvem (segurança e ranking) e no Dispositivo Local (estudo offline). A interface é Híbrida: técnica e limpa na hora da prova, mas visual e social na hora do resultado.

- **B**: Para este projeto, a infraestrutura de dados e a interface são tratadas como acessórios de suporte à lógica. Os dados residem em um modelo de sincronização nuvem-local para garantir disponibilidade total (Offline First), enquanto a interface é minimalista e orientada ao contexto, priorizando a legibilidade de código e a análise de desempenho do aluno.

### 5 Análise de Modelo de Entrega (Cloud)

## A: Aqui está a estratégia de entrega dividida pelos pilares de engenharia:

- **Modelo de Distribuição: Progressive Web App (PWA)**: A decisão técnica mais estratégica para este projeto é a entrega via PWA.

Por que esta escolha? Ela une o melhor dos dois mundos: a facilidade de acesso de um site (URL) com as funcionalidades de um aplicativo nativo (ícone na tela do celular, notificações e Modo Offline).

Vantagem na Entrega: Você não depende de aprovações burocráticas em lojas (App Store/Play Store) para atualizar uma regra de negócio ou corrigir um erro na US14 (Markdown). A atualização é instantânea para todos os usuários.

- **Estratégia de Hospedagem e Deployment (CI/CD)**: Para um sistema de engenharia, a entrega precisa ser automatizada:

Pipeline de Deploy: Cada vez que uma nova funcionalidade (como a US12 de API) é finalizada, o sistema passa por testes automatizados e é entregue na nuvem (ex: Vercel, Netlify ou AWS) sem intervenção manual.

Baixa Latência: O "front-end" deve ser entregue via CDN (Content Delivery Network). Isso significa que, se o aluno está no metrô ou em casa, os arquivos básicos do app carregam do servidor mais próximo dele, reduzindo o tempo de espera.

- **Sincronização e Persistência (Offline-First)**: A entrega do conteúdo (questões) segue a lógica Offline-First:

O usuário "baixa" a lógica do app ao acessar a primeira vez.

As questões são entregues em pacotes compactos (JSON).

A entrega de resultados para o servidor é assíncrona: o aluno termina o quiz, e o app tenta entregar a nota. Se falhar, ele guarda e tenta novamente em "background", sem que o usuário precise manter a tela aberta.

- **Documentação e Consumo (API)**: Para os professores e instituições (US12), a entrega é feita através de uma Interface de Programação:

Portal do Desenvolvedor: Uma página simples com a documentação da API (Swagger/OpenAPI).

Entrega de Dados: Os resultados não são apenas "vistos" na tela, são entregues como fluxos de dados para que o Moodle ou o Canvas da universidade os processem automaticamente.

-**O sistema será entregue como um PWA (Progressive Web App) hospedado em nuvem com arquitetura Offline-First. Isso garante que o software seja acessível via navegador, instalável como app nativo e funcional sem internet. A integração com sistemas externos será entregue via API REST, permitindo a automação do fluxo de notas entre a plataforma e os LMS das instituições.**

### B: Eliminação da "Barreira de Entrada" (Fricção Tecnológica)

- **Em ambientes acadêmicos ou corporativos, a instalação de softwares esbarra em permissões de administrador e compatibilidade de sistema operacional (Windows, Mac, Linux).**: A Lógica: Ao entregar o app via navegador, o Professor não precisa de um "ticket" para o suporte de TI. Ele abre o Chrome ou Firefox e o sistema está lá.

Conveniência: Isso permite que ele utilize o tempo de aula para avaliar e ensinar, e não para configurar máquinas de alunos ou a sua própria.

- **Onipresença do Banco de Questões (Cloud-Based)**: O maior patrimônio de um professor é o seu banco de questões. No modelo SaaS, esse banco não está em um "pendrive" ou em uma pasta local.

A Lógica: Os dados residem em uma camada de persistência centralizada.

Conveniência: O professor pode iniciar o cadastro de uma questão complexa (com código Docker/JSON) no computador da faculdade e terminar em casa, no tablet ou notebook, sem precisar de cabos ou envios por e-mail. É o conceito de continuidade de fluxo de trabalho.

- **Sincronia de Versão (Single Source of Truth)**: Erros em gabaritos ou enunciados são comuns. No software instalado (Desktop), uma correção exige que todos baixem uma nova versão.

A Lógica: No SaaS, a atualização é no servidor (Back-end).

Conveniência: Se o Professor nota um erro na US14 (formatação de código) durante uma aula, ele corrige no painel administrativo e, no segundo seguinte, todos os alunos que atualizarem a página já visualizam a correção. Isso evita confusão e reclamações em massa.

- **Integração Nativa (Ecossistema Digital)**: Professores hoje utilizam diversas ferramentas (Moodle, Google Classroom, Teams). O SaaS "conversa" melhor com a internet do que um app isolado no computador.

A Lógica: A entrega via navegador facilita o uso de Webhooks e APIs (US12).

Conveniência: É muito mais simples para o Professor configurar uma integração que envia as notas direto para o portal da faculdade se o sistema já está "na rede", eliminando o trabalho manual de exportar planilhas e importar em outro lugar.

### 6 O que o Sistema NÃO faz:
 
- **Não faz Correção de Questões Discursivas (Subjetivas)**: O Limite: O sistema foca exclusivamente em questões de múltipla escolha (objetivas).

Justificativa: A lógica de processamento de linguagem natural (NLP) para avaliar conceitos subjetivos de engenharia exigiria uma complexidade de IA que não faz parte do "coração" desta versão. A correção é binária (Certo/Errado) para garantir precisão imediata.

- **Não é um Ambiente de Execução de Código (Compilador Online)**: O Limite: O sistema exibe e formata o código (Syntax Highlighting - US14), mas não executa o código.

Justificativa: O objetivo é a avaliação teórica e lógica. Transformar o app em uma IDE (como o VS Code) traria riscos de segurança (execução de scripts maliciosos) e custos de infraestrutura que desviariam o foco do simulador de questões.

- **Não faz Gestão Financeira ou Assinaturas (Billing)**: O Limite: O sistema não gerencia pagamentos, planos de assinatura ou faturamento de usuários.

Justificativa: Nesta versão, o foco é pedagógico e funcional. A entrega como SaaS foca no acesso ao conteúdo; a monetização ou controle de licenças deve ser resolvido por ferramentas externas ou camadas de negócio futuras.

- **Não é um Repositório de Arquivos (Storage de Material Didático)**: O Limite: O sistema não permite que o professor faça upload de PDFs de livros, slides de aula ou vídeos pesados.

Justificativa: O app é um gerador de simulados, não um Drive ou um LMS completo (como Google Classroom). Ele guarda textos, códigos e metadados das questões, mantendo a performance e o foco na experiência de teste.

- **Não faz Monitoramento de Fraude por Câmera (Proctoring)**: O Limite: O sistema não utiliza a webcam do aluno para fiscalizar a realização da prova ou bloquear a troca de abas no navegador.

Justificativa: Por ser um PWA voltado para o estudo (inclusive offline - US15), a lógica de "vigilância" é secundária à lógica de "autodesenvolvimento". O controle de tempo (US02) já é o limitador de pressão definido para esta versão.

- **Para garantir a entrega e a estabilidade da versão 2.0, o sistema delimita seu escopo à avaliação objetiva e análise de desempenho. Estão explicitamente fora desta versão: a execução real de códigos-fonte, a correção de textos dissertativos e o monitoramento biométrico/proctoring de alunos.**