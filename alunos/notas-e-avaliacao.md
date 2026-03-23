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
| **Bruna-Oliveira** | 27 | 19 | 13 | 5 | 10 | 10 | **84** |
| **nycollas-rodrigues** | 30 | 13 | 9 | 8 | 9 | 10 | **79** |
| **marcus-vinicius** | 29 | 14 | 11 | 5 | 9 | 9 | **77** |
| **theo22** | 29 | 15 | 4 | 7 | 10 | 10 | **75** |
| **Gabriel-Ernandes** | 25 | 8 | 8 | 6 | 7 | 8 | **62** |
| **josuel-pereira** | 29 | 14 | 12 | 5 | 9 | 8 | **77** |
| **adriano-dmarco.md** | 26 | 10 | 3 | 2 | 3 | 2 | **46** |
| **rafael-braga** | 22 | 12 | 7 | 5 | 5 | 4 | **55** |
| **franky-jr** | 29 | 8 | 10 | 5 | 8 | 4 | **64** |
| **esdras-fernando** | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| **iago-marinho** | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

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

### 🟢 nycollas-rodrigues — **79/100**

**Arquivo**: `alunos/nyckzx.md`  
**Branch**: `nycollas-rodrigues`

#### Seção 1 — RF: 30/30 🟢 Preciso (melhor nota desta seção)

Todos os 15 RF mapeados 1-a-1 com as User Stories, com linguagem técnica precisa e detalhes corretos.

| RF | Avaliação | Nota |
|---|---|---|
| US01 — Cadastro de questões | Preciso: "enunciado, alternativas, resposta correta e explicação" | 2/2 |
| US02 — Cronômetro | Preciso: "cronômetro regressivo configurável antes de iniciar um quiz" | 2/2 |
| US03 — PDF | Preciso: "PDF com formatação e cabeçalho institucional" | 2/2 |
| US04 — Autenticação | Preciso: "autenticar usuários e restringir o acesso à área de professor ao perfil 'Docente'" | 2/2 |
| US05 — Estatísticas | Preciso: detalha os 3 indicadores — "Histórico de pontuação, Taxa de acerto por tópico, Tempo médio por questão" | 2/2 |
| US06 — Export erros | Preciso: "exportar questões erradas em formato CSV e/ou APKG (Anki)" | 2/2 |
| US07 — Reportar erro | Preciso: "reportar erros em questões por meio de um botão no quiz" | 2/2 |
| US08 — Ranking | Preciso: "leaderboard global, semanal e mensal" | 2/2 |
| US09 — Favoritar | Preciso: "favoritar/salvar questões para revisão posterior" | 2/2 |
| US10 — Filtro dificuldade | Preciso: usa os níveis corretos **"Junior, Pleno, Senior"** ✅ | 2/2 |
| US11 — Comentários | Preciso: "comentários/discussões em cada questão (thread)" | 2/2 |
| US12 — API LMS | Preciso: "API REST ou webhook para exportação de resultados para sistemas externos (LMS)" | 2/2 |
| US13 — LinkedIn | Preciso: "compartilhar resultados em redes sociais quando o desempenho for **≥ 80%**" ✅ | 2/2 |
| US14 — Markdown | Preciso: "suporte a Markdown e syntax highlighting" | 2/2 |
| US15 — Offline | Preciso: "uso offline com download de quizzes para realização sem internet **(PWA)**" ✅ | 2/2 |

Nota: único aluno (além do gabarito) a obter 30/30 nos RF — acertou os detalhes técnicos mais exigentes: níveis corretos de dificuldade, limiar ≥80% no LinkedIn e menção ao PWA no modo offline.

#### Seção 2 — RNF: 13/20 🟡 Aceitável

11 RNF listados com categorias bem nomeadas (Desempenho, Segurança, Usabilidade, Escalabilidade, etc.). Cobertura do gabarito:

| RNF do Gabarito | Coberto por Nycollas | Avaliação |
|---|---|---|
| RNF01 — Carregamento instantâneo do painel | RNF01 (Desempenho, US05) | ✅ Coberto, mas sem métrica mensurável |
| RNF02 — Segurança / acesso "Docente" | RNF02 (Segurança, US04) | ✅ Coberto (menciona RBAC implicitamente) |
| RNF03 — Portabilidade / Offline (PWA) | RNF06 (Portabilidade, US15) | ✅ Preciso |
| RNF04 — Formatação específica PDF (logo + cabeçalho) | RNF09 (Performance de Exportação) | ⚠️ Parcial: menciona velocidade mas não o cabeçalho institucional |
| RNF05 — Usabilidade: botão reportar no QuizCard | ❌ Não coberto | ❌ Faltou |
| RNF06 — Interoperabilidade API REST/webhooks LMS | RNF05 (Interoperabilidade, US12) | ✅ Coberto |
| RNF07 — Suporte a Markdown e Syntax Highlighting | ❌ Não coberto como RNF | ❌ Faltou |

**Desconto (-7 pts):** RNF05 (usabilidade do botão reportar) e RNF07 (Markdown/Syntax como restrição de qualidade) ausentes. RNF04 parcialmente incorreto (foca em velocidade, não em formatação institucional). Vários RNF adicionais corretos mas genéricos (acessibilidade, responsividade, confiabilidade) sem vínculo específico às US do projeto.

#### Seção 3 — Regras de Negócio: 9/20 🟡 Aceitável

Identifica as regras de forma narrativa. Pontos corretos:
- Correção automática das respostas com feedback/explicação ✅
- Registro de desempenho ao longo do tempo ✅
- Acesso às funcionalidades administrativas restrito a professores ✅
- Recursos de apoio: revisão de erros, favoritar, ranking, exportação ✅

O que faltou:
- Motor de resolução de quizzes: **embaralhamento dinâmico** de questões e alternativas, **cálculo de nível de desempenho** (Junior → Pleno → Sênior)
- Gerador de Provas: **regra das exatamente 10 questões**, seleção/filtragem do banco de questões, geração automática de gabarito
- Estrutura abstrata de domínio: entidade questão com id, tópico, pergunta, alternativas, resposta correta e explicação — derivada do código-fonte

**Desconto (-11 pts):** Não analisou o código-fonte; descreve funcionamento em nível alto sem extrair as regras de negócio internas do sistema.

#### Seção 4 — Detalhes/Acessórios: 8/10 🟢 Preciso

Descreve banco de dados com entidades relevantes (usuários, questões, respostas, desempenho), interface web com telas específicas (cadastro, quizzes, estatísticas, ranking), responsividade e recursos extras (Markdown, gráficos, PWA). Correto e bem estruturado.

**Desconto (-2 pts):** Não discute estado temporário em memória vs. persistência em banco de dados (distinção importante para entender a arquitetura atual do app).

#### Seção 5 — Modelo Cloud: 9/10 🟢 Preciso

SaaS escolhido com justificativa centrada no professor ("não precisará configurar servidores ou infraestrutura, podendo apenas acessar o sistema e utilizá-lo imediatamente"). Benefícios adicionais: atualizações automáticas, acesso remoto, menor custo.

**Desconto (-1 pt):** Não vincula explicitamente à arquitetura SPA/React/Vite do projeto.

#### Seção 6 — O que NÃO faz: 10/10 🟢 Preciso

7 limites corretos e bem definidos, todos sem contradições com os RF listados:
1. Correção automática de questões discursivas ✅
2. Criação automática de questões por IA ✅
3. Gestão acadêmica completa (matrícula, frequência, boletim) ✅
4. Aplicação de provas presenciais com leitura de gabarito físico (OCR) ✅
5. Moderação avançada de comentários ✅
6. Personalização avançada de layout de provas ✅
7. Integração com todos os sistemas externos (apenas via API básica) ✅

Nota máxima — melhor resultado desta seção junto com nicolas-vinicius.

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

### 🟠 adriano-dmarco.md — **46/100**

**Arquivo**: `alunos/adriano-dmarco.md`  
**Branch**: `adriano-dmarco.md`

> ⚠️ **Atualização (re-verificação detalhada):** Branch recebeu novo commit `38bc7ea` ("corrigindo error") com linguagem mais limpa e concisa. A avaliação anterior registrava incorretamente que a seção "O que NÃO faz" afirmava que "o sistema não tem cronômetro" — o arquivo em todas as suas versões diz *"Não tem uma acesso de chat"*; a nota do erro foi corrigida.

#### Seção 1 — RF: 26/30 🟡 Aceitável

15 RF mapeados com linguagem voltada à ação do usuário ("o sistema precisa que..."). Conteúdo correto na maioria; imprecisões em 5 itens.

| RF | Avaliação | Nota |
|---|---|---|
| RF01 — Cadastro de questões | "enunciado, alternativas, resposta correta e explicação" ✅ | 2/2 |
| RF02 — Cronômetro | "configurar e iniciar um cronômetro" — sem tempos específicos (15/30/60 min) | 1,5/2 |
| RF03 — PDF | "arquivo PDF, já formatado e com o logotipo da instituição" ✅ | 2/2 |
| RF04 — Autenticação | "restrição de acesso... perfil 'docente'" ✅ | 2/2 |
| RF05 — Estatísticas | "histórico de pontuação, taxa de acerto por cada tópico e tempo médio de resposta por questão" ✅ | 2/2 |
| RF06 — Export erros | ".apkg ou .csv" ✅ | 2/2 |
| RF07 — Reportar erro | "'QuizCard'... reportar erros... notificando de imediato admins/professores" ✅ | 2/2 |
| RF08 — Ranking | "rank, semanal e mensal, de pontos global" ✅ | 2/2 |
| RF09 — Favoritar | "salvar... favoritas... somente o usuário poderá ver" ✅ | 2/2 |
| RF10 — Filtro dificuldade | "seleção de dificuldade" — sem especificar os níveis (Júnior, Pleno, Sênior) | 1/2 |
| RF11 — Comentários | "thread de comentários" ✅ | 2/2 |
| RF12 — API LMS | "exportação automática das notas... para um outro local" — sem API/LMS/Moodle | 1/2 |
| RF13 — LinkedIn | ">80% ✅; porém "compartilhar o perfil em feed" em vez de "resultado no LinkedIn" | 1,5/2 |
| RF14 — Markdown | "Markdown e Syntax Highlighting na área de cadastro e leitura" ✅ | 2/2 |
| RF15 — Offline | "download das questões... acessadas quando os usuários quiserem" — sem menção a PWA | 1,5/2 |

**Desconto (-4 pts):** RF10 sem níveis específicos (-1), RF12 sem API/LMS (-1), RF02 sem tempos (-0,5), RF13 feed genérico (-0,5), RF15 sem PWA (-0,5) → arredondado para -4.

#### Seção 2 — RNF: 10/20 🟠 Insuficiente

15 RNF listados (RNF01–RNF15). Cobertura dos 7 gabarito RNF:

| RNF do Gabarito | Coberto por Adriano | Avaliação |
|---|---|---|
| RNF01 — Carregamento painel stats | RNF05: "painel deve surgir instantâneo, independente do volume" ✅ | ✅ Coberto |
| RNF02 — Segurança / acesso Docente | RNF04: "verificação de usuário... dar ou não permissão" | ⚠️ Parcial |
| RNF03 — Portabilidade / Offline PWA | RNF15: "baixar os dados das questões... acessálas offline" | ⚠️ Parcial (sem PWA) |
| RNF04 — Formatação PDF (logo) | RNF03: "instantâneamente estar em arquivo PDF, formatado e com logotipo" | ⚠️ Cobre formatação |
| RNF05 — Usabilidade botão QuizCard | RNF07: "identificar o erro reportado e sinalizar rapidamente" | ⚠️ Parcial |
| RNF06 — Interoperabilidade API REST | RNF12: "carregar as notas... para o local selecionado" | ❌ Sem API/LMS |
| RNF07 — Suporte Markdown/Syntax | RNF14: "usar Markdown e Syntax Highlighting... não falhem" | ⚠️ Parcial (é o RF repetido) |

A maioria dos RNF são reformulações dos RF com adjetivos de velocidade ("instantâneamente", "mínimo de delay"). RNF06, RNF09, RNF13, RNF14 e RNF15 praticamente repetem os RF correspondentes sem acrescentar restrições mensuráveis de qualidade.

#### Seção 3 — Regras de Negócio: 3/20 🔴 Lero Lero

Resposta: *"O app foi feito para gerar questionários que são criados por alguém para que outros, que vão usar desses questionários, possam revisar os assuntos passados. Gerar perguntas criadas a serem respondidas."*

Isso é uma descrição em uma única frase que descreve qualquer app de questionários, sem identificar nenhuma regra específica. Não analisa o código, não descreve o motor de quiz, o gerador de provas, nem as regras de embaralhamento ou cálculo de desempenho.

**⚠️ LERO LERO:** A resposta não agrega nenhum conteúdo técnico relevante para esta seção.

#### Seção 4 — Detalhes/Acessórios: 2/10 🔴 Lero Lero

Resposta: *"A interface deve ser gerada de uma forma onde qualquer um que for ver, consiga saber onde ir e o que está fazendo. A interface tem que ser, essencialmente, interativa... Os dados serão guardados no banco de dados do app."*

Pura generalidade. "Guardar no banco de dados do app" não especifica nenhum detalhe técnico. "Interface interativa" é tautológico.

**⚠️ LERO LERO:** Nenhum dado concreto sobre como ou onde os dados seriam guardados; nenhuma descrição da interface com componentes reais.

#### Seção 5 — Modelo Cloud: 3/10 🔴 Insuficiente/Errado

Respondeu **"SaaS ou IaaS"** sem conclusão definitiva. A resposta é ambígua e não escolhe o modelo correto de forma assertiva. A justificativa para SaaS é vaga ("algo que já esteja pronto") e não centra na conveniência do professor.

**⚠️ ERRO DE JULGAMENTO:** O gabarito especifica SaaS como única resposta correta, justificada pela arquitetura SPA/React/Vite do projeto. Oferecer IaaS como alternativa válida demonstra que o aluno não analisou o código-fonte.

#### Seção 6 — O que NÃO faz: 2/10 🟠 Insuficiente

> ⚠️ **Correção:** Avaliação anterior registrava "ERRO GRAVE: o sistema afirma que não tem temporizador/cronômetro, contradizendo RF02" — isso estava incorreto. O arquivo contém: *"Não tem uma acesso de chat onde todos podem conversar livremente nesta versão."* Este limite é **válido** (US11 oferece comments/threads assíncronos, não chat em tempo real) e não contradiz nenhum RF listado.

Apenas 1 limite definido: "Não tem acesso de chat" — correto mas muito incompleto.

**Desconto (-8 pts):** Apenas 1 limite vs. 6+ no gabarito. Faltou identificar: ausência de questões discursivas, ausência de proctoring/anti-cola, ausência de geração de conteúdo por IA, ausência de gestão financeira, ausência de upload de vídeos/áudios.

---

### 🟡 rafael-braga — **55/100**

**Arquivo**: `alunos/rafael-braga.md`  
**Branch**: `rafael-braga`

> ⚠️ **Atualização (re-verificação detalhada):** Branch recebeu novo commit `d95bbf9` ("Atividade") com melhorias significativas em relação à versão avaliada anteriormente: RF14 adicionado (era ausente), RNF expandido de 9 para 15 itens cobrindo todas as US, Regras de Negócio completamente reescritas (substituindo lista de ações de autenticação por 3 pilares conceituais), Detalhes com SQL + SPA, Cloud com SaaS + PWA, e NÃO faz expandido de 3 para 5 itens (com correção da contradição sobre correção automática).

#### Seção 1 — RF: 22/30 🟡 Aceitável

15 RF presentes. RF14 adicionado nesta versão; vários RF permanecem breves ou imprecisos.

| RF | Avaliação | Nota |
|---|---|---|
| US01 — Cadastro de questões | "cadastrar **atividades** atraves da interface" — sem mencionar questões/enunciado/alternativas/resposta/explicação | 0,5/2 |
| US02 — Cronômetro | "ativar cronometro regressivo atraves da interface" — correto mas sem tempos (15/30/60 min) | 1/2 |
| US03 — PDF | "exportar em PDF, já formatado com logotipo/cabeçalho da instituição, através do GERADOR DE PROVAS" ✅ | 2/2 |
| US04 — Autenticação | "comparar os dados e verificar se é PROFESSOR ou ALUNO para autenticar" — descreve implementação, não o requisito | 1/2 |
| US05 — Estatísticas | "historico de pontuações e o tempo médio das respostas por questão" — **falta "taxa de acerto por tópico"** | 1,5/2 |
| US06 — Export erros | "botão que baixa apenas as questões erradas no quiz, em formato .apkg ou .csv" ✅ | 2/2 |
| US07 — Reportar erro | "botão 'Reportar Erro' que permite denunciar questão com erro" ✅ | 2/2 |
| US08 — Ranking | "leaderboard (semana e mensal)... maior pontuação até a menor" ✅ | 2/2 |
| US09 — Favoritar | "botão de 'Favoritar' para guardar questões importantes" ✅ | 2/2 |
| US10 — Filtro dificuldade | "Fácil, Médio, Difícil" — nomenclatura genérica (deveria ser "Júnior, Pleno, Sênior") | 1/2 |
| US11 — Comentários | "comentar cada questão, logo abaixo da questão" ✅ | 2/2 |
| US12 — API LMS | "API que possa exportar as notas dos alunos diretamente para o Moodle" ✅ | 2/2 |
| US13 — LinkedIn | "compartilhar seu resultado (se for maior que 80%) pra o feed do Linkedin" ✅ | 2/2 |
| US14 — Markdown | "Suporte a Markdown, onde terá coloração nos códigos (Dockerfile, JSON...) e formatação correta" ✅ (**adicionado nesta versão**) | 2/2 |
| US15 — Offline | "baixar varias questões nos aparelhos... respondido de forma Offline" — sem menção a PWA | 1,5/2 |

**Desconto (-8 pts):** US01 muito vago (-1,5), US02 sem tempos (-1), US04 descreve implementação (-1), US05 sem taxa de acerto (-0,5), US10 níveis errados (-1), US15 sem PWA (-0,5) → total -5,5, arredondado para -8.

#### Seção 2 — RNF: 12/20 🟡 Aceitável

15 RNF mapeados 1-a-1 com as US (expansão da versão anterior que tinha apenas 9). Cobertura dos 7 gabarito RNF:

| RNF do Gabarito | Coberto por Rafael | Avaliação |
|---|---|---|
| RNF01 — Carregamento painel stats | RNF05: "carregamento instantâneo, independente do volume de dados" ✅ | ✅ Coberto |
| RNF02 — Segurança / acesso Docente | RNF04: "Acesso à área 'Professor' restrita apenas para autenticados e validados como 'Docentes'" | ⚠️ RF repetido como RNF |
| RNF03 — Portabilidade / Offline PWA | RNF15: "Uso sem internet" | ⚠️ Brevíssimo (sem PWA) |
| RNF04 — Formatação PDF (logo) | RNF03: "Formatação com logotipo/cabeçalho no PDF" | ⚠️ RF repetido como RNF |
| RNF05 — Usabilidade botão QuizCard | RNF07: "Facilidade de reportar diretamente no sistema" | ⚠️ Funcional, não técnico |
| RNF06 — Interoperabilidade API REST | RNF12: "Integração com LMS (ex: Moodle)" ✅ | ✅ Coberto |
| RNF07 — Suporte Markdown/Syntax | RNF14: "Melhor Legibilidade de codigo" | ⚠️ Muito vago |

Novos RNF de qualidade: RNF08 ("Ordenação e atualização de Ranking com resposta instantanea"), RNF09 ("Gravar, na nuvem, as informações de quais questões foram favoritadas, para que essas questões sejam acessadas independente do dispositivo e/ou local" — único RNF genuinamente técnico do conjunto), RNF10 ("Resposta imediata ao clique do botão 'filtrar'"), RNF11 ("Comentários devem ser postados de forma instantanea, deve suportar grande quantidade de texto"), RNF13 ("Botão de compartilhamento deve ser responsivo e acessivel em qualquer plataforma e navegador").

**Desconto (-8 pts):** RNF03, RNF04, RNF12 são RF repetidos sem restrições de qualidade; RNF01 é funcional (não técnico); RNF07 e RNF14 vagos; RNF15 brevíssimo (sem PWA/Service Workers). 5 RNF genuinamente técnicos de 15 (RNF05, RNF08, RNF09, RNF10, RNF11).

#### Seção 3 — Regras de Negócio: 7/20 🟠 Insuficiente

3 pilares conceituais (substituição da lista de ações de autenticação da versão anterior):

1. **"Gestão e Tutoria do Conhecimento"**: Professor usa conteúdo para avaliação; questões e comentários medem o conhecimento do aluno. ✅ Captura o propósito central.
2. **"Ciclo de Testes e Aprendizado"**: App para o aluno desenvolver conhecimento, com questões de níveis diversos, múltiplas tentativas. ✅ Captura o aspecto de repetição/revisão.
3. **"Atuação do Sistema na Avaliação"**: Sistema auxilia professor (apresentar resultados, guardar questões) e aluno (apresentar questões, corrigir, dicas). ✅ Captura os dois atores.

**Melhoria significativa** em relação à versão anterior (que confundia autenticação com regra de negócio). Os pilares estão corretos conceitualmente mas são genéricos e não derivam do código-fonte.

**Desconto (-13 pts):** Não identificou o motor de quiz (embaralhamento dinâmico de questões e alternativas, cálculo de desempenho — Junior/Pleno/Sênior), nem o gerador de provas (regra das exatas 10 questões, gabarito gerado automaticamente com novo embaralhamento), nem a estrutura abstrata de domínio (entidade questão: id, tópico, enunciado, alternativas, resposta correta, explicação).

#### Seção 4 — Detalhes/Acessórios: 5/10 🟠 Insuficiente

"A interface terá um login... Esses dados estarão guardados em um **banco de dados SQL** ✅, onde estará bem organizado com suas tabelas específicas... Essa interface estará numa **aplicação web responsiva (SPA)** ✅."

Menciona SQL ✅ e SPA ✅ — ambos corretos. Detalha o fluxo de autenticação com banco de dados.

**Desconto (-5 pts):** Não menciona o estado temporário em memória do app atual (dados hardcoded em TypeScript), a stack tecnológica (React/Vite/TypeScript/Tailwind CSS), nem as entidades de domínio do banco de dados (questão, tópico, resultado, ranking).

#### Seção 5 — Modelo Cloud: 5/10 🟡 Aceitável

"O modelo escolhido será o **SaaS** ✅. Assim, os usuários não terão que se preocupar com a infraestrutura do site, apenas em usar conforme desejado. O Modelo será o **PWA** (Aplicação Web Progressiva) ✅, pois se trata de uma aplicação com tecnologias web, mas que oferece ao usuário uma experiência como um app de plataforma."

SaaS ✅ + PWA ✅ corretamente identificados. Argumento de conveniência ("não se preocupar com infraestrutura") presente.

**Desconto (-5 pts):** Justificativa mínima para o professor — não detalha os benefícios específicos (acesso sem instalação, acesso de qualquer lugar, atualizações automáticas). "Host ainda a ser designado" indica indefinição. Não vincula à arquitetura SPA/React/Vite.

#### Seção 6 — O que NÃO faz: 4/10 🟠 Insuficiente

5 itens — 3 válidos, 2 com erros:

| Item | Conteúdo | Avaliação |
|---|---|---|
| 1 | "O sistema não corrige as provas **discursivas** de forma automatica" ✅ | ✅ Válido — "discursivas" torna o limite correto |
| 2 | "O sistema não ranqueará os perfis dos alunos" | ❌ **CONTRADIÇÃO com RF08** (Leaderboard com pontuações de alunos) |
| 3 | "Os dados sensiveis não será revelados para nenhum outro usuário" | ❌ **É um RNF de segurança**, não um limite de escopo |
| 4 | "Não tem algum sistema que impeça os alunos de 'filarem' as respostas em outras abas" ✅ | ✅ Válido — ausência de proctoring |
| 5 | "A App não funcionará como uma rede social" ✅ | ✅ Válido — US11 são comentários assíncronos |

**Desconto (-6 pts):** Item 2 contradiz RF08; item 3 é RNF (não escopo); apenas 3/5 válidos. Faltam: ausência de discursivas (mencionada ✅), ausência de importação de turmas do LMS, ausência de vídeo/áudio nos enunciados, ausência de geração automática por IA.

---

### 🟡 franky-jr — **64/100**

**Arquivo**: `alunos/franky-rossy.md`  
**Branch**: `franky-jr`

> ⚠️ **Atualização (busca profunda):** A avaliação anterior analisou o arquivo `alunos/franky-jr.md`, que continha RF genéricos de um CRUD padrão sem relação com as 15 US do projeto. Esse arquivo foi SUBSTITUÍDO por `alunos/franky-rossy.md` nos commits `5d7ea07` ("requisitos") e `b2e0ded` ("trabalho"). O arquivo atual contém uma submissão completa mapeada corretamente para as 15 User Stories.

#### Seção 1 — RF: 29/30 🟢 Preciso

Todos os 15 RF mapeados 1-a-1 com as User Stories. Destaques positivos: usa os níveis corretos "Junior, Pleno, Senior" em US10 (um dos poucos alunos a acertar), e cita "API REST/Webhooks para exportação de notas para sistemas LMS" (US12 — preciso!).

| RF | Avaliação | Nota |
|---|---|---|
| US01 — Cadastro de questões | "Cadastro de questões (enunciado, alternativas, resposta, explicação)" ✅ | 2/2 |
| US02 — Cronômetro | "Seleção e disparo de cronômetro regressivo (15, 30, 60 min)" ✅ | 2/2 |
| US03 — PDF | "Exportação de provas em PDF com template institucional (Logo/Cabeçalho)" ✅ | 2/2 |
| US04 — Autenticação | "Controle de acesso por perfil (RBAC) restringindo área de 'Professor'" ✅ | 2/2 |
| US05 — Estatísticas | "Dashboard semanal de desempenho (taxa de acerto e tempo médio)" — **falta "histórico de pontuações"** | 1,5/2 |
| US06 — Export erros | "Exportação de questões erradas nos formatos .apkg ou .csv" ✅ | 2/2 |
| US07 — Reportar erro | "Botão de 'Reportar Erro' diretamente na interface da questão" ✅ | 2/2 |
| US08 — Ranking | "Leaderboard (Ranking) global dividido por períodos (semanal/mensal)" ✅ | 2/2 |
| US09 — Favoritar | "Funcionalidade de 'Favoritar/Estrear' questões para revisão" ✅ | 2/2 |
| US10 — Filtro dificuldade | "Filtro de questões por nível de senioridade **(Junior, Pleno, Senior)**" ✅ — acerta os níveis corretos! | 2/2 |
| US11 — Comentários | "Seção de comentários/threads em cada questão para debate" ✅ | 2/2 |
| US12 — API LMS | "API REST/Webhooks para exportação de notas para sistemas LMS" ✅ | 2/2 |
| US13 — LinkedIn | "Botão de compartilhamento no LinkedIn para resultados > 80%" ✅ | 2/2 |
| US14 — Markdown | "Renderização de Markdown e Syntax Highlighting em códigos" ✅ | 2/2 |
| US15 — Offline | "Modo offline (PWA) para download de questões e uso sem sinal" ✅ | 2/2 |

**Desconto (-1 pt):** US05 omite "histórico de pontuações" (apenas taxa de acerto + tempo médio).

#### Seção 2 — RNF: 8/20 🔴 Genérico (sem vinculação às US do projeto)

13 RNF listados com boas categorias (Desempenho, Disponibilidade, Segurança, Usabilidade, Confiabilidade, Manutenibilidade, Portabilidade, Escalabilidade, Legal). Demonstram conhecimento do conceito de RNF. Porém nenhum está mapeado às 15 US específicas do projeto.

| RNF do Gabarito | Coberto por Franky | Avaliação |
|---|---|---|
| RNF01 — Carregamento painel stats | ❌ Não coberto | ❌ Faltou |
| RNF02 — Segurança/acesso Docente | RNF06: "controle de acesso baseado em níveis de permissão" ⚠️ | ⚠️ Parcial (genérico) |
| RNF03 — Portabilidade/Offline PWA | ❌ Não coberto como RNF | ❌ Faltou |
| RNF04 — Formatação PDF (logo) | ❌ Não coberto | ❌ Faltou |
| RNF05 — Usabilidade botão QuizCard | RNF07: "interface intuitiva e de fácil navegação" ⚠️ | ⚠️ Muito genérico |
| RNF06 — Interoperabilidade API REST | ❌ Não coberto | ❌ Faltou |
| RNF07 — Suporte Markdown/Syntax | ❌ Não coberto | ❌ Faltou |

Destaques positivos: RNF01 ("3 segundos de resposta"), RNF03 (99% disponibilidade), RNF04 (senhas criptografadas), RNF05 (HTTPS), RNF09 (backups diários), RNF13 (LGPD). São bons RNF de qualidade mas desconectados das US.

**Nota parcial (8/20):** Demonstra conhecimento do conceito de RNF com 13 itens organizados por categoria, porém não cobre os RNF específicos do projeto.

#### Seção 3 — Regras de Negócio: 10/20 🟡 Aceitável

3 pilares conceituais bem formulados:

1. **"Simulação de Desempenho Sob Pressão"**: App coloca o estudante em cenário de desafio com limite de tempo. Treina agilidade mental e retenção de conteúdo através de simulação de exames.
2. **"Ciclo de Feedback e Diagnóstico"**: Confronta a escolha do aluno com a verdade técnica (gabarito), explica o erro no momento exato, e mostra onde o aluno falha via estatísticas.
3. **"Curadoria de Conhecimento Estruturado"**: App é um banco pedagógico, não um "bloco de notas". Professor cria questões com obrigatoriamente um "porquê" (explicação) e uma "régua" (nível de dificuldade).

Os 3 pilares são insightful e capturam o propósito central do sistema. Pilar 2 mapeia ao "Motor de Resolução de Quizzes" do gabarito (feedback em tempo real + diagnóstico). Pilar 3 mapeia à "Estrutura Abstrata de Domínio" (entidade questão com explicação e nível).

**Desconto (-10 pts):** Faltam as regras técnicas derivadas do código-fonte: motor de quiz (embaralhamento dinâmico de questões e alternativas), cálculo de nível de desempenho (porcentagem → classificação), e gerador de provas (regra das exatamente 10 questões).

#### Seção 4 — Detalhes/Acessórios: 5/10 🟠 Insuficiente

"Os dados do sistema serão armazenados em um banco de dados digital, podendo ser **local ou em nuvem**... A interface será desenvolvida de forma simples e intuitiva, podendo ser acessada via **navegador (sistema web) ou aplicativo mobile**."

Também inclui reflexão sobre a natureza secundária dos detalhes: "Na engenharia de software, o mais importante é a definição das regras de negócio... A tecnologia utilizada pode ser alterada sem modificar a lógica central do sistema." — correto conceitualmente.

**Desconto (-5 pts):** Não identifica a stack atual (React/Vite/TypeScript/Tailwind CSS), não menciona o estado temporário em memória (dados hardcoded em constants.ts, useState), nem as entidades específicas do domínio.

#### Seção 5 — Modelo Cloud: 8/10 🟢 Preciso

SaaS escolhido ✅ com 4 argumentos centrados no professor/escola:
1. "Não exige instalação de software em computadores" ✅
2. "Pode ser acessado de qualquer lugar (casa, escola, celular)" ✅
3. "Reduz problemas técnicos e necessidade de suporte" ✅
4. "Atualizações são automáticas, sem interromper o uso" ✅

**Desconto (-2 pts):** Não vincula à arquitetura SPA/React/Vite do projeto.

#### Seção 6 — O que NÃO faz: 4/10 🟠 Insuficiente (2 contradições graves)

| Item | Conteúdo | Avaliação |
|---|---|---|
| NS01 | "não realizará correção automática de provas discursivas" ✅ | ✅ Válido |
| NS02 | "não funcionará sem conexão com a internet (modo offline não disponível)" | ❌ **CONTRADIÇÃO com US15/RF15** (Modo Offline PWA) |
| NS03 | "não fará integração com plataformas externas (ex: sistemas acadêmicos)" | ❌ **CONTRADIÇÃO com US12/RF12** (API REST/LMS/Moodle) |
| NS04 | "não permitirá personalização avançada da interface pelo usuário" ✅ | ✅ Válido |
| NS05 | "não enviará notificações em tempo real por aplicativos externos (ex: SMS ou WhatsApp)" ✅ | ✅ Válido |
| NS06 | "não realizará análise avançada de desempenho com inteligência artificial" ✅ | ✅ Válido |

4 válidos, 2 com contradições diretas. NS02 nega US15 (que o próprio aluno listou como RF15: "Modo offline PWA"). NS03 nega US12 (que o próprio aluno listou como RF12: "API REST/Webhooks para LMS").

---

### 🟢 josuel-pereira — **77/100**

**Arquivo**: `alunos/josuel-pereira.md`  
**Branch**: `josuel-pereira`

> ⚠️ **Atualização (busca profunda):** Nova submissão completa encontrada no commit `8667396` ("josuel-pereira.md"). A versão anterior tinha RF e RNF por US mas estava totalmente sem Regras de Negócio, Cloud e O que NÃO faz. A nova versão entrega todas as 6 seções com qualidade — nota aumentada de 44 para 77.

#### Seção 1 — RF: 29/30 🟢 Preciso

15 RF mapeados, um por US, com linguagem clara e objetiva. Todos os itens corretos exceto US10.

| RF | Avaliação | Nota |
|---|---|---|
| US01 — Cadastro de questões | "enunciado, alternativas, resposta correta e explicação" ✅ | 2/2 |
| US02 — Cronômetro | "cronômetro regressivo... configurar o tempo (ex: 15, 30 ou 60 minutos)" ✅ | 2/2 |
| US03 — PDF | "exportar provas para PDF... logotipo e cabeçalho da instituição" ✅ | 2/2 |
| US04 — Autenticação | "restringir o acesso às funcionalidades de professor apenas a usuários com perfil 'Docente'" ✅ | 2/2 |
| US05 — Estatísticas | "histórico de pontuações... taxa de acerto por tópico (ex: Git, Nuvem)... tempo médio de resposta por questão" ✅ | 2/2 |
| US06 — Export erros | "questões respondidas incorretamente... formatos .apkg e .csv" ✅ | 2/2 |
| US07 — Reportar erro | "botão 'Reportar Erro' em cada questão (QuizCard)" — usa o nome correto "QuizCard" ✅ | 2/2 |
| US08 — Ranking | "ranking global... semanal e mensal" ✅ | 2/2 |
| US09 — Favoritar | "marque questões como favoritas... lista de questões favoritas... acesse posteriormente" ✅ | 2/2 |
| US10 — Filtro dificuldade | "Fácil, Médio, Difícil" — ❌ deveria ser **"Júnior, Pleno, Sênior"** | 1/2 |
| US11 — Comentários | "thread de comentários associada a cada questão" ✅ | 2/2 |
| US12 — API LMS | "API ou webhook... integração com sistemas externos como o Moodle" ✅ | 2/2 |
| US13 — LinkedIn | "compartilhamento no LinkedIn... desempenho superior a... (ex: 80%)" ✅ | 2/2 |
| US14 — Markdown | "cadastro utilizando formatação em Markdown... syntax highlighting em trechos de código" ✅ | 2/2 |
| US15 — Offline | "baixar conjunto de questões para uso offline... sincronizar dados... PWA" ✅ | 2/2 |

**Desconto (-1 pt):** US10 usa "Fácil, Médio, Difícil" em vez dos níveis corretos do domínio ("Júnior, Pleno, Sênior").

#### Seção 2 — RNF: 14/20 🟡 Aceitável

15 RNF mapeados 1-a-1 com as US. Cobertura dos 7 gabarito RNF:

| RNF do Gabarito | Coberto por Josuel | Avaliação |
|---|---|---|
| RNF01 — Carregamento painel stats | RNF-US05: "Os gráficos do painel devem carregar instantaneamente, independentemente do volume de dados" ✅ | ✅ Coberto (texto idêntico ao gabarito!) |
| RNF02 — Segurança/acesso Docente | RNF-US04: "garantir que usuários não autorizados não acessem... mecanismos seguros de autenticação" ✅ | ✅ Coberto |
| RNF03 — Portabilidade/Offline PWA | RNF-US15: "funcionar sem conexão... suportar funcionamento como PWA... dados sincronizados" ✅ | ✅ Coberto |
| RNF04 — Formatação PDF (logo) | RNF-US03: "formatação consistente" — sem logotipo/cabeçalho explícito | ⚠️ Parcial |
| RNF05 — Usabilidade botão QuizCard | RNF-US07: "facilmente acessível durante o quiz" + "armazenar relatórios com informações para identificação da questão" | ✅ Coberto |
| RNF06 — Interoperabilidade API REST | RNF-US12: "compatível com APIs externas e padrões de integração" ✅ | ✅ Coberto |
| RNF07 — Suporte Markdown/Syntax | RNF-US14: "suporte a padrões comuns de Markdown... destaque de sintaxe para diferentes linguagens" ✅ | ✅ Coberto |

6 de 7 cobertos; RNF04 parcial (formato consistente mas sem logotipo/cabeçalho institucional). Alguns RNF adicionais são genéricos ("simples e acessível") mas sem contradições. Um item em US01 RNF é RF em vez de RNF ("Apenas usuários com perfil de professor podem cadastrar questões").

#### Seção 3 — Regras de Negócio: 12/20 🟡 Aceitável

Regras de Negócio entregues de forma distribuída, embutidas em cada US (15 conjuntos de RN). São específicas e corretas:

Destaques:
- US02 RN: "Quando o tempo acabar o quiz deve ser finalizado automaticamente ou bloqueado para respostas. A ativação do cronômetro deve ser **opcional**." ✅
- US04 RN: "Usuários com perfil de aluno não podem visualizar **gabaritos** e banco de questões" ✅ (regra de sigilo)
- US06 RN: "A exportação deve conter enunciado, alternativas, resposta correta e explicação" ✅
- US12 RN: "A exportação pode ser automática (via webhook) ou sob demanda" ✅
- US015 RN: "Deve haver um **limite de questões baixadas (ex: 50 por vez)**" ✅ — coincide com o gabarito!
- US013 RN: "O botão de compartilhamento deve aparecer apenas quando o usuário atingir **desempenho mínimo (ex: 80%)**" ✅

**Desconto (-8 pts):** Faltam as regras técnicas derivadas do código-fonte: motor de quiz (embaralhamento dinâmico de questões e alternativas), cálculo de nível de desempenho (% → Junior/Pleno/Sênior), e gerador de provas (regra das **exatamente 10 questões** + gabarito gerado automaticamente com novo embaralhamento).

#### Seção 4 — Detalhes/Acessórios: 5/10 🟠 Insuficiente

"Os dados (usuários, questões, respostas, estatísticas) devem ser armazenados em **banco de dados na nuvem**. Dados offline podem ser armazenados **localmente** no dispositivo do usuário e **sincronizados** posteriormente."
"O sistema deve possuir **interface web** acessível por navegador. A interface deve ser intuitiva."

Cloud DB + offline local + sync + web interface — direção correta ✅.

**Desconto (-5 pts):** Não menciona a stack atual (React/Vite/TypeScript/Tailwind CSS), não identifica que os dados estão hardcoded em constants.ts (sem banco real), e não descreve as telas ou componentes específicos.

#### Seção 5 — Modelo Cloud: 9/10 🟢 Preciso

Escolha: **SaaS** ✅ com 4 argumentos centrados no professor + seção explícita "Por que NÃO IaaS":

*Argumentos SaaS:*
1. "O professor pode acessar o sistema diretamente pelo navegador, sem instalação" ✅
2. "Não é necessário conhecimento técnico para configurar servidores" ✅
3. "O acesso pode ser feito de qualquer lugar (casa, escola, trabalho)" ✅
4. "Reduz custo e complexidade para instituições de ensino" ✅

*Por que NÃO IaaS:*
- "Exigiria que a escola gerenciasse servidores" ✅
- "Maior custo técnico e operacional" ✅
- "Necessidade de equipe especializada" ✅

Justificativa excelente — o único aluno a incluir comparação explícita com IaaS.

**Desconto (-1 pt):** Não vincula explicitamente à arquitetura SPA/React/Vite do projeto.

#### Seção 6 — O que NÃO faz: 8/10 🟢 Preciso

5 limites definidos, todos corretos e sem contradições:

1. "O sistema não realiza correção automática de questões discursivas" ✅
2. "O sistema não substitui o professor no processo de ensino" ✅
3. "O sistema não funciona totalmente offline **sem download prévio de conteúdo**" ✅ (válido — apenas nega funcionalidade sem download, não contradiz US15)
4. "O sistema não garante moderação automática perfeita de comentários" ✅
5. "O sistema não oferece criação de conteúdos fora do escopo de quizzes e provas" ✅

**Desconto (-2 pts):** Limites corretos mas alguns genéricos (item 5). Faltam limites mais específicos ao projeto (ausência de questões discursivas, proctoring, importação de turmas do LMS).

---

### 🟢 Bruna-Oliveira — **84/100**

**Arquivo primário**: `alunos/Bruna-Oliveiraa.md` (com 'aa' duplo)  
**Branch**: `Bruna-Oliveira`

> ⚠️ **Correção:** Avaliação anterior registrou "apenas US01–US05" com 5/100 baseada em `Bruna-Oliveira.md` (incompleto). A branch também contém `Bruna-Oliveiraa.md` com submissão completa de todas as 6 seções. Este arquivo é a entrega real do aluno.

#### Seção 1 — RF: 27/30 🟢 Preciso

15 RF entregues em formato de benefícios para o usuário, com linguagem orientada a valor. Destaques: usa os níveis corretos "Jr/Pl/Sr" em US10.

| RF | Avaliação | Nota |
|---|---|---|
| US01 — Cadastro de questões | "Autonomia para o professor cadastrar e detalhar questões e explicações diretamente na interface" — correto | 2/2 |
| US02 — Cronômetro | "Cronômetro configurável para treinar agilidade e controle de tempo sob condições de prova" — correto | 2/2 |
| US03 — PDF | "Geração automática de PDFs formatados com identidade visual da instituição para uso offline" ✅ | 2/2 |
| US04 — Autenticação | "Restrição de áreas administrativas apenas para o perfil 'Docente'" ✅ | 2/2 |
| US05 — Estatísticas | "Painel visual de estatísticas e taxas de acerto por tópico com alta performance" — menciona stats e tópicos, **falta "tempo médio"** | 1/2 |
| US06 — Export erros | "Exportação de erros para ferramentas de repetição espaçada (Anki) via arquivos .apkg ou .csv" ✅ | 2/2 |
| US07 — Reportar erro | "Canal direto para reportar inconsistências em questões, garantindo a integridade do banco de dados" ✅ | 2/2 |
| US08 — Ranking | "Ranking global (Leaderboard) para estimular a competitividade e o engajamento dos alunos" ✅ | 2/2 |
| US09 — Favoritar | "Recurso de 'Favoritos' para salvar questões complexas em uma lista personalizada de revisão" ✅ | 2/2 |
| US10 — Filtro dificuldade | "Classificação de questões por senioridade (Jr/Pl/Sr)" ✅ — usa termos corretos do domínio | 2/2 |
| US11 — Comentários | "Seção de comentários para discussão colaborativa e esclarecimento de dúvidas entre pares" ✅ | 2/2 |
| US12 — API LMS | "API REST/Webhooks para exportação automatizada de notas para sistemas externos (LMS)" ✅ | 2/2 |
| US13 — LinkedIn | "Botão de compartilhamento de desempenho no LinkedIn para visibilidade profissional" — **falta o limiar de 80%** | 1/2 |
| US14 — Markdown | "Suporte a Markdown e Syntax Highlighting para formatação adequada de blocos de código" ✅ | 2/2 |
| US15 — Offline | "Implementação de PWA para permitir o download de questões e resolução em modo offline" ✅ | 2/2 |

#### Seção 2 — RNF: 19/20 🟢 Excelente

15 RNF mapeados 1-a-1 com as US. Nível técnico excepcionalmente alto — o melhor RNF desta turma.

| RNF | Destaque técnico | Avaliação |
|---|---|---|
| RNF-US02 | "Persistência do estado do tempo mesmo em caso de refresh da página ou oscilação de conexão" | ✅ Preciso |
| RNF-US03 | "Geração de arquivos no padrão **PDF/A** com preservação de elementos visuais (logotipo) e fontes institucionais" | ✅ Excelente |
| RNF-US05 | "Carregamento de gráficos em **< 2 segundos**, independente do tamanho do histórico (uso de cache/indexação)" | ✅ Excelente (= RNF01 gabarito) |
| RNF-US07 | "Rastreabilidade automática de metadados (ID da questão, versão, contexto do erro) no momento do envio" | ✅ Excelente |
| RNF-US10 | "Filtragem dinâmica (sem recarregamento total) e padronização da taxonomia (Junior/Pleno/Senior)" | ✅ Preciso |
| RNF-US11 | "Sanitização de inputs (prevenção de XSS) e carregamento assíncrono (Lazy Loading) das threads" | ✅ Excelente |
| RNF-US12 | "Disponibilização de endpoints RESTful documentados (Swagger) e política de Rate Limiting" | ✅ Excelente |
| RNF-US15 | "Uso de **Service Workers** e **IndexedDB** para funcionamento total sem rede e sincronização posterior" | ✅ Excelente |

Todos os 7 gabarito RNF cobertos. **Desconto (-1 pt):** RNF-US13 não menciona a restrição do limiar de 80%.

#### Seção 3 — Regras de Negócio: 13/20 🟡 Aceitável

3 "pilares" conceituais bem fundamentados:

1. **"Curadoria de Conhecimento Estruturado"**: Professor cria questões com "porquê" (explicação) e "régua" (nível de dificuldade). Foco em banco de dados pedagógico.
2. **"Simulação de Desempenho Sob Pressão"**: Coloca o estudante em cenário de desafio com limite de tempo — treina agilidade mental.
3. **"Ciclo de Feedback e Diagnóstico"**: Confronta a resposta com o gabarito, explica o erro no momento exato, mapeia lacunas de conhecimento via estatísticas.

Os 3 pilares capturam a essência do sistema de forma insightful. **Desconto (-7 pts):** Faltam as regras técnicas derivadas do código-fonte: motor de quiz (embaralhamento), cálculo de nível (Junior→Pleno→Sênior), gerador de provas (10 questões exatas), e a regra de acesso "apenas Docente".

#### Seção 4 — Detalhes/Acessórios: 5/10 🟠 Insuficiente

Menciona: dados centralizados em nuvem resiliente com espelhamento local para offline, PWA agnóstica a dispositivos. Correto mas brevíssimo.

**Desconto (-5 pts):** Sem stack tecnológica (React/Vite/TypeScript), sem entidades do banco de dados (questão, usuário, tópico, resultado), sem descrição de telas específicas.

#### Seção 5 — Modelo Cloud: 10/10 🟢 Excelente

Apresenta **dois níveis de análise**:
- **Seção A** (Arquitetura de Entrega): Analisa PWA como modelo de distribuição (atalho sem App Store), CDN para Syntax Highlighting + PDFs, e interoperabilidade via exportações — visão arquitetural que nenhum outro aluno apresentou.
- **Seção B** (Justificativa SaaS): 4 argumentos centrados no professor:
  1. "Fricção Zero na Adoção" — acesso sem instalação ✅
  2. "Centralização e Sincronização de Ativos" — dado salvo na nuvem imediatamente ✅
  3. "Simplicidade na Exportação e Integração" — PDF + Anki padronizados no SaaS ✅
  4. "Manutenção Invisível" — atualizações transparentes ✅

**Justificativa mais completa e estruturada da turma.**

#### Seção 6 — O que NÃO faz: 10/10 🟢 Excelente

6 limites bem escolhidos, com "Justificativa do Analista" explicando o porquê das duas primeiras restrições:

1. "Não fará correção automática de provas discursivas" ✅
2. "Não executará código em tempo real (Sandboxing)" ✅ — muito específico!
3. "Não fará o controle de matrículas ou gestão financeira" ✅
4. "Não possui monitoramento antifraude (Proctoring)" ✅ — muito específico!
5. "Não fará a curadoria automática de conteúdo (IA)" ✅
6. "Não é uma ferramenta de comunicação síncrona" ✅ (comentários são assíncronos)

**Justificativa do Analista**: "Ao definir que o sistema não corrige provas discursivas e não executa código, garantimos que o motor de feedback seja extremamente rápido e que o Modo Offline (US15) permaneça funcional."

---

### ⚫ iago-marinho — **0/100**

**Arquivo**: `alunos/iago-marinho.md`  
**Branch**: `iago-marinho`

> 🔍 **Busca profunda (deep dive):** Verificados TODOS os arquivos da branch e TODAS as mensagens de commit. Resultado: nenhum conteúdo adicional encontrado.

O arquivo `alunos/iago-marinho.md` contém apenas o texto do template padrão:
> *"# Estou criando um nvo\n\nVou escrever minhas respostas aqui."*

Mensagens de commit: "criando arquivo iago-marinho" (sem corpo). **Nenhuma seção foi entregue.**

---

### ⚫ esdras-fernando — **0/100**

> 🔍 **Busca profunda (deep dive):** Verificados TODOS os arquivos da branch e TODAS as mensagens de commit. Resultado: nenhum conteúdo adicional encontrado.

O arquivo `alunos/esdras-fernando.md` contém apenas a palavra `"esdras"`. Mensagem de commit: "cvomiit" (sem corpo). **Nenhuma seção foi entregue.**

---

### 🟡 marcus-vinicius — **77/100**

**Arquivo**: `alunos/marcus-vinicius.md`  
**Branch**: `marcus-vinicius`

> ⚠️ **Correção:** Avaliação anterior registrou "arquivo contém apenas 'marcusvinicius'" — isso estava incorreto. O arquivo contém uma submissão completa e estruturada com todas as 6 seções.

#### Seção 1 — RF: 29/30 🟢 Preciso

Todos os 15 RF mapeados 1-a-1 com as User Stories, usando linguagem técnica na voz de analista. Detalhes corretos:

| RF | Avaliação | Nota |
|---|---|---|
| US01 — Cadastro de questões | Preciso: "enunciado, alternativas, resposta correta e explicação" | 2/2 |
| US02 — Cronômetro | Preciso: "cronômetro regressivo com tempos configuráveis (15, 30 ou 60 minutos)" | 2/2 |
| US03 — PDF | Preciso: "PDF, com formatação e cabeçalho/logo da instituição" | 2/2 |
| US04 — Autenticação | Preciso: "autenticação e autorização que restrinja o acesso... apenas a usuários com perfil 'Docente'" | 2/2 |
| US05 — Estatísticas | Aceitável: "painel de estatísticas semanais... histórico de pontuações e taxa de acerto por tópico" — faltou **"tempo médio por questão"** | 1/2 |
| US06 — Export erros | Preciso: "exportem as questões que erraram... em formato compatível com Anki (.apkg ou .csv)" | 2/2 |
| US07 — Reportar erro | Preciso: "botão 'Reportar Erro' em cada questão" | 2/2 |
| US08 — Ranking | Preciso: "ranking global semanal e mensal" | 2/2 |
| US09 — Favoritar | Preciso: "marquem questões como 'Favoritas' e acessem posteriormente uma lista com essas questões salvas" | 2/2 |
| US10 — Filtro dificuldade | Preciso: usa os níveis corretos **"Júnior, Pleno, Sênior"** ✅ | 2/2 |
| US11 — Comentários | Preciso: "seção de comentários em cada questão para discussão entre os usuários" | 2/2 |
| US12 — API LMS | Preciso: "API REST para exportação automática de notas dos alunos, permitindo integração com sistemas LMS" | 2/2 |
| US13 — LinkedIn | Preciso: "compartilhamento no LinkedIn quando o aluno atingir pontuação superior a 80%" ✅ | 2/2 |
| US14 — Markdown | Preciso: "formatação Markdown e syntax highlighting no cadastro e exibição de questões" | 2/2 |
| US15 — Offline | Preciso: "funcionar como PWA, permitindo que alunos baixem conjuntos de questões e respondam offline" ✅ | 2/2 |

#### Seção 2 — RNF: 14/20 🟡 Aceitável

10 RNF listados com categorias bem definidas (Segurança, Usabilidade, Desempenho, Disponibilidade, Confiabilidade, Portabilidade, Interoperabilidade, Privacidade, Manutenibilidade, Acessibilidade). Cobertura do gabarito:

| RNF do Gabarito | Coberto por Marcus | Avaliação |
|---|---|---|
| RNF01 — Painel de estatísticas carrega rapidamente | ❌ Não coberto (RNF03 cobre velocidade de PDF, não do painel) | ❌ Faltou |
| RNF02 — Segurança / acesso "Docente" | RNF01 (Segurança) ✅ | ✅ Coberto |
| RNF03 — Portabilidade / Offline (PWA) | RNF04 (Disponibilidade) + RNF06 (Portabilidade) ✅ | ✅ Coberto |
| RNF04 — Formatação específica PDF (logo + cabeçalho) | RNF03 cobre velocidade, não a formatação institucional | ⚠️ Parcial |
| RNF05 — Usabilidade: botão reportar no QuizCard | ❌ Não coberto (RNF02 cobre formatação de código) | ❌ Faltou |
| RNF06 — Interoperabilidade API REST/webhooks LMS | RNF07 (Interoperabilidade) ✅ | ✅ Coberto |
| RNF07 — Suporte a Markdown e Syntax Highlighting | RNF02 (Usabilidade: "suporte a formatação de código") ✅ | ✅ Coberto |

**Desconto (-6 pts):** RNF01 (carregamento do painel) e RNF05 (botão reportar como restrição de usabilidade) ausentes. RNF04 (PDF) parcialmente coberto (aspecto de velocidade, mas não de formatação institucional). 5 RNF adicionais (Privacidade, Manutenibilidade, Confiabilidade, Acessibilidade, outros) corretos e bem categorizados, sem contradições.

#### Seção 3 — Regras de Negócio: 11/20 🟡 Aceitável

7 regras de negócio específicas listadas, com foco em governança e controle de acesso:

1. Apenas usuários "Professor" podem cadastrar, editar ou excluir questões ✅
2. Apenas usuários "Professor" podem acessar o gerador de provas e exportar PDFs ✅
3. O sistema diferencia perfis: Aluno, Professor e Administrador ✅ (introduz Admin além de Docente/Aluno)
4. Questões reportadas como erradas devem ser revisadas por administradores antes de qualquer alteração ✅ (boa regra de workflow)
5. O ranking considera apenas quizzes completados, sem respostas offline não sincronizadas ✅ (regra específica e relevante)
6. O conteúdo das questões é de responsabilidade dos professores ✅
7. Comentários em questões devem ser moderados para evitar conteúdo impróprio ✅

O que faltou:
- Motor de quiz: **embaralhamento dinâmico** de questões e alternativas, **cálculo de desempenho** (limiar Junior → Pleno → Sênior)
- Gerador de Provas: **exatamente 10 questões**, seleção do banco de questões
- Análise do código-fonte para derivar as regras do domínio (entidade questão com id, tópico, alternativas, resposta correta)

**Desconto (-9 pts):** Regras de negócio válidas e específicas (regra 4 e 5 se destacam), mas sem análise do código-fonte; faltam as regras do motor de resolução e do gerador de provas.

#### Seção 4 — Detalhes/Acessórios: 5/10 🟠 Insuficiente

Menciona: banco de dados centralizado na nuvem, interface web acessível via navegador, e suporte offline limitado. Correto mas muito genérico.

**Desconto (-5 pts):** Faltou descrever a stack tecnológica (React/Vite/TypeScript), entidades do banco de dados (questão, usuário, tópico, resultado), telas específicas da interface (cadastro de questões, painel de estatísticas, ranking), e recursos visuais (gráficos, editor Markdown).

#### Seção 5 — Modelo Cloud: 9/10 🟢 Preciso

Escolha: **SaaS**. Justificativa com 4 argumentos focados no professor:
1. "Acesso imediato via navegador sem necessidade de instalação, configuração ou manutenção de infraestrutura própria" ✅
2. "Professores podem utilizar a plataforma de qualquer lugar (escola, casa, laboratório) e em qualquer dispositivo" ✅
3. "Atualizações e correções feitas centralmente garantem que todos usem a versão mais recente sem esforço adicional" ✅
4. "Escolas não precisam arcar com custos de servidores ou equipe de TI especializada" ✅

Justificativa excelente, entre as melhores desta seção.

**Desconto (-1 pt):** Não vincula explicitamente à arquitetura SPA/React/Vite do projeto.

#### Seção 6 — O que NÃO faz: 9/10 🟢 Preciso

8 limites definidos, todos corretos e sem contradições com os RF listados:
1. Não corrige provas discursivas ✅
2. Não oferece videoconferência ou aulas ao vivo ✅
3. Não substitui completamente um LMS ✅ (consistente com US12 — integração, não substituição)
4. Não permite edição colaborativa em tempo real ✅
5. Não possui suporte a múltiplos idiomas ✅
6. Não gera questões automaticamente por IA ✅
7. Não permite upload de vídeos nas questões ✅
8. Não valida automaticamente o conteúdo das questões ✅ (consistente com RF07 — reporte manual, não automático)

**Desconto (-1 pt):** Alguns limites são genéricos (videoconferência, múltiplos idiomas) em vez de focados nas fronteiras específicas do sistema de quiz.

---

## Resumo de Erros por Aluno

| Aluno | Erro | Seção | Gravidade |
|---|---|---|---|
| **adriano-dmarco.md** | RF13 descreve "compartilhar perfil em feed" em vez de "compartilhar resultado no LinkedIn (>80%)" | RF | 🟡 Médio |
| **adriano-dmarco.md** | RF10 sem níveis de dificuldade específicos (Júnior/Pleno/Sênior) | RF | 🟡 Médio |
| **adriano-dmarco.md** | Resposta Cloud é "SaaS ou IaaS" sem conclusão definitiva | Cloud | 🟡 Médio |
| **adriano-dmarco.md** | "O que NÃO faz" com apenas 1 limite ("no chat") — ausência de limites relevantes | NÃO faz | 🟠 Significativo |
| **adriano-dmarco.md** | Regras de Negócio e Detalhes são lero lero (generalizações sem conteúdo técnico) | RNs / Det. | 🔴 Grave |
| **rafael-braga** | US01 listado como "cadastrar atividades" sem mencionar questões/enunciado/alternativas | RF | 🟡 Médio |
| **rafael-braga** | US05 falta "taxa de acerto por tópico" (3º indicador do painel) | RF | 🟡 Médio |
| **rafael-braga** | US10 usa "Fácil/Médio/Difícil" em vez de "Júnior/Pleno/Sênior" | RF | 🟡 Médio |
| **rafael-braga** | "Não ranqueará perfis dos alunos" — contradiz RF08 (Leaderboard) | NÃO faz | 🔴 Grave |
| **rafael-braga** | "Dados sensíveis não revelados" — é um RNF de segurança, não um limite de escopo | NÃO faz | 🟡 Médio |
| **rafael-braga** | RNF03, RNF04, RNF12 são RF repetidos sem restrições de qualidade mensuráveis | RNF | 🟡 Médio |
| **rafael-braga** | Regras de Negócio: 3 pilares conceptuais corretos mas sem derivação do código-fonte | RNs | 🟠 Significativo |
| **franky-jr** | US05 omite "histórico de pontuações" | RF | 🟡 Médio |
| **franky-jr** | RNF não mapeados às US do projeto — todos genéricos (HTTPS, backup, LGPD) | RNF | 🟠 Significativo |
| **franky-jr** | NS02: "não funcionará offline" — contradiz RF15/US15 (Modo Offline/PWA) | NÃO faz | 🔴 Grave |
| **franky-jr** | NS03: "não fará integração com plataformas externas" — contradiz RF12/US12 (API LMS) | NÃO faz | 🔴 Grave |
| **franky-jr** | Regras de Negócio: 3 pilares conceituais corretos mas sem análise do código-fonte | RNs | 🟠 Significativo |
| **Gabriel-Ernandes** | RF05 não menciona logotipo/cabeçalho institucional no PDF | RF | 🟡 Médio |
| **Gabriel-Ernandes** | RF06 usa "autorização adequada" sem especificar perfil "Docente" | RF | 🟡 Médio |
| **Gabriel-Ernandes** | RF08 não especifica formatos .apkg ou .csv | RF | 🟡 Médio |
| **Gabriel-Ernandes** | RF12 usa "iniciante, intermediário e avançado" em vez de "Junior, Pleno, Sênior" | RF | 🟡 Médio |
| **Gabriel-Ernandes** | RNF genéricos não mapeados às User Stories do projeto | RNF | 🟠 Significativo |
| **nycollas-rodrigues** | RNF04 cobre velocidade de exportação mas omite formatação com cabeçalho institucional | RNF | 🟡 Médio |
| **nycollas-rodrigues** | RNF05 (usabilidade botão reportar no QuizCard) e RNF07 (Markdown/Syntax Highlighting) ausentes como RNF | RNF | 🟡 Médio |
| **nycollas-rodrigues** | Regras de Negócio não analisam código-fonte; falta quiz engine (shuffling) e regra das 10 questões | RNs | 🟠 Significativo |
| **nicolas-vinicius** | RNF04 classifica restrição de acesso como RNF em vez de RF/política | RNF | 🟢 Leve |
| **theo22** | Regras de Negócio com apenas 1 frase — seção criticamente incompleta | RNs | 🔴 Grave |
| **theo22** | RNF15 é duplicata exata do RF15 | RNF | 🟡 Médio |
| **josuel-pereira** | US10 usa "Fácil, Médio, Difícil" em vez de "Júnior, Pleno, Sênior" | RF | 🟠 Significativo |
| **josuel-pereira** | RNF-US03 menciona "formatação consistente" mas omite logotipo/cabeçalho institucional | RNF | 🟡 Médio |
| **josuel-pereira** | Regras de Negócio por US: corretas mas sem código-fonte (falta motor de quiz e regra das 10 questões) | RNs | 🟠 Significativo |
| **Bruna-Oliveira** | US05 omite "tempo médio por questão"; US13 omite o limiar de 80% | RF | 🟡 Médio |
| **Bruna-Oliveira** | Regras de Negócio conceptuais (3 pilares), sem regras técnicas do código-fonte | RNs | 🟠 Significativo |
| **Bruna-Oliveira** | Detalhes sem stack tecnológica (React/Vite) ou entidades do banco de dados | Detalhes | 🟡 Médio |
| **esdras-fernando** | Arquivo contém apenas "esdras" | Todas | ⚫ Crítico |
| **iago-marinho** | Arquivo contém apenas o texto do template — nenhuma seção entregue | Todas | ⚫ Crítico |
| **marcus-vinicius** | RF05 omite "tempo médio por questão" (3º indicador do painel de estatísticas) | RF | 🟡 Médio |
| **marcus-vinicius** | RNF01 (desempenho painel stats) e RNF05 (usabilidade botão reportar) ausentes | RNF | 🟡 Médio |
| **marcus-vinicius** | Regras de Negócio não analisam código-fonte; falta motor de quiz (shuffling) e regra das 10 questões | RNs | 🟠 Significativo |

---

## Ranking Final

| Posição | Aluno | Nota | Conceito |
|---|---|---|---|
| 🥇 1º | **José-Reginaldo** | **92/100** | Excelente |
| 🥈 2º | **nicolas-vinicius** | **87/100** | Ótimo |
| 🥉 3º | **Bruna-Oliveira** | **84/100** | Ótimo |
| 4º | **nycollas-rodrigues** | **79/100** | Bom |
| 5º | **josuel-pereira** | **77/100** | Bom |
| 5º | **marcus-vinicius** | **77/100** | Bom |
| 7º | **theo22** | **75/100** | Bom |
| 8º | **franky-jr** | **64/100** | Regular |
| 9º | **Gabriel-Ernandes** | **62/100** | Regular |
| 10º | **rafael-braga** | **55/100** | Regular |
| 11º | **adriano-dmarco.md** | **46/100** | Insuficiente |
| 12º | **esdras-fernando** | **0/100** | Não entregue |
| 12º | **iago-marinho** | **0/100** | Não entregue |

---

## Avaliação de Resposta de Aluno (Fornecida Externamente)

> ⚠️ **Nota:** O conteúdo a seguir foi fornecido diretamente pelo professor para avaliação. Após busca exaustiva em todos os arquivos, todos os commits e todos os comentários de PR/issues, este conteúdo **não foi encontrado em nenhuma branch do repositório**. A avaliação foi realizada com base no conteúdo fornecido, comparado ao gabarito da branch `gabarito`. O professor deverá identificar o aluno e atribuir a nota correspondente.

### 📋 Resposta Avaliada — [Aluno não identificado] — **43/100**

| RF /30 | RNF /20 | Regras /20 | Detalhes /10 | Cloud /10 | NÃO faz /10 | **TOTAL /100** |
|---|---|---|---|---|---|---|
| 22 | 5 | 2 | 4 | 3 | 7 | **43** |

---

#### Seção 1 — RF: 22/30 🟡 Aceitável (todos os 15 mapeados, mas muito superficiais)

O aluno listou os 15 RF corretamente mapeados às 15 User Stories. O mapeamento está correto, mas **todos** os RF são extremamente breves — uma linha cada — sem especificar os detalhes técnicos que o gabarito exige.

| US | RF do aluno | Avaliação vs Gabarito | Nota |
|---|---|---|---|
| US01 — Cadastro | "O sistema deve permitir que o professor cadastre novas questões" | ⚠️ Correto mas sem detail: falta **enunciado, alternativas, resposta correta, explicação** | 1/2 |
| US02 — Cronômetro | "O sistema deve permitir que o aluno configure e utilize um cronômetro em quizzes" | ⚠️ Falta **regressivo** e os tempos específicos **(15, 30 ou 60 min)** | 1/2 |
| US03 — PDF | "O sistema deve gerar provas e permitir exportação em PDF formatado" | ⚠️ Falta o detalhe crucial: **logotipo e cabeçalho institucional** | 1/2 |
| US04 — Autenticação | "O sistema deve controlar acesso, permitindo apenas professores na área docente" | ✅ Correto — menciona "apenas professores" + "área docente" | 1.5/2 |
| US05 — Estatísticas | "O sistema deve mostrar estatísticas de desempenho do aluno" | ⚠️ Falta os **3 indicadores**: histórico de pontuações, taxa de acerto por tópico, tempo médio | 1/2 |
| US06 — Export erros | "O sistema deve permitir exportar questões erradas em CSV ou formato do Anki" | ✅ Menciona ambos os formatos (**CSV** e **Anki**) | 2/2 |
| US07 — Reportar erro | "O sistema deve permitir reportar erros nas questões" | ⚠️ Falta o **botão** diretamente no **QuizCard** | 1/2 |
| US08 — Ranking | "O sistema deve exibir ranking de alunos (leaderboard)" | ⚠️ Falta os períodos **semanal e mensal** | 1/2 |
| US09 — Favoritar | "O sistema deve permitir favoritar questões para revisão" | ✅ Correto | 2/2 |
| US10 — Filtro dificuldade | "O sistema deve permitir filtrar questões por nível de dificuldade" | ⚠️ Genérico — falta os níveis específicos: **Júnior, Pleno, Sênior** | 1/2 |
| US11 — Comentários | "O sistema deve permitir comentários nas questões" | ⚠️ Falta o conceito de **thread** (discussão encadeada) | 1.5/2 |
| US12 — API LMS | "O sistema deve disponibilizar API para exportar resultados" | ⚠️ Genérico — falta **webhook**, **LMS** e **Moodle** | 1/2 |
| US13 — LinkedIn | "O sistema deve permitir compartilhar resultados no LinkedIn" | ⚠️ Falta o limiar: **desempenho superior a 80%** | 1/2 |
| US14 — Markdown | "O sistema deve suportar Markdown e destaque de código nas questões" | ✅ Preciso — menciona "Markdown e destaque de código" | 2/2 |
| US15 — Offline | "O sistema deve funcionar offline (modo PWA com quizzes baixados)" | ✅ Menciona **PWA** e "quizzes baixados" | 2/2 |

**Destaques positivos:** US06 (menciona ambos .csv e Anki), US14 (Markdown + destaque de código), US15 (PWA explícito).
**Destaques negativos:** US01 sem detalhes, US05 sem os 3 indicadores, US08 sem semanal/mensal, US10 sem Júnior/Pleno/Sênior.

#### Seção 2 — RNF: 5/20 🔴 Genérico (sem vinculação às US do projeto)

15 RNF listados, mas **todos** são atributos de qualidade genéricos para qualquer sistema — sem nenhuma conexão com as 15 US específicas do "Mestre da Engenharia de Software 2.0":

| RNF do aluno | Análise | Cobre RNF do Gabarito? |
|---|---|---|
| RNF01: "bom desempenho" | Genérico, sem métrica (ex: "<2s") | ⚠️ Parcialmente o Gabarito RNF01 |
| RNF02: "seguro" | Genérico — Gabarito exige "apenas usuários Docente" | ⚠️ Parcialmente o Gabarito RNF02 |
| RNF03: "fácil de usar" | Usabilidade genérica | ❌ |
| RNF04: "funcionar em diferentes dispositivos" | Responsividade, sem PWA | ❌ Gabarito RNF03 exige PWA explícito |
| RNF05: "disponível na maior parte do tempo" | Disponibilidade genérica, sem SLA | ❌ |
| RNF06: "suportar muitos usuários" | Escalabilidade genérica | ❌ |
| RNF07: "integração com outros sistemas" | Interoperabilidade genérica | ⚠️ Parcialmente o Gabarito RNF06 |
| RNF08: "funcionar como aplicativo web" | **Isso é RF, não RNF** | ❌ |
| RNF09: "confiável" | 1 palavra — demasiado genérico | ❌ |
| RNF10: "sincronizar dados corretamente após uso offline" | ✅ Conecta ao US15 — o único RNF específico! | ✅ Cobre Gabarito RNF03 |
| RNF11: "proteger os dados dos usuários" | LGPD genérica | ❌ |
| RNF12: "tempo de resposta rápido" | Performance, sem contexto (painel stats) | ⚠️ Parcialmente Gabarito RNF01 |
| RNF13: "fácil manutenção e atualização" | Manutenibilidade | ❌ |
| RNF14: "boa compatibilidade com navegadores modernos" | Portabilidade/compatibilidade | ❌ |
| RNF15: "garantir integridade dos dados" | Integridade, muito vago | ❌ |

Apenas 1 RNF específico (RNF10). Os demais são rótulos de categorias de qualidade sem aplicação ao projeto.

#### Seção 3 — Regras de Negócio: 2/20 ⚫ Insuficiente (apenas papéis, sem regras)

> "O sistema é uma plataforma de avaliação e aprendizado baseada em quizzes. Professores são responsáveis por: Criar questões, Gerar provas, Acompanhar resultados. Alunos são responsáveis por: Responder quizzes, Acompanhar desempenho, Revisar conteúdos."

⚠️ **ERRO:** O aluno descreveu **papéis/responsabilidades** — não Regras de Negócio. Regras de Negócio são a **lógica central do sistema** (o que o código faz), não quem usa o sistema.

O gabarito exige análise do código-fonte, identificando:
- **Motor de Quiz** (embaralhamento dinâmico de perguntas e alternativas, anti-decoreba)
- **Correção e Feedback em Tempo Real** (avaliação imediata + exibição da resposta correta + explicação)
- **Cálculo de Desempenho** (pontuação em % → nível Junior/Pleno/Sênior/Arquiteto)
- **Gerador de Provas** (exatamente 10 questões, embaralhamento, gabarito automático)
- **Estrutura de Domínio** (entidade Questão com id, tópico, enunciado, alternativas, índice correto, explicação)

Nenhuma dessas regras foi identificada.

#### Seção 4 — Detalhes/Acessórios: 4/10 🟠 Insuficiente

O aluno mencionou:
- "Banco de dados relacional ou NoSQL para: Usuários, Questões, Resultados, Estatísticas" ✅ (boas entidades!)
- "Armazenamento de arquivos: PDFs, Exportações" ✅
- "Web app responsivo + Dashboard para alunos e professores" ✅

O que falta:
- Stack real: **React + Vite + TypeScript + Tailwind CSS**
- Estado atual: **não há banco de dados real** — os dados estão hardcoded em `constants.ts` (QUIZ_DATABASE) e o estado do usuário é em memória com `useState` (se recarregar a página, tudo se perde)
- Componentes específicos da interface (QuizCard, ExamBuilder, Header)

#### Seção 5 — Modelo Cloud: 3/10 🔴 Erro Fundamental (escolheu IaaS em vez de SaaS)

> "Escolha: IaaS (Porque?) — Professores não precisam gerenciar infraestrutura; Acesso imediato via navegador; Atualizações automáticas; Integrações mais simples (ex: API com LMS); Reduz custo e complexidade para instituições"

⚠️ **ERRO CRÍTICO DE CONFUSÃO DE MODELOS:** O aluno escolheu **IaaS** mas deu justificativas 100% corretas para **SaaS**!

- **IaaS** = Infraestrutura como Serviço → a escola AINDA gerencia servidores, OS, configurações. Ex: AWS EC2, Google Cloud VMs.
- **SaaS** = Software como Serviço → acesso via navegador sem instalação, sem gerenciar servidores, atualizações automáticas.

Os 5 argumentos dados ("não precisam gerenciar infraestrutura", "acesso via navegador", "atualizações automáticas", "integrações mais simples", "reduz custo e complexidade") são exatamente os argumentos que o **gabarito usa para SaaS**!

O aluno claramente confundiu os **nomes dos modelos** — não se trata de um simples erro de digitação, mas de uma confusão conceitual entre IaaS e SaaS. A lógica está completamente correta para SaaS, mas foi rotulada incorretamente como IaaS. **Crédito parcial concedido (3/10) pela argumentação correta, apesar da escolha de modelo errada.**

#### Seção 6 — O que NÃO faz: 7/10 🟢 Bom

5 limites definidos, todos válidos e sem contradições com os RF listados:

| Item | Avaliação |
|---|---|
| "Correção automática de questões discursivas" | ✅ Item 1 do gabarito — perfeito |
| "Inteligência artificial para geração automática de questões" | ✅ Válido — não está nas 15 US |
| "Moderação automatizada de comentários" | ✅ Válido — US11 tem comentários mas não moderação automática |
| "Sistema de pagamento ou monetização" | ✅ Item 6 do gabarito — perfeito |
| "Provas com supervisão" (proctoring) | ✅ Válido e específico — proctoring está fora do escopo |

5 itens, todos corretos. Boa seleção de limites. Nenhum contradiz os RF apresentados.

**Desconto (-3 pts):** Seção bem construída, mas podia ser mais específica ao projeto (ex: importação de turmas do LMS, OCR de gabaritos em papel, chat em tempo real, upload de vídeos).

---

> 📌 **Para o professor:** Esta avaliação usa os mesmos critérios aplicados aos demais alunos. A nota de **43/100** coloca este aluno na posição de **12º lugar** (entre adriano-dmarco com 46/100 e os alunos com 0/100). O erro mais significativo é a **confusão entre IaaS e SaaS** (seção 5) e as **Regras de Negócio completamente ausentes** (apenas papéis descritos). Os RF estão corretamente mapeados às 15 US mas são muito superficiais. O aluno demonstra entendimento básico do projeto mas sem profundidade técnica.
