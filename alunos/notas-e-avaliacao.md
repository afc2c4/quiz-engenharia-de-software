# Notas e Avaliação — Mestre da Engenharia de Software 2.0

> Avaliação proporcional das respostas de cada aluno, com identificação de respostas precisas, insuficientes ou genéricas ("lero lero"), e especificação de erros.

---

## Rubrica de Pontuação (Total: 100 pontos)

A prova tem 6 seções. Os pontos foram distribuídos proporcionalmente ao peso acadêmico de cada seção:

| Seção | Pontos | Critério de distribuição |
|---|---|---|
| **1. Requisitos Funcionais (RF)** | **30 pts** | 15 User Stories × 2 pts cada |
| **2. Requisitos Não Funcionais (RNF)** | **20 pts** | Mapeamento qualitativo 1-a-1 com as US |
| **3. Regras de Negócio** | **20 pts** | Análise do "coração" do sistema a partir do código |
| **4. Detalhes / Acessórios** | **10 pts** | Identificação correta de armazenamento + interface |
| **5. Modelo de Entrega Cloud** | **10 pts** | Escolha correta (SaaS) + justificativa para Professor |
| **6. O que o sistema NÃO faz** | **10 pts** | Limites de escopo sem contradições com os RF listados |
| **TOTAL** | **100 pts** | |

---

### Critérios de Qualidade por Nível

| Nível | Descrição | Fator |
|---|---|---|
| 🟢 **Preciso** | Técnico, específico, alinhado ao gabarito, sem contradições | 100% dos pts da seção |
| 🟡 **Aceitável** | Correto mas breve ou com pequenas imprecisões | 60–80% dos pts |
| 🟠 **Insuficiente** | Muito vago, incompleto, ou sem dados técnicos necessários | 20–40% dos pts |
| 🔴 **Lero lero / Genérico** | Enche linguiça sem responder ao pedido; copia definição sem aplicar | 0–15% dos pts |
| ⚫ **Não entregue / Errado** | Seção em branco, incompreensível, ou factualmente incorreta | 0 pts |

---

## Tabela Geral de Notas

| Aluno | RF /30 | RNF /20 | Regras /20 | Detalhes /10 | Cloud /10 | NÃO faz /10 | **TOTAL /100** |
|---|---|---|---|---|---|---|---|
| alexandre-ferreira *(gabarito)* | 30 | 20 | 20 | 10 | 10 | 10 | **100** |
| **José-Reginaldo** | 28 | 20 | 17 | 8 | 10 | 9 | **92** |
| **nicolas-vinicius** | 28 | 16 | 14 | 9 | 10 | 10 | **87** |
| **theo22** | 29 | 15 | 4 | 7 | 10 | 10 | **75** |
| **Gabriel-Ernandes** | 25 | 8 | 8 | 6 | 7 | 8 | **62** |
| **adriano-dmarco.md** | 24 | 10 | 3 | 2 | 3 | 1 | **43** |
| **rafael-braga** | 20 | 7 | 3 | 4 | 3 | 0 | **37** |
| **franky-jr** | 0 | 5 | 0 | 5 | 7 | 1 | **18** |
| **josuel-pereira** | 4 | 3 | 0 | 0 | 0 | 0 | **7** |
| **Bruna-Oliveira** | 5 | 0 | 0 | 0 | 0 | 0 | **5** |
| **esdras-fernando** | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| **marcus-vinicius** | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

---

## Avaliação Detalhada por Aluno

---

### 🟢 José-Reginaldo — **92/100**

#### Seção 1 — RF: 28/30 🟢 Preciso

Todos os 15 RF foram mapeados 1-a-1 com as User Stories, com linguagem técnica precisa.

| RF | Avaliação | Nota |
|---|---|---|
| US01 — Cadastro de questões | Preciso: "enunciado, quatro alternativas, indicação da resposta correta e uma justificativa técnica (explicação)" | 2/2 |
| US02 — Cronômetro | Preciso: "selecione um tempo limite (15, 30 ou 60 min) antes de iniciar o quiz e exibir a contagem regressiva durante a prova" | 2/2 |
| US03 — PDF | Preciso: "incluindo automaticamente o logotipo e o cabeçalho da instituição do professor" | 2/2 |
| US04 — Autenticação | Preciso: "restringir o acesso às ferramentas de criação e gabaritos apenas para usuários autenticados com o perfil 'Docente'" | 2/2 |
| US05 — Estatísticas | Preciso: "taxa de acerto por tópico (ex: Git, Nuvem) e o tempo médio de resposta do aluno" | 2/2 |
| US06 — Export erros | Preciso: "baixe as questões que errou nos formatos .csv ou .apkg" | 2/2 |
| US07 — Reportar erro | Preciso: "botão 'Reportar Erro' em cada questão para que o aluno envie contestações sobre o gabarito aos administradores" | 2/2 |
| US08 — Ranking | Preciso: "ranking semanal e mensal com os alunos de melhor pontuação por categoria" | 2/2 |
| US09 — Favoritar | Preciso: "aluno 'marque' questões específicas para compor uma lista de revisão personalizada no seu perfil" | 2/2 |
| US10 — Filtro dificuldade | Preciso: "classificação de questões por nível (Júnior, Pleno, Sênior) e oferecer um filtro para o aluno" | 2/2 |
| US11 — Comentários | Preciso: "alunos postem dúvidas e explicações em uma thread de comentários vinculada a cada questão" | 2/2 |
| US12 — API LMS | Preciso: "fornecer endpoints REST e Webhooks para que notas e resultados sejam exportados automaticamente para sistemas externos como o Moodle" | 2/2 |
| US13 — LinkedIn | Preciso: "gerar um card de conquista para compartilhamento no LinkedIn quando o aluno atingir uma nota superior a 80%" | 2/2 |
| US14 — Markdown | Aceitável: "suportar Markdown na edição das questões e colorir automaticamente a sintaxe de códigos (JSON, Dockerfile, etc.)" — preciso | 2/2 |
| US15 — Offline | Aceitável: "download de pacotes de questões para que o aluno realize os testes sem conexão à internet" | 1/2 |

**Desconto (-2 pts):** US15 não menciona o uso de PWA (Progressive Web App), que é o mecanismo técnico especificado no gabarito.

#### Seção 2 — RNF: 20/20 🟢 Preciso (excede gabarito)

15 RNF técnicos mapeados 1-a-1. Inclui termos avançados como **RBAC, PDF/A, Service Workers, Rate Limiting, Lazy Loading, Open Graph Meta Tags, XSS sanitization**. Supera o gabarito em profundidade técnica.

#### Seção 3 — Regras de Negócio: 17/20 🟢 Preciso

Identificou 3 pilares: *Gestão do Conhecimento, Ciclo de Avaliação e Inteligência de Desempenho*. Análise coerente. Não chegou a analisar o código-fonte para identificar regras específicas como "exatamente 10 questões no Gerador de Provas" ou o algoritmo de embaralhamento dinâmico de alternativas.

**Desconto (-3 pts):** Faltou analisar o código-fonte para extrair as regras de negócio internas (shuffling, regra das 10 questões).

#### Seção 4 — Detalhes/Acessórios: 8/10 🟢 Preciso

Abordou armazenamento cloud + local (Offline-First), interface híbrida. Correto e bem justificado.

**Desconto (-2 pts):** Resposta B (armazenamento como secundário) um pouco repetitiva.

#### Seção 5 — Modelo Cloud: 10/10 🟢 Preciso (excede gabarito)

Escolha SaaS + PWA com estratégia CI/CD, CDN, Offline-First e portal de API documentado. A justificativa mais completa de todos os alunos.

#### Seção 6 — O que NÃO faz: 9/10 🟢 Preciso

3 limites bem definidos (sem discursivas, sem compilador online, sem gestão financeira). Sem contradições.

**Desconto (-1 pt):** Gabarito lista 6 limites; poderiam ser adicionados mais (sem OCR, sem importação de LMS, sem upload de vídeo/áudio).

---

### 🟢 nicolas-vinicius — **87/100**

#### Seção 1 — RF: 28/30 🟢 Preciso

| RF | Avaliação | Nota |
|---|---|---|
| US01 a US08 | Precisos, com detalhes corretos | 2/2 cada |
| US09 — Favoritar | Breve: "marcar questões para revisão futura" — falta mencionar "lista no perfil" | 1,5/2 |
| US10 — Filtro dificuldade | Preciso: "Junior, Pleno, Senior" ✓ | 2/2 |
| US11 — Comentários | Breve: "discutem e comentam" — falta mencionar "thread por questão" | 1,5/2 |
| US12 — API LMS | Preciso: "exportar notas via API para sistemas como Moodle" ✓ | 2/2 |
| US13 — LinkedIn | Aceitável: não menciona explicitamente o limiar de 80% | 1,5/2 |
| US14, US15 | Precisos | 2/2 cada |

**Desconto (-2 pts):** US09, US11 e US13 com pequenas lacunas (totalizando -2 pts por arredondamento).

#### Seção 2 — RNF: 16/20 🟡 Aceitável

15 RNF mapeados. Qualidade boa na maioria. Pontos de desconto:
- **US04 RNF**: "Somente usuários autenticados" — isso é um requisito funcional, não não-funcional (deveria ser sobre *como* garantir o controle, ex: RBAC, JWT).
- **US09 RNF**: "Questões salvas devem permanecer corretamente" — muito vago (falta mencionar persistência cross-device ou backend).

**Desconto (-4 pts):** 2 RNF classificados incorretamente (US04) ou insuficientemente detalhados (US09, US11).

#### Seção 3 — Regras de Negócio: 14/20 🟡 Aceitável

4 pilares bem organizados. Bom, mas análise superficial em comparação ao gabarito. Não extraiu regras específicas do código-fonte (embaralhamento, regra das 10 questões, cálculo de nível de desempenho).

**Desconto (-6 pts):** Identificação dos pilares correta, mas sem profundidade de análise de código.

#### Seção 4 — Detalhes/Acessórios: 9/10 🟢 Preciso

Detalhou armazenamento (servidor + local + arquivos exportados), descreveu componentes da interface com exemplos concretos (cronômetro, filtros, syntax highlighting). Excelente.

**Desconto (-1 pt):** Resposta B praticamente repete a resposta A.

#### Seção 5 — Modelo Cloud: 10/10 🟢 Preciso

SaaS com 5 justificativas para professor. Menciona PWA. Excelente.

#### Seção 6 — O que NÃO faz: 10/10 🟢 Preciso

6 limites corretos, específicos e sem contradições. O melhor desta seção junto com o gabarito.

---

### 🟢 theo22 — **75/100**

#### Seção 1 — RF: 29/30 🟢 Preciso

15 RF mapeados com boa precisão. Quase todos corretos.

| RF | Avaliação | Nota |
|---|---|---|
| US01–US04 | Precisos ✓ | 2/2 cada |
| US05 | Breve: "Dashboard semanal de desempenho (taxa de acerto e tempo médio)" — falta "histórico de pontuações" | 1,5/2 |
| US06–US15 (exceto US09) | Precisos ✓ | 2/2 cada |
| US09 — Favoritar | Breve: "Favoritar/Estrear questões" — sem detalhar lista de revisão | 1,5/2 |

**Desconto (-1 pt):** US05 e US09 com breve omissão.

#### Seção 2 — RNF: 15/20 🟡 Aceitável

15 RNF presentes. Pontos positivos: RNF05 tem SLA específico ("< 2 segundos") e RNF11 menciona moderação anti-spam. Pontos negativos:
- **RNF15** é duplicata literal do RF15 — não acrescenta nada como restrição de qualidade.
- **RNF10**: "Organização lógica e consistente dos metadados" — genérico, não especifica o que é necessário.

**Desconto (-5 pts):** RNF15 duplicado; RNF10 e RNF13 insuficientemente específicos.

#### Seção 3 — Regras de Negócio: 4/20 🔴 Insuficiente

Apenas uma frase: *"Gestão de Banco de Questões: Criação, armazenamento e categorização de perguntas, alternativas e gabaritos."* Isso não descreve o "coração" do sistema. Faltou identificar:
- Motor de resolução de quizzes (embaralhamento dinâmico, correção em tempo real, cálculo de desempenho)
- Gerador de provas (regra das 10 questões, embaralhamento de alternativas)
- Estrutura de domínio (entidade questão com id, tópico, pergunta, alternativas, resposta correta, explicação)

**⚠️ ERRO:** A resposta está criticamente incompleta para esta seção.

#### Seção 4 — Detalhes/Acessórios: 7/10 🟡 Aceitável

Menciona SQL + SPA + PWA — correto e técnico. Poderia detalhar mais a separação lógica entre o que é secundário vs. o que é essencial.

**Desconto (-3 pts):** Resposta A aponta tecnologias mas não discute a implicação da escolha; resposta B ("SaaS") está mal colocada nesta seção.

#### Seção 5 — Modelo Cloud: 10/10 🟢 Preciso

SaaS+PWA com 4 argumentos técnicos voltados ao professor. Destaque para argumento de "escalabilidade em picos de exames". Excelente.

#### Seção 6 — O que NÃO faz: 10/10 🟢 Preciso

4 limites bem definidos (sem discursivas, sem proctoring, sem geração por IA, sem billing). Precisos e sem contradições.

---

### 🟡 Gabriel-Ernandes — **62/100**

#### Seção 1 — RF: 25/30 🟡 Aceitável

17 RF listados. Cobertura das 15 US do gabarito: **sim, todas presentes** (porém em ordem diferente e com algumas imprecisões).

| RF do Aluno | Mapeia para | Avaliação | Nota |
|---|---|---|---|
| RF01 — Cadastro questões | US01 | Preciso: inclui enunciado, alternativas, resposta correta, explicação | 2/2 |
| RF02 — Realização de quizzes | (implícita) | Adicional correto — não é do escopo dos RF pedidos | 0/2¹ |
| RF03 — Cronômetro | US02 | Correto, mas não menciona os tempos (15/30/60 min) | 1/2 |
| RF04 — Geração de provas | (implícita) | Adicional; correto mas não vinculado às US | 0/2¹ |
| RF05 — Exportação PDF | US03 | **Impreciso**: não menciona "logotipo/cabeçalho institucional" | 1/2 |
| RF06 — Restrição acesso | US04 | Correto mas vago ("autorização adequada" sem especificar "Docente") | 1/2 |
| RF07 — Estatísticas | US05 | Preciso: pontuação, acertos por tema, tempo médio | 2/2 |
| RF08 — Export erros | US06 | **Impreciso**: menciona "formatos externos" sem especificar .apkg ou .csv | 1/2 |
| RF09 — Reportar erros | US07 | Preciso | 2/2 |
| RF10 — Ranking | US08 | Preciso | 2/2 |
| RF11 — Favoritar | US09 | Preciso | 2/2 |
| RF12 — Filtro dificuldade | US10 | **Impreciso**: usa "iniciante, intermediário e avançado" em vez de "Junior, Pleno, Senior" | 1/2 |
| RF13 — Comentários | US11 | Preciso | 2/2 |
| RF14 — API LMS | US12 | **Impreciso**: "sistemas externos como plataformas educacionais" — não menciona LMS/Moodle explicitamente | 1/2 |
| RF15 — Compartilhar | US13 | Correto mas não menciona o limiar de >80% | 1/2 |
| RF16 — Markdown | US14 | Preciso | 2/2 |
| RF17 — Offline | US15 | Preciso | 2/2 |

*¹ RF02 e RF04 são funcionalidades implícitas do sistema, corretas, mas não correspondem a nenhuma das 15 US pedidas; não pontuam.*

**Total RF: 25/30**

#### Seção 2 — RNF: 8/20 🔴 Genérico/Lero Lero

Apenas 6 RNF listados contra 7 do gabarito. Os RNF são genéricos e desconectados das User Stories:
- "Carregamento rápido" → genérico para qualquer sistema web
- "Interface intuitiva" → genérico para qualquer sistema
- "Compatibilidade com dispositivos" → não derivado das US

Nenhum RNF mencionou: formatação específica do PDF, compatibilidade com Anki, Markdown/Syntax Highlighting, botão no QuizCard para reportar erro, ou interoperabilidade via API REST.

**⚠️ ERRO de omissão:** Faltou mapear RNF específicos às User Stories do projeto.

#### Seção 3 — Regras de Negócio: 8/20 🟠 Insuficiente

5 bullets genéricos. Identifica papéis (professor, aluno) mas não analisa a lógica interna do sistema. Faltou identificar o motor de quiz (embaralhamento, feedback em tempo real, cálculo de desempenho) e o gerador de provas (regra das 10 questões).

**⚠️ ERRO:** "O ranking é gerado com base no desempenho dos alunos" é uma Regra de Negócio válida, mas as demais são apenas descrição de papéis, não do funcionamento core.

#### Seção 4 — Detalhes/Acessórios: 6/10 🟡 Aceitável

Menciona banco de dados, acesso via navegador, responsividade, exportação PDF/CSV. Correto mas superficial.

**Desconto (-4 pts):** Não discutiu a diferença entre "estado temporário em memória" (atual) vs. "persistência em banco de dados" (futuro).

#### Seção 5 — Modelo Cloud: 7/10 🟡 Aceitável

SaaS com justificativa presente mas superficial: "facilita o uso por professores, já que não exige instalação nem conhecimento técnico".

**Desconto (-3 pts):** Justificativa genérica, sem vincular ao código-fonte ou à conveniência específica do perfil professor na plataforma.

#### Seção 6 — O que NÃO faz: 8/10 🟢 Aceitável

3 limites corretos e sem contradições. Bom.

**Desconto (-2 pts):** Apenas 3 dos 6 limites do gabarito foram identificados.

---

### 🟠 adriano-dmarco.md — **43/100**

#### Seção 1 — RF: 24/30 🟡 Aceitável

RF01–RF15 presentes. A maioria está correta, porém com linguagem voltada à ação do usuário ("o sistema precisa que...") em vez de especificação técnica. Qualidade média.

**Imprecisões identificadas:**
- RF10 (US10): descreve "dificuldade" sem especificar os níveis (Junior, Pleno, Senior) — 1/2 pt.
- RF13 (US13): descreve "compartilhar o perfil para que outros usuários possam ver em um feed" — **ERRO**: o gabarito especifica compartilhamento do *resultado* no LinkedIn quando >80%, não de perfil em feed genérico.
- RF14 (US14): posicionado como RF14, mas corresponde à US14 (Markdown) — numeração fora de ordem, conteúdo correto.

**Desconto (-6 pts):** Qualidade média geral; RF13 com descrição imprecisa; RF10 sem níveis específicos.

#### Seção 2 — RNF: 10/20 🟠 Insuficiente

15 RNF listados (RNF01–RNF15), porém a maioria é uma simples reformulação dos RF com "deve ser rápido" ou "não pode travar". Exemplos de RNF redundantes:
- RNF02: "O Cronômetro do sistema deve ser cronometrado com o mínimo de delay e não pode travar" — é apenas o RF02 com adjetivo de qualidade, sem especificar requisito não-funcional mensurável.
- RNF03: "a prova tem que instantâneamente estar em arquivo PDF" — apenas o RF03 com "instantâneo".

Poucos RNF adicionam restrições de qualidade genuínas.

#### Seção 3 — Regras de Negócio: 3/20 🔴 Lero Lero

Resposta: *"O app foi feito para gerar questionários que são criados por alguém para que outros, que vão usar desses questionários, possam revisar os assuntos passados. Gerar perguntas criadas a serem respondidas."*

Isso é uma descrição em uma única frase que descreve qualquer app de questionários, sem identificar nenhuma regra específica. Não analisa o código, não descreve o motor de quiz, o gerador de provas, nem as regras de embaralhamento ou cálculo de desempenho.

**⚠️ LERO LERO:** A resposta não agrega nenhum conteúdo técnico relevante para esta seção.

#### Seção 4 — Detalhes/Acessórios: 2/10 🔴 Lero Lero

Resposta: *"A interface deve ser gerada de uma forma onde qualquer um que for ver, consiga saber onde ir e o que está fazendo. A interface tem que ser, essencialmente, interativa... Os dados serão guardados no banco de dados do app."*

Pura generalidade. "Guardar no banco de dados do app" não especifica nenhum detalhe técnico. "Interface interativa" é tautológico.

**⚠️ LERO LERO:** Nenhum dado concreto sobre como ou onde os dados seriam guardados; nenhuma descrição da interface com componentes reais.

#### Seção 5 — Modelo Cloud: 3/10 🔴 Insuficiente/Errado

Respondeu **"SaaS ou IaaS"** sem conclusão definitiva. A resposta é ambígua e não escolhe o modelo correto de forma assertiva.

**⚠️ ERRO DE JULGAMENTO:** O gabarito especifica SaaS como única resposta correta, justificada pela arquitetura SPA/React/Vite do projeto. Oferecer IaaS como alternativa válida demonstra que o aluno não analisou o código-fonte.

#### Seção 6 — O que NÃO faz: 1/10 🔴 Errado

**⚠️ ERRO GRAVE:** A resposta afirma que o sistema "não tem temporizador/cronômetro" como um dos limites de escopo. Isso **contradiz diretamente o RF02/RF03** (cronômetro regressivo configurável) que o próprio aluno listou como requisito funcional. Contradição interna severa.

---

### 🟠 rafael-braga — **37/100**

#### Seção 1 — RF: 20/30 🟡 Aceitável (com erros)

14 RF presentes (US14 completamente ausente).

**Imprecisões e erros identificados:**

| RF | Problema | Impacto |
|---|---|---|
| US01 | "cadastrar atividades" — deveria ser "questões com enunciado, alternativas, resposta correta e explicação" | Superficial: -1,5pt |
| US04 | "comparar os dados e verificar se é PROFESSOR ou ALUNO" — descreve implementação, não o RF | Impreciso: -1pt |
| US10 | Usa "Fácil, Médio, Difícil" em vez de "Junior, Pleno, Sênior" | Erro nos valores: -1pt |
| US14 | **Completamente ausente** | -2pt |
| US02, US09, US11, US15 | Breves demais | -0,5pt cada |

#### Seção 2 — RNF: 7/20 🟠 Insuficiente

9 RNF cobrindo apenas US02–US07, US12, US14, US15. Faltam RNF para US01, US08, US09, US10, US11, US13.

**⚠️ ERRO DE DIGITAÇÃO:** "RNF013" — provavelmente deveria ser RNF03 (digitação incorreta do número).

Os RNF presentes são muito breves:
- "RNF01: Flexibilidade de configuração do tempo" — não especifica nenhuma restrição de qualidade mensurável.
- "RNF06: Facilidade de reportar diretamente no sistema" — isso é um requisito funcional (usabilidade), não um RNF técnico.

#### Seção 3 — Regras de Negócio: 3/20 🔴 Lero Lero / Errado

6 itens listados:
1. Cadastrar usuários
2. Logar os usuários
3. Autenticar perfis
4. Permitir criar/editar/apagar questões (Professor)
5. Permitir resolver as questões (Aluno)
6. Deslogar usuários

**⚠️ ERRO CONCEITUAL:** Itens como "logar usuários" e "deslogar usuários" são **funcionalidades técnicas de autenticação**, não Regras de Negócio. Regras de Negócio descrevem o funcionamento lógico independente de tecnologia. O "coração" do app (quiz engine, embaralhamento, cálculo de desempenho, gerador de provas com 10 questões) não foi identificado.

#### Seção 4 — Detalhes/Acessórios: 4/10 🟠 Insuficiente

Descreve login e banco de dados. Correto no básico, mas sem profundidade. Não discute estado temporário vs. persistência ou a natureza SPA do frontend.

#### Seção 5 — Modelo Cloud: 3/10 🔴 Insuficiente

**⚠️ RESPOSTA INCOMPLETA:** "através de um host, a qual ainda será designado" — o aluno não definiu o host e a justificativa é mínima. SaaS mencionado mas sem argumento para o professor.

#### Seção 6 — O que NÃO faz: 0/10 ⚫ Errado (3 erros graves)

**⚠️ ERRO 1 — Contradição com funcionalidade core:**
*"O sistema não corrige as provas de forma automática. O usuário PROFESSOR terá que o fazer de forma manual."*
**Isso está errado.** A correção automática de quizzes (com feedback em tempo real) É a funcionalidade principal do sistema. Negar isso é negar o núcleo do app.

**⚠️ ERRO 2 — Contradição com RF08:**
*"O sistema não ranqueará os perfis dos alunos."*
**Contradição direta com RF08 (Leaderboard)** que o próprio aluno listou como requisito.

**⚠️ ERRO 3 — Não é limite de escopo:**
*"Os dados sensíveis não será revelados para nenhum outro usuário."*
Isso é um requisito não-funcional de segurança (RNF), não um limite de escopo. A seção pede o que o sistema **não faz**, não o que ele faz de forma segura.

---

### 🔴 franky-jr — **18/100**

#### Seção 1 — RF: 0/30 ⚫ Errado (fora do escopo do projeto)

Os 14 RF listados **não se referem ao projeto**. São requisitos genéricos de qualquer sistema CRUD:
- RF01–RF05: cadastro, login, recuperação de senha, edição de cadastro, exclusão de conta
- RF06–RF09: CRUD de dados genéricos
- RF10–RF14: busca, relatórios, níveis de acesso, logs, notificações

**⚠️ ERRO FUNDAMENTAL:** Nenhum dos 14 RF reflete as 15 User Stories do "Mestre da Engenharia de Software 2.0". Não há menção a Cronômetro, PDF com logotipo, Leaderboard, Favoritos, Markdown, Modo Offline, Reportar Erro, Exportar para Anki/CSV, ou API LMS.

O aluno aparentemente escreveu requisitos para um sistema genérico sem analisar as User Stories fornecidas.

#### Seção 2 — RNF: 5/20 🟠 Genérico (mas demonstra conhecimento)

13 RNF com boas práticas de qualidade de software (HTTPS, LGPD, tempo de resposta, backup, portabilidade). Demonstra conhecimento de RNF. Porém são completamente genéricos e não se referem ao projeto.

**Nota parcial:** O aluno demonstra conhecimento do conceito de RNF, porém aplicado ao sistema errado.

#### Seção 3 — Regras de Negócio: 0/20 🔴 Lero Lero

A resposta é: *"As Regras de Negócio representam o 'coração' do aplicativo, ou seja, descrevem o que o sistema faz de fato e quais regras ele segue para funcionar corretamente, sem depender de linguagem de programação, banco de dados ou qualquer tecnologia específica."*

**⚠️ LERO LERO:** O aluno copiou/parafraseou a **definição do conceito de Regras de Negócio** sem listar nenhuma regra real do sistema. Não há nenhuma regra de negócio aplicada ao projeto.

#### Seção 4 — Detalhes/Acessórios: 5/10 🟡 Aceitável

Menciona banco de dados (local ou em nuvem), interface via navegador ou mobile, telas simples. Correto no básico.

#### Seção 5 — Modelo Cloud: 7/10 🟡 Aceitável

SaaS com 4 argumentos (sem instalação, acesso remoto, atualizações automáticas, menor custo). Boa justificativa, porém desconectada do projeto.

#### Seção 6 — O que NÃO faz: 1/10 ⚫ Com erros graves

**⚠️ ERRO 1 — Contradição com RF/US15:**
*"NS02: O sistema não funcionará sem conexão com a internet (modo offline não disponível)."*
**Contradição direta com US15** (Modo Offline / PWA) que **deveria** estar no RF (mas não foi listado por este aluno).

**⚠️ ERRO 2 — Contradição com RF/US12:**
*"NS03: O sistema não fará integração com plataformas externas."*
**Contradição direta com US12** (API LMS/Moodle) que também deveria estar nos RF.

Esses erros mostram que o aluno definiu limites de escopo que eliminam funcionalidades que a própria especificação do projeto exige.

---

### 🔴 josuel-pereira — **7/100**

#### Seção 1 — RF: 4/30 🔴 Incompleto

- US01: RF correto e completo (2/2)
- US02: RF correto (2/2)  
- US03: Apenas o título foi listado, sem desenvolvimento (0/2)
- US04–US15: **Não entregues** (0 pts)

#### Seção 2 — RNF: 3/20 🔴 Incompleto

- US01 RNF: adequado mas genérico (1,5/2)
- US02 RNF: correto (1,5/2)
- US03–US15: **Não entregues** (0 pts)

#### Seções 3–6: 0/50 ⚫ Não entregue

---

### 🔴 Bruna-Oliveira — **5/100**

#### Seção 1 — RF: 5/30 🔴 Incompleto

Apenas US01–US05 entregues, sem descrição técnica (apenas títulos/frases curtas). Cada item recebe 1/2 pt por estar identificado corretamente mas sem detalhamento.

| RF | Avaliação |
|---|---|
| US01 — Cadastro questões | Breve: "Autonomia para o professor cadastrar e detalhar questões" — sem especificar campos obrigatórios | 1/2 |
| US02 — Cronômetro | Breve: "Cronômetro configurável para treinar agilidade" — sem mencionar tempos específicos | 1/2 |
| US03 — PDF | Breve: "Geração automática de PDFs formatados com identidade visual" — sem especificar logotipo/cabeçalho | 1/2 |
| US04 — Autenticação | Breve: "Restrição de áreas administrativas apenas para perfil 'Docente'" — correto | 1/2 |
| US05 — Estatísticas | Breve: "Painel visual de estatísticas e taxas de acerto por tópico com alta performance" — correto | 1/2 |
| US06–US15 | **Não entregues** | 0 |

#### Seções 2–6: 0/70 ⚫ Não entregue

---

### ⚫ esdras-fernando — **0/100**

O arquivo `alunos/esdras-fernando.md` contém apenas a palavra `"esdras"`. **Nenhuma seção foi entregue.**

---

### ⚫ marcus-vinicius — **0/100**

O arquivo `alunos/marcus-vinicius.md` contém apenas a palavra `"marcusvinicius"`. **Nenhuma seção foi entregue.**

---

## Resumo de Erros por Aluno

| Aluno | Erro | Seção | Gravidade |
|---|---|---|---|
| **adriano-dmarco.md** | RF13 descreve "compartilhar perfil em feed" em vez de "compartilhar resultado no LinkedIn (>80%)" | RF | 🟡 Médio |
| **adriano-dmarco.md** | Resposta Cloud é "SaaS ou IaaS" sem conclusão definitiva | Cloud | 🟡 Médio |
| **adriano-dmarco.md** | "O que NÃO faz" afirma que sistema não tem cronômetro — contradiz RF02/RF03 próprios | NÃO faz | 🔴 Grave |
| **adriano-dmarco.md** | Regras de Negócio e Detalhes são lero lero (generalizações sem conteúdo técnico) | RNs / Det. | 🔴 Grave |
| **rafael-braga** | US01 listado como "cadastrar atividades" sem mencionar questões/enunciado/alternativas | RF | 🟡 Médio |
| **rafael-braga** | US10 usa "Fácil/Médio/Difícil" em vez de "Junior/Pleno/Sênior" | RF | 🟡 Médio |
| **rafael-braga** | US14 (Markdown) completamente omitida | RF | 🔴 Grave |
| **rafael-braga** | Digitação incorreta "RNF013" | RNF | 🟢 Leve |
| **rafael-braga** | Regras de Negócio confundidas com fluxo de autenticação (login/logoff) | RNs | 🔴 Grave |
| **rafael-braga** | Cloud: host "ainda será designado" — resposta incompleta | Cloud | 🟡 Médio |
| **rafael-braga** | "Não corrige provas automaticamente" — contradiz o motor de quiz (funcionalidade core) | NÃO faz | 🔴 Grave |
| **rafael-braga** | "Não ranqueará perfis" — contradiz RF08 (Leaderboard) | NÃO faz | 🔴 Grave |
| **rafael-braga** | "Dados sensíveis não revelados" — é um RNF de segurança, não um limite de escopo | NÃO faz | 🟡 Médio |
| **franky-jr** | RF01–RF14 são de um sistema CRUD genérico, sem relação com as 15 US do projeto | RF | 🔴 Grave |
| **franky-jr** | Regras de Negócio: copiou a definição do conceito sem listar nenhuma regra | RNs | 🔴 Grave |
| **franky-jr** | "Não funcionará offline" — contradiz US15 (Modo Offline/PWA) | NÃO faz | 🔴 Grave |
| **franky-jr** | "Não fará integração com plataformas externas" — contradiz US12 (API LMS) | NÃO faz | 🔴 Grave |
| **Gabriel-Ernandes** | RF05 não menciona logotipo/cabeçalho institucional no PDF | RF | 🟡 Médio |
| **Gabriel-Ernandes** | RF06 usa "autorização adequada" sem especificar perfil "Docente" | RF | 🟡 Médio |
| **Gabriel-Ernandes** | RF08 não especifica formatos .apkg ou .csv | RF | 🟡 Médio |
| **Gabriel-Ernandes** | RF12 usa "iniciante, intermediário e avançado" em vez de "Junior, Pleno, Sênior" | RF | 🟡 Médio |
| **Gabriel-Ernandes** | RNF genéricos não mapeados às User Stories do projeto | RNF | 🟠 Significativo |
| **nicolas-vinicius** | RNF04 classifica restrição de acesso como RNF em vez de RF/política | RNF | 🟢 Leve |
| **theo22** | Regras de Negócio com apenas 1 frase — seção criticamente incompleta | RNs | 🔴 Grave |
| **theo22** | RNF15 é duplicata exata do RF15 | RNF | 🟡 Médio |
| **josuel-pereira** | Apenas US01–US02 completas; restante não entregue | Todas | 🔴 Grave |
| **Bruna-Oliveira** | Apenas US01–US05 parcialmente listadas; restante não entregue | Todas | 🔴 Grave |
| **esdras-fernando** | Arquivo contém apenas "esdras" | Todas | ⚫ Crítico |
| **marcus-vinicius** | Arquivo contém apenas "marcusvinicius" | Todas | ⚫ Crítico |

---

## Ranking Final

| Posição | Aluno | Nota | Conceito |
|---|---|---|---|
| 🥇 1º | **José-Reginaldo** | **92/100** | Excelente |
| 🥈 2º | **nicolas-vinicius** | **87/100** | Ótimo |
| 🥉 3º | **theo22** | **75/100** | Bom |
| 4º | **Gabriel-Ernandes** | **62/100** | Regular |
| 5º | **adriano-dmarco.md** | **43/100** | Insuficiente |
| 6º | **rafael-braga** | **37/100** | Insuficiente |
| 7º | **franky-jr** | **18/100** | Reprovado |
| 8º | **josuel-pereira** | **7/100** | Reprovado |
| 9º | **Bruna-Oliveira** | **5/100** | Reprovado |
| 10º | **esdras-fernando** | **0/100** | Não entregue |
| 10º | **marcus-vinicius** | **0/100** | Não entregue |
