## Bruna Oliveiraa

### 1. Requisitos Funcionais

- **US01**: Autonomia para o professor cadastrar e detalhar questões e explicações diretamente na interface.

- **US02**: Cronômetro configurável para treinar agilidade e controle de tempo sob condições de prova.

- **US03**: Geração automática de PDFs formatados com identidade visual da instituição para uso offline.

- **US04**: Restrição de áreas administrativas apenas para o perfil "Docente", protegendo dados e gabaritos.

- **US05**: Painel visual de estatísticas e taxas de acerto por tópico com alta performance de carregamento.

- **US06**: Exportação de erros para ferramentas de repetição espaçada (Anki) via arquivos .apkg ou .csv.

- **US07**: Canal direto para reportar inconsistências em questões, garantindo a integridade do banco de dados.

- **US08**: Ranking global (Leaderboard) para estimular a competitividade e o engajamento dos alunos.

- **US09**: Recurso de "Favoritos" para salvar questões complexas em uma lista personalizada de revisão.

- **US10**: Classificação de questões por senioridade (Jr/Pl/Sr) para adequar o desafio ao nível do aluno.

- **US11**: Seção de comentários para discussão colaborativa e esclarecimento de dúvidas entre pares.

- **US12**: API REST/Webhooks para exportação automatizada de notas para sistemas externos (LMS).

- **US13**: Botão de compartilhamento de desempenho no LinkedIn para visibilidade profissional e marketing.

- **US14**: Suporte a Markdown e Syntax Highlighting para formatação adequada de blocos de código.

- **US15**: Implementação de PWA para permitir o download de questões e resolução em modo offline.

### 2. Requisistos não Funcionais

- **US01**: Validação de campos obrigatórios e interface intuitiva para inserção de dados complexos (enunciado/explicação).

- **US02**: Persistência do estado do tempo mesmo em caso de refresh da página ou oscilação de conexão.

- **US03**: Geração de arquivos no padrão PDF/A com preservação de elementos visuais (logotipo) e fontes institucionais.

- **US04**: Controle de acesso baseado em perfis (RBAC) com autenticação robusta para proteger gabaritos.

- **US05**: Carregamento de gráficos em < 2 segundos, independente do tamanho do histórico do aluno (uso de cache/indexação).

- **US06**: Compatibilidade de codificação (UTF-8) para arquivos .csv ou .apkg para evitar quebra de caracteres.

- **US07**: Rastreabilidade automática de metadados (ID da questão, versão, contexto do erro) no momento do envio.

- **US08**: Suporte a alta concorrência de escritas e ordenação de ranking em tempo real (baixa latência)

- **US09**: Sincronização em nuvem para que a lista de favoritos seja idêntica em múltiplos dispositivos do usuário.

- **US10**: Filtragem dinâmica (sem recarregamento total) e padronização da taxonomia (Junior/Pleno/Senior).

- **US11**: Sanitização de inputs (prevenção de XSS) e carregamento assíncrono (Lazy Loading) das threads.

- **US12**: Disponibilização de endpoints RESTful documentados (Swagger) e política de Rate Limiting.

- **US13**: Suporte a protocolos Open Graph e tratamento de falhas em APIs de terceiros sem travar a aplicação.

- **US14**: Renderização de código no lado do cliente com suporte a temas de alto contraste (Acessibilidade).

- **US15**: Uso de Service Workers e IndexedDB para funcionamento total sem rede e sincronização posterior.


### 3. Regras de Negócios

- **Curadoria de Conhecimento Estruturado**: O app não é um "bloco de notas", é um banco de dados pedagógico.

O que faz: Permite que um especialista (professor) crie questões que tenham obrigatoriamente um "porquê" (explicação) e uma "régua" (nível de dificuldade).

Essência: Organizar o caos da informação em itens de avaliação claros e explicativos.

- **Simulação de Desempenho Sob Pressão**: O app não é apenas para leitura, é para teste.

O que faz: Coloca o estudante em um cenário de desafio onde ele precisa tomar decisões rápidas dentro de um limite de tempo.

Essência: Treinar a agilidade mental e a retenção de conteúdo através da simulação de exames reais.

- **Ciclo de Feedback e Diagnóstico**: O app atua como um tutor, não apenas como um juiz.

O que faz: Confronta a escolha do aluno com a verdade técnica (gabarito) e, mais importante, explica o erro no exato momento em que ele ocorre. Além disso, mostra onde o aluno está falhando (estatísticas).

Essência: Transformar o erro em aprendizado imediato e mapear lacunas de conhecimento.

### 4 Detalhes (Acessórios): 

- **A**: Os dados serão centralizados em uma nuvem resiliente com espelhamento local para suporte offline, enquanto a interface será uma PWA agnóstica a dispositivos, priorizando a facilidade de inserção para professores e a velocidade de resposta para alunos."

- **B**: Para a engenharia, a interface (PWA, Desktop ou Mobile) e o local de armazenamento (SQL, NoSQL ou Cache Local) são escolhas de implementação secundárias, que devem apenas servir para garantir que essa lógica de fluxo de dados seja resiliente, rápida e acessível em qualquer cenário.

### 5 Análise de Modelo de Entrega (Cloud):

### A 

- **Modelo de Distribuição: Acesso Onipresente (PWA)1**: A decisão técnica de usar PWA (Progressive Web App) atende à lógica de que o estudo não pode ser interrompido por falta de sinal.

- **Como é entregue**: Através de uma URL única, mas com capacidade de instalação (atalho na home do celular).

- **Vantagem Lógica**: Elimina a barreira das lojas de aplicativos (App Store/Play Store) e garante que o Modo Offline (US15) funcione via Service Workers, permitindo que o "coração" do app (o desafio) continue batendo no metrô ou no avião.

- **Arquitetura de Entrega de Conteúdo (Content Delivery)**: Como a lógica do problema exige Syntax Highlighting (US14) e PDFs (US03), a entrega não é apenas texto plano.

- **Como é entregue**: O conteúdo é entregue em blocos de Markdown que são renderizados no dispositivo do usuário.

- **Vantagem Lógica**: Isso mantém o tráfego de dados leve (texto puro via rede) e deixa o processamento visual pesado para o hardware do usuário, garantindo rapidez no carregamento das estatísticas e rankings.


- **Integração com o Ecossistema do Usuário (Interoperabilidade)**: A entrega não termina dentro do app. Ela se expande para onde o aluno já está.

- **Como é entregue**: Através de exportações (Anki/PDF) e integrações (API/LMS).

- **Vantagem Lógica**: Reconhece que o sistema é parte de uma rotina maior. A entrega "2.0" significa que o dado não está preso; ele flui para redes sociais (LinkedIn) e ferramentas de estudo externas, aumentando o valor do diagnóstico gerado.

# B Justificativa: Modelo SaaS focado na Conveniência do Docente: 
A oferta do "Mestre da Engenharia de Software 2.0" como SaaS é a escolha mais estratégica para o perfil do Professor pelos seguintes motivos:

- **Fricção Zero na Adoção (Acesso Imediato)**: O professor não precisa instalar softwares pesados, configurar servidores ou solicitar permissões ao TI da instituição para instalar executáveis. O acesso via navegador garante que ele possa cadastrar questões (US01) de qualquer computador (casa, faculdade ou laboratório) apenas com suas credenciais.

- **Centralização e Sincronização de Ativos:**: Ao criar uma prova ou questão, o dado é salvo instantaneamente na nuvem. Isso elimina o risco de perda de arquivos locais ou versões desatualizadas de provas em pendrives. A lógica de "escrever uma vez, acessar em qualquer lugar" é nativa do SaaS.

- **Simplicidade na Exportação e Integração**: Funcionalidades como a geração de PDFs com logotipo (US03) e a exportação para o Anki (US06) dependem de processamento que, no SaaS, é padronizado. O professor tem a garantia de que o documento gerado no navegador terá a mesma formatação profissional, independentemente do sistema operacional que ele utiliza (Windows, Mac ou Linux).

- **Manutenção Invisível**: Atualizações de segurança, correções de bugs na área de Syntax Highlighting (US14) ou melhorias nos algoritmos de estatísticas são aplicadas de forma transparente. O professor sempre utiliza a versão mais potente da ferramenta sem precisar realizar downloads de "patches" ou atualizações manuais.

### 6 O que o sistema NÃO faz

- **Não fará correção automática de provas discursivas**: O sistema é estritamente baseado em questões de múltipla escolha com gabarito predefinido. A lógica de processamento de linguagem natural (NLP) para avaliar textos abertos está fora do escopo.

- **Não executará código em tempo real (Sandboxing)**: Embora suporte o destaque de sintaxe (US14), o sistema não é um compilador. Ele avalia a lógica teórica do aluno, e não a execução funcional do código postado no enunciado.

- **Não fará o controle de matrículas ou gestão financeira**: O sistema não é um ERP acadêmico. Ele consome dados de usuários, mas não gerencia mensalidades, frequências ou registros burocráticos de instituições.

- **Não possui monitoramento antifraude (Proctoring)**: Não há bloqueio de abas do navegador, acesso à webcam ou detecção de plágio. O foco é o treino de agilidade (US02) e a autoavaliação, não a fiscalização de exames oficiais.

- **Não fará a curadoria automática de conteúdo (IA)**: Toda e qualquer questão deve ser cadastrada ou importada manualmente pelo professor (US01). O sistema não gera enunciados automaticamente a partir de temas ou PDFs.

- **Não é uma ferramenta de comunicação síncrona**: Não haverá chat em tempo real ou videochamadas. A interação entre alunos e professores limita-se aos comentários assíncronos nas questões (US11).


- **Justificativa do Analista**: Ao definir que o sistema não corrige provas discursivas e não executa código, garantimos que o motor de feedback seja extremamente rápido e que o Modo Offline (US15) permaneça funcional, já que essas funcionalidades exigiriam processamento pesado em nuvem e conexão constante.