# Relatório Comparativo de Respostas por Branch

> Comparação das respostas de cada aluno em relação ao gabarito (branch `gabarito`).
> O arquivo de referência completo está em `alunos/alexandre-ferreira.md` na branch `gabarito`.
>
> 📊 **Para notas detalhadas com rubrica proporcional, identificação de lero lero e erros específicos, veja [`notas-e-avaliacao.md`](./notas-e-avaliacao.md)**

---

## Resumo Geral

| Aluno (Branch) | RF (1–15) | RNF | Regras de Negócio | Detalhes/Acessórios | Modelo Cloud | O que NÃO faz | Status |
|---|---|---|---|---|---|---|---|
| **alexandre-ferreira** (gabarito) | ✅ RF01–RF15 | ✅ RNF01–RNF07 | ✅ Detalhado | ✅ Detalhado | ✅ SaaS — justificado | ✅ 6 limites definidos | 🟢 Completo |
| **Bruna-Oliveira** | ⚠️ US01–US05 (incompleto) | ❌ Não entregue | ❌ Não entregue | ❌ Não entregue | ❌ Não entregue | ❌ Não entregue | 🔴 Incompleto |
| **Gabriel-Ernandes** | ✅ RF01–RF17 | ✅ RNF01–RNF06 | ✅ Presente | ✅ Presente | ✅ SaaS | ✅ 3 limites | 🟢 Completo |
| **José-Reginaldo** | ✅ US01–US15 | ✅ US01–US15 | ✅ Detalhado (3 pilares) | ✅ Presente | ✅ SaaS + PWA justificado | ✅ 3 limites | 🟢 Completo |
| **adriano-dmarco.md** | ✅ RF01–RF15 | ✅ RNF01–RNF15 | ✅ Presente | ✅ Presente | ✅ SaaS ou IaaS | ✅ Presente | 🟢 Completo |
| **esdras-fernando** | ❌ Apenas "esdras" | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Não entregue |
| **franky-jr** | ⚠️ RF01–RF14 (genérico, não baseado nas US) | ✅ RNF01–RNF13 | ⚠️ Superficial | ✅ Presente | ✅ SaaS | ✅ 6 limites | 🟡 Parcial |
| **josuel-pereira** | ⚠️ Apenas US01–US03 (estrutura diferente) | ⚠️ Apenas US01–US03 | ❌ | ❌ | ❌ | ❌ | 🔴 Incompleto |
| **marcus-vinicius** | ❌ Apenas "marcusvinicius" | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Não entregue |
| **nicolas-vinicius** | ✅ US01–US15 | ✅ US01–US15 | ✅ Detalhado | ✅ Presente | ✅ SaaS | ✅ Presente | 🟢 Completo |
| **rafael-braga** | ✅ RF01–RF15 (falta RF14) | ✅ RNF01–RNF09 | ⚠️ Superficial | ✅ Presente | ✅ SaaS | ✅ 3 limites | 🟡 Parcial |
| **theo22** | ✅ US01–US15 | ✅ US01–US15 | ⚠️ Parcial | ✅ Detalhado | ✅ SaaS + PWA justificado | ✅ 4 limites | 🟢 Completo |

---

## Gabarito — Branch `gabarito` (Alexandre Ferreira)

### 1. Requisitos Funcionais (RF01–RF15)

| RF | Descrição |
|---|---|
| RF01 | Cadastro de Questões pelo professor (enunciado, alternativas, resposta correta, explicação) |
| RF02 | Suporte a Markdown e Syntax Highlighting na interface de cadastro/leitura |
| RF03 | Cronômetro regressivo configurável (15, 30 ou 60 min) antes do quiz |
| RF04 | Exportação de provas em PDF com logotipo/cabeçalho institucional |
| RF05 | Autenticação e Controle de Acesso — apenas perfil "Docente" acessa área do professor |
| RF06 | Painel de Estatísticas semanal (pontuações, taxa de acerto por tópico, tempo médio) |
| RF07 | Exportação de questões erradas para .apkg (Anki) ou .csv |
| RF08 | Botão "Reportar Erro" diretamente no QuizCard |
| RF09 | Ranking Global (Leaderboard) com filtros semanal e mensal |
| RF10 | Favoritar Questões para revisão posterior |
| RF11 | Filtro por Nível de Dificuldade (Junior, Pleno, Senior) |
| RF12 | Seção de Comentários (thread) por questão |
| RF13 | API de Integração com LMS (ex.: Moodle) via endpoint/webhook |
| RF14 | Compartilhamento de resultado no LinkedIn (desempenho > 80%) |
| RF15 | Modo Offline (PWA) — download de questões para uso sem internet |

### 2. Requisitos Não Funcionais (RNF01–RNF07)

| RNF | Descrição |
|---|---|
| RNF01 | Carregamento instantâneo dos gráficos do painel de estatísticas |
| RNF02 | Segurança — acesso à área do professor restrito a usuários "Docente" autenticados |
| RNF03 | Portabilidade e Disponibilidade Offline (PWA) |
| RNF04 | Formatação específica do PDF (logotipo + cabeçalho institucional) |
| RNF05 | Usabilidade — botão de reportar erro diretamente no QuizCard |
| RNF06 | Interoperabilidade via API REST/webhooks para integração com LMS |
| RNF07 | Suporte a Markdown e Syntax Highlighting |

### 3. Regras de Negócio

- **Motor de Resolução de Quizzes**: embaralhamento dinâmico, correção e feedback em tempo real, cálculo e classificação de desempenho.
- **Gerador de Provas**: seleção/filtragem de questões, regra de exatamente 10 questões, embaralhamento, geração automática de gabarito.
- **Estrutura Abstrata de Domínio**: entidade questão com id, tópico, pergunta, alternativas, resposta correta e explicação.

### 4. Modelo de Entrega Cloud

**SaaS** — justificativa: arquitetura front-end pronta para web (SPA/React/Vite), elimina atrito técnico de instalação para o professor, acesso imediato via URL.

### 5. O que o sistema NÃO faz

- Não suporta questões discursivas/abertas.
- Não corrige provas físicas (sem OCR).
- Não importa dados do LMS (apenas exporta).
- Não tem chat em tempo real ou DMs entre usuários.
- Não suporta upload de vídeos/áudios nos enunciados.
- Não faz gestão financeira ou monetização.

---

## Respostas por Branch

---

### 🌿 Bruna-Oliveira

**Arquivo**: `alunos/Bruna-Oliveira.md`  
**Status**: 🔴 Incompleto — apenas 5 requisitos funcionais entregues

#### RF entregues (incompleto — apenas US01–US05):
- US01 — Cadastro de questões pelo professor ✅
- US02 — Cronômetro configurável ✅
- US03 — Geração de PDF formatado ✅
- US04 — Restrição de acesso ao perfil "Docente" ✅
- US05 — Painel de estatísticas com alta performance ✅

**Seções ausentes**: RNF, Regras de Negócio, Detalhes, Modelo Cloud, O que NÃO faz.

---

### 🌿 Gabriel-Ernandes

**Arquivo**: `alunos/Gabriel-Ernandes` (sem extensão .md)  
**Status**: 🟢 Completo

#### Destaques:
- Listou **RF01–RF17** (2 a mais que o gabarito) — incluiu RF de responsividade e compatibilidade com navegadores.
- RNF focados em desempenho, segurança, usabilidade e escalabilidade (RNF01–RNF06).
- Regras de Negócio: identificou os 3 papéis (professor, aluno, sistema de pontuação).
- Modelo Cloud: **SaaS** — justificou por praticidade e ausência de instalação.
- O que NÃO faz: não corrige discursivas, não substitui o Moodle, não cria cursos completos.

#### Diferenças em relação ao gabarito:
- RF02 (Markdown) foi posicionado como RF16, não como RF02.
- RF15 (Modo Offline) descrito como RF17.
- RNF não são mapeados 1-a-1 com as User Stories (mais genéricos que o gabarito).

---

### 🌿 José-Reginaldo

**Arquivo**: `alunos/José-Reginaldo.md`  
**Status**: 🟢 Completo — estrutura e conteúdo alinhados com o gabarito

#### Destaques:
- Mapeou os 15 RF diretamente às User Stories (US01–US15) com precisão técnica.
- RNF também mapeados 1-a-1 com as US, com detalhes técnicos (RBAC, PDF/A, Cache, Service Workers, Rate Limiting, Lazy Loading, Open Graph, XSS sanitization).
- Regras de Negócio: 3 pilares — Gestão do Conhecimento, Ciclo de Avaliação, Inteligência de Desempenho.
- Modelo Cloud: **SaaS + PWA** — justificativa mais detalhada do que o gabarito (CI/CD, CDN, Offline-First, API Portal).
- O que NÃO faz: 3 limites bem definidos (sem discursivas, sem compilador, sem billing).

#### Diferenças em relação ao gabarito:
- Mais detalhes técnicos nos RNF (alinhamento técnico mais alto).
- Modelo de entrega ampliado com estratégia de CI/CD e CDN.

---

### 🌿 adriano-dmarco.md

**Arquivo**: `alunos/adriano-dmarco.md`  
**Status**: 🟢 Completo

#### Destaques:
- RF01–RF15 bem descritos, com linguagem clara orientada ao usuário.
- RNF01–RNF15 mapeados para cada RF (mais detalhados do que o gabarito nos RNF).
- Regras de Negócio: identificou a função central do app (quiz/revisão interativo).
- Modelo Cloud: respondeu **SaaS ou IaaS** dependendo da necessidade — justificativa menos objetiva que o gabarito.
- O que NÃO faz: presente, mas com exemplo equivocado ("não tem cronômetro" — contradiz RF03).

#### Diferenças em relação ao gabarito:
- RNF mais numerosos (15 vs 7), mas alguns são redundantes.
- Modelo Cloud com resposta dúbia (SaaS ou IaaS) — gabarito é definitivo pelo SaaS.
- Último ponto do "O que NÃO faz" está incorreto (o sistema sim tem cronômetro conforme RF03).

---

### 🌿 esdras-fernando

**Arquivo**: `alunos/esdras-fernando.md`  
**Status**: 🔴 Não entregue

O arquivo contém apenas o texto `"esdras"`. Nenhuma seção foi preenchida.

---

### 🌿 franky-jr

**Arquivo**: `alunos/franky-jr` (sem extensão .md)  
**Status**: 🟡 Parcial — conteúdo genérico, não baseado nas User Stories do projeto

#### Destaques:
- RF01–RF14 descritos, mas de forma genérica (cadastro, login, recuperação de senha, CRUD) — **não se baseou nas 15 US fornecidas**.
- RNF01–RNF13 com boas práticas de qualidade (desempenho, segurança, LGPD).
- Regras de Negócio: mencionadas mas não detalhadas.
- Modelo Cloud: **SaaS** — justificativa presente.
- O que NÃO faz: 6 limites definidos (NS01–NS06).

#### Diferenças em relação ao gabarito:
- Os requisitos funcionais não refletem as User Stories do projeto (RF são genéricos de um CRUD padrão).
- Não há menção ao Cronômetro, PDF institucional, Leaderboard, Favoritos, Markdown ou Modo Offline do projeto real.

---

### 🌿 josuel-pereira

**Arquivo**: `alunos/josuel-pereira.md`  
**Status**: 🔴 Incompleto — apenas US01–US03 foram desenvolvidas

#### O que foi entregue:
- US01: RF + RNF para cadastro de questões pelo professor ✅
- US02: RF + RNF para cronômetro regressivo ✅
- US03: apenas o título foi listado (sem desenvolvimento)

**Seções ausentes**: US04–US15, Regras de Negócio, Detalhes, Modelo Cloud, O que NÃO faz.

---

### 🌿 marcus-vinicius

**Arquivo**: `alunos/marcus-vinicius.md`  
**Status**: 🔴 Não entregue

O arquivo contém apenas o texto `"marcusvinicius"`. Nenhuma seção foi preenchida.

---

### 🌿 nicolas-vinicius

**Arquivo**: `alunos/nicolas-melo.md`  
**Status**: 🟢 Completo — estrutura e conteúdo alinhados com o gabarito

#### Destaques:
- RF e RNF mapeados 1-a-1 com as 15 User Stories (US01–US15) com precisão.
- Regras de Negócio: identificou 4 pilares (Gestão de questões, Execução de quizzes, Feedback/revisão, Controle de acesso + Gamificação).
- Modelo Cloud: **SaaS** — justificativa presente (sem necessidade de instalação, atualizações automáticas).
- O que NÃO faz: 4 limites listados.

#### Diferenças em relação ao gabarito:
- RNF descritos como restrições de qualidade por US (similar ao gabarito em estrutura).
- Regras de Negócio levemente mais resumidas que o gabarito.

---

### 🌿 rafael-braga

**Arquivo**: `alunos/rafael-braga.md`  
**Status**: 🟡 Parcial — faltou RF14 (Markdown/Syntax Highlighting) e alguns RNF

#### Destaques:
- RF01–RF15 listados (RF14 da US14 — Markdown — foi omitido; RF15 presente).
- RNF01–RNF09 com boa cobertura das principais restrições.
- Regras de Negócio: superficial (apenas 6 itens genéricos de autenticação/CRUD).
- Modelo Cloud: **SaaS** — justificado brevemente.
- O que NÃO faz: 3 limites definidos — inclui ponto equivocado ("o sistema não ranqueará perfis" — contradiz RF09 sobre Leaderboard).

#### Diferenças em relação ao gabarito:
- RF14 (US14 — Markdown e Syntax Highlighting) foi omitido na lista de RF.
- "O que NÃO faz" inclui limite sobre ranqueamento, contradizendo o RF09 (Leaderboard) do próprio documento.
- Regras de Negócio não analisam o código-fonte do app.

---

### 🌿 theo22

**Arquivo**: `alunos/Theo22` (sem extensão .md)  
**Status**: 🟢 Completo — estrutura alinhada com o gabarito

#### Destaques:
- RF e RNF mapeados 1-a-1 com as 15 User Stories (US01–US15).
- Regras de Negócio: mencionou apenas "Gestão do Banco de Questões" — mais resumido que o gabarito.
- Detalhes/Acessórios: mencionou banco relacional (SQL) + SPA responsiva + PWA.
- Modelo Cloud: **SaaS + PWA** — justificativa detalhada com 4 argumentos voltados ao professor (centralização, acesso imediato, abstração de manutenção, escalabilidade em picos).
- O que NÃO faz: 4 limites bem definidos (sem discursivas, sem proctoring, sem geração por IA, sem gestão financeira).

#### Diferenças em relação ao gabarito:
- Regras de Negócio mais resumidas (apenas 1 pilar listado vs 3 do gabarito).
- RNF15 é duplicado de RF15 (modo offline mencionado duas vezes).

---

## Análise Comparativa por Seção

### Requisitos Funcionais

| Aluno | Quantidade de RF | Cobertura das 15 US | Observação |
|---|---|---|---|
| alexandre-ferreira (gabarito) | 15 | ✅ 100% | Referência |
| Bruna-Oliveira | 5 | ⚠️ 33% | Incompleto |
| Gabriel-Ernandes | 17 | ✅ ~100% | Extras genéricos adicionados |
| José-Reginaldo | 15 | ✅ 100% | Alinhado ao gabarito |
| adriano-dmarco.md | 15 | ✅ 100% | Alinhado |
| esdras-fernando | 0 | ❌ 0% | Não entregue |
| franky-jr | 14 | ❌ 0% das US | Genérico, não baseado nas US |
| josuel-pereira | ~3 | ⚠️ 20% | Incompleto |
| marcus-vinicius | 0 | ❌ 0% | Não entregue |
| nicolas-vinicius | 15 | ✅ 100% | Alinhado ao gabarito |
| rafael-braga | 14 | ⚠️ 93% | Faltou RF14 (Markdown) |
| theo22 | 15 | ✅ 100% | Alinhado ao gabarito |

### Modelo de Entrega Cloud

| Aluno | Escolha | Justificativa |
|---|---|---|
| alexandre-ferreira (gabarito) | SaaS | Baseada no código-fonte (SPA/React/Vite), praticidade para professor |
| Bruna-Oliveira | — | Não entregue |
| Gabriel-Ernandes | SaaS | Praticidade, sem instalação, atualizações automáticas |
| José-Reginaldo | SaaS + PWA | Justificativa técnica mais completa (CDN, CI/CD, Offline-First, API Portal) |
| adriano-dmarco.md | SaaS ou IaaS | Resposta dúbia sem conclusão definitiva |
| esdras-fernando | — | Não entregue |
| franky-jr | SaaS | Justificativa presente, simplificada |
| josuel-pereira | — | Não entregue |
| marcus-vinicius | — | Não entregue |
| nicolas-vinicius | SaaS | Justificativa presente |
| rafael-braga | SaaS | Justificativa superficial |
| theo22 | SaaS + PWA | 4 argumentos voltados ao professor (mais detalhado que o gabarito) |

---

## Pontuação Final (rubrica proporcional de 100 pts)

> Detalhamento completo com critérios, erros e classificação de qualidade em [`notas-e-avaliacao.md`](./notas-e-avaliacao.md)

| Posição | Aluno | Nota /100 | Conceito |
|---|---|---|---|
| 🥇 1º | **José-Reginaldo** | **92** | Excelente |
| 🥈 2º | **nicolas-vinicius** | **87** | Ótimo |
| 🥉 3º | **theo22** | **75** | Bom |
| 4º | **Gabriel-Ernandes** | **62** | Regular |
| 5º | **adriano-dmarco.md** | **43** | Insuficiente |
| 6º | **rafael-braga** | **37** | Insuficiente |
| 7º | **franky-jr** | **18** | Reprovado |
| 8º | **josuel-pereira** | **7** | Reprovado |
| 9º | **Bruna-Oliveira** | **5** | Reprovado |
| 10º | **esdras-fernando** | **0** | Não entregue |
| 10º | **marcus-vinicius** | **0** | Não entregue |
