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
| **josuel-pereira** | 26 | 13 | 0 | 4 | 1 | 0 | **44** |
| **adriano-dmarco.md** | 24 | 10 | 3 | 2 | 3 | 1 | **43** |
| **rafael-braga** | 20 | 7 | 3 | 4 | 3 | 0 | **37** |
| **franky-jr** | 0 | 5 | 0 | 5 | 7 | 1 | **18** |
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

### 🟠 josuel-pereira — **44/100**

**Arquivo**: `alunos/josuel-pereira.md`

> ⚠️ **Correção:** Avaliação anterior registrou "apenas US01–US02 completas; restante não entregue" — isso estava incorreto. O arquivo contém todas as 15 User Stories com RF e RNF completos.

#### Seção 1 — RF: 26/30 🟡 Aceitável

Todos os 15 RF mapeados 1-a-1 com as User Stories. Linguagem objetiva e clara.

| RF | Avaliação | Nota |
|---|---|---|
| US01 — Cadastro de questões | Preciso: "enunciado, alternativas, resposta correta, explicação" | 2/2 |
| US02 — Cronômetro | Preciso: "cronômetro regressivo... (ex: 15, 30 ou 60 minutos)" | 2/2 |
| US03 — PDF | Preciso: "PDF... logotipo e cabeçalho da instituição" | 2/2 |
| US04 — Autenticação | Preciso: "restringir o acesso... apenas a usuários com perfil 'Docente'" | 2/2 |
| US05 — Estatísticas | Completo: "histórico de pontuações", "taxa de acerto por tópico", "tempo médio de resposta por questão" ✅ | 2/2 |
| US06 — Export erros | Preciso: ".apkg e .csv" ✅ | 2/2 |
| US07 — Reportar erro | Preciso: "botão 'Reportar Erro' em cada questão (QuizCard)" — usa nome correto "QuizCard" ✅ | 2/2 |
| US08 — Ranking | Preciso: "semanal e mensal" ✅ | 2/2 |
| US09 — Favoritar | Preciso: "marcar questões como favoritas... lista de questões favoritas" ✅ | 2/2 |
| US10 — Filtro dificuldade | ❌ Usa "Fácil, Médio, Difícil" em vez de **"Júnior, Pleno, Sênior"** — níveis errados | 1/2 |
| US11 — Comentários | Preciso: "thread de comentários associada a cada questão" ✅ | 2/2 |
| US12 — API LMS | Preciso: "API ou webhook... integração com sistemas externos como o Moodle" ✅ | 2/2 |
| US13 — LinkedIn | Aceitável: "LinkedIn quando o usuário atingir desempenho superior a... (ex: 80%)" ✅ | 2/2 |
| US14 — Markdown | Preciso: "formatação em Markdown" + "syntax highlighting em trechos de código" ✅ | 2/2 |
| US15 — Offline | Completo: "baixar conjunto de questões... responder sem conexão... sincronizar dados" ✅ | 1/2 |

**Desconto (-4 pts):** US10 usa nomenclatura de dificuldade genérica ("Fácil/Médio/Difícil") em vez dos níveis de senioridade do domínio ("Júnior/Pleno/Sênior"). US15 menciona os 3 aspectos corretos mas de forma mecânica sem mencionar PWA explicitamente.

#### Seção 2 — RNF: 13/20 🟡 Aceitável

15 RNF mapeados, um por US. Qualidade variada — alguns técnicos, outros genéricos.

| RNF do Gabarito | Coberto por Josuel | Avaliação |
|---|---|---|
| RNF01 — Desempenho painel stats | RNF-US05: "carregar instantaneamente, independentemente do volume de dados" ✅ | ✅ Coberto |
| RNF02 — Segurança/Docente | RNF-US04: "garantir que usuários não autorizados não acessem" + "mecanismos seguros de autenticação" ✅ | ✅ Coberto |
| RNF03 — Portabilidade/Offline | RNF-US15: "funcionar mesmo sem conexão... suporte PWA... sincronizar corretamente" ✅ | ✅ Coberto |
| RNF04 — Formatação PDF | RNF-US03: "manter formatação consistente" — genérico, sem PDF/A ou logotipo ⚠️ | ⚠️ Parcial |
| RNF05 — Usabilidade botão reportar | RNF-US07: "facilmente acessível durante o quiz" + "armazenar relatórios com informações para identificação da questão" ✅ | ✅ Coberto |
| RNF06 — Interoperabilidade API | RNF-US12: "compatível com APIs externas e padrões de integração" ✅ | ✅ Coberto |
| RNF07 — Markdown | RNF-US14: "suporte a padrões comuns de Markdown", "destaque de sintaxe para diferentes linguagens" ✅ | ✅ Coberto |

6 de 7 gabarito RNF cobertos; alguns RNF adicionais são genéricos ("simples de usar", "fácil acesso") mas não há contradições.

#### Seção 3 — Regras de Negócio: 0/20 ⚫ Não entregue

Não há seção dedicada a Regras de Negócio. A única menção é no RNF-US01 ("Apenas usuários com perfil de professor podem cadastrar questões"), que está na seção errada e é insuficiente.

#### Seção 4 — Detalhes/Acessórios: 4/10 🟠 Insuficiente

Menciona: banco de dados na nuvem, dados offline sincronizados, interface web acessível por navegador. Correto mas muito genérico.

**Desconto (-6 pts):** Sem stack tecnológica, sem entidades do banco de dados, sem descrição de telas ou recursos visuais.

#### Seção 5 — Modelo Cloud: 1/10 🔴 Insuficiente

Apenas o rótulo: **"Software as a Service (SaaS)"** — sem nenhuma justificativa.

#### Seção 6 — O que NÃO faz: 0/10 ⚫ Não entregue

Seção não presente no arquivo.

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

O arquivo `alunos/iago-marinho.md` contém apenas o texto do template padrão:
> *"# Estou criando um nvo\n\nVou escrever minhas respostas aqui."*

O blob é idêntico ao `alunos/novo-aluno.md` (template). **Nenhuma seção foi entregue.**

---

### ⚫ esdras-fernando — **0/100**

O arquivo `alunos/esdras-fernando.md` contém apenas a palavra `"esdras"`. **Nenhuma seção foi entregue.**

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
| **nycollas-rodrigues** | RNF04 cobre velocidade de exportação mas omite formatação com cabeçalho institucional | RNF | 🟡 Médio |
| **nycollas-rodrigues** | RNF05 (usabilidade botão reportar no QuizCard) e RNF07 (Markdown/Syntax Highlighting) ausentes como RNF | RNF | 🟡 Médio |
| **nycollas-rodrigues** | Regras de Negócio não analisam código-fonte; falta quiz engine (shuffling) e regra das 10 questões | RNs | 🟠 Significativo |
| **nicolas-vinicius** | RNF04 classifica restrição de acesso como RNF em vez de RF/política | RNF | 🟢 Leve |
| **theo22** | Regras de Negócio com apenas 1 frase — seção criticamente incompleta | RNs | 🔴 Grave |
| **theo22** | RNF15 é duplicata exata do RF15 | RNF | 🟡 Médio |
| **josuel-pereira** | US10 usa "Fácil, Médio, Difícil" em vez de "Júnior, Pleno, Sênior" | RF | 🟠 Significativo |
| **josuel-pereira** | Seções Regras de Negócio e O que NÃO faz ausentes; Cloud sem justificativa | RNs/Cloud/Escopo | 🔴 Grave |
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
| 5º | **marcus-vinicius** | **77/100** | Bom |
| 6º | **theo22** | **75/100** | Bom |
| 7º | **Gabriel-Ernandes** | **62/100** | Regular |
| 8º | **josuel-pereira** | **44/100** | Insuficiente |
| 9º | **adriano-dmarco.md** | **43/100** | Insuficiente |
| 10º | **rafael-braga** | **37/100** | Insuficiente |
| 11º | **franky-jr** | **18/100** | Reprovado |
| 12º | **esdras-fernando** | **0/100** | Não entregue |
| 12º | **iago-marinho** | **0/100** | Não entregue |
