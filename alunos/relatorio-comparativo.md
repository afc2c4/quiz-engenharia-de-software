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
| **Bruna-Oliveira** | ✅ RF01–RF15 (falta US05 "tempo médio"; US13 sem 80%) | ✅ RNF01–RNF15 (excelentes) | ✅ 3 pilares conceituais | ✅ Presente | ✅ SaaS + Arquitetura PWA | ✅ 6 limites + justificativa | 🟢 Completo |
| **Gabriel-Ernandes** | ✅ RF01–RF17 | ✅ RNF01–RNF06 | ✅ Presente | ✅ Presente | ✅ SaaS | ✅ 3 limites | 🟢 Completo |
| **José-Reginaldo** | ✅ US01–US15 | ✅ US01–US15 | ✅ Detalhado (3 pilares) | ✅ Presente | ✅ SaaS + PWA justificado | ✅ 3 limites | 🟢 Completo |
| **adriano-dmarco.md** | ✅ RF01–RF15 | ✅ RNF01–RNF15 | ✅ Presente | ✅ Presente | ✅ SaaS ou IaaS | ✅ Presente | 🟢 Completo |
| **esdras-fernando** | ❌ Apenas "esdras" | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Não entregue |
| **franky-jr** | ⚠️ RF01–RF14 (genérico, não baseado nas US) | ✅ RNF01–RNF13 | ⚠️ Superficial | ✅ Presente | ✅ SaaS | ✅ 6 limites | 🟡 Parcial |
| **iago-marinho** | ❌ Apenas template ("Estou criando um nvo") | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Não entregue |
| **josuel-pereira** | ✅ US01–US15 (US10 com níveis errados) | ✅ US01–US15 (mista) | ❌ Sem seção | ✅ Presente | ⚠️ Apenas rótulo SaaS | ❌ Sem seção | 🟡 Parcial |
| **marcus-vinicius** | ✅ RF01–RF15 (falta RF05 completo) | ✅ RNF01–RNF10 | ✅ 7 regras específicas | ✅ Presente | ✅ SaaS | ✅ 8 limites | 🟢 Completo |
| **nicolas-vinicius** | ✅ US01–US15 | ✅ US01–US15 | ✅ Detalhado | ✅ Presente | ✅ SaaS | ✅ Presente | 🟢 Completo |
| **nycollas-rodrigues** | ✅ RF01–RF15 (100%, com detalhes precisos) | ✅ RNF01–RNF11 | ✅ Presente | ✅ Presente | ✅ SaaS | ✅ 7 limites | 🟢 Completo |
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

**Arquivo**: `alunos/Bruna-Oliveiraa.md` (com duplo 'aa')  
**Branch**: `Bruna-Oliveira`  
**Status**: 🟢 Completo — submissão completa com todas as 6 seções

> ⚠️ **Correção:** Avaliação anterior foi baseada em `Bruna-Oliveira.md` (incompleto, US01–US05 apenas). A branch também contém `Bruna-Oliveiraa.md` com a submissão real e completa.

#### Destaques:
- RF01–RF15 todos entregues em formato de benefícios para o usuário ("Autonomia para o professor…", "Canal direto para reportar…").
- RNF01–RNF15 **excepcionalmente técnicos**: PDF/A, XSS sanitization, IndexedDB, Service Workers, Rate Limiting com Swagger, Open Graph, Lazy Loading — nível mais alto desta turma.
- Regras de Negócio: 3 pilares conceituais: "Curadoria de Conhecimento Estruturado", "Simulação de Desempenho Sob Pressão", "Ciclo de Feedback e Diagnóstico".
- Modelo Cloud: **SaaS** com análise de dois níveis — arquitetura PWA (PWA delivery + CDN) + 4 argumentos para o professor.
- O que NÃO faz: 6 limites específicos (Sandboxing, Proctoring, IA) + "Justificativa do Analista".

#### Diferenças em relação ao gabarito:
- RF05 omite "tempo médio por questão" (3º indicador do painel de estatísticas).
- RF13 omite o limiar de 80% explícito no LinkedIn.
- Regras de Negócio são conceptuais (3 pilares), sem derivação técnica do código-fonte.
- Detalhes/Acessórios muito breve, sem stack tecnológica.

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

### 🌿 iago-marinho

**Arquivo**: `alunos/iago-marinho.md`  
**Branch**: `iago-marinho`  
**Status**: 🔴 Não entregue

O arquivo contém apenas o texto do template padrão: *"# Estou criando um nvo — Vou escrever minhas respostas aqui."* Blob idêntico ao `novo-aluno.md`. **Nenhuma seção foi preenchida.**

---

### 🌿 josuel-pereira

**Arquivo**: `alunos/josuel-pereira.md`  
**Status**: 🟡 Parcial — RF e RNF completos (US01–US15), mas sem Regras, Cloud justificado, ou Escopo

> ⚠️ **Correção:** Avaliação anterior registrou "apenas US01–US03 desenvolvidas" — isso estava incorreto. O arquivo contém todas as 15 User Stories com RF e RNF.

#### Destaques:
- US01–US15 todos presentes com RF e RNF bem estruturados por User Story.
- US05 completo — menciona "tempo médio de resposta por questão" ✅ (que muitos alunos omitiram).
- US07 usa o nome correto "QuizCard" ✅.
- US13 menciona o limiar de 80% ✅.

#### Diferenças em relação ao gabarito:
- US10 usa "Fácil, Médio, Difícil" em vez de "Júnior, Pleno, Sênior" — nomenclatura genérica, não do domínio.
- Sem seção "Regras de Negócio" — completamente ausente.
- Cloud: apenas o rótulo "Software as a Service (SaaS)" sem nenhuma justificativa.
- Sem seção "O que NÃO faz".
- Detalhes/Acessórios brevíssimos (banco de dados na nuvem + interface web).

---

### 🌿 marcus-vinicius

**Arquivo**: `alunos/marcus-vinicius.md`  
**Status**: 🟢 Completo — submissão completa com todas as 6 seções

> ⚠️ **Correção:** Avaliação anterior registrava "arquivo contém apenas 'marcusvinicius'" — isso estava incorreto. O arquivo contém uma submissão completa.

#### Destaques:
- RF e RNF mapeados 1-a-1 com as 15 User Stories (US01–US15), usando linguagem de analista ("identifiquei que...", "verifico que...").
- Detalhes técnicos corretos: níveis **"Júnior, Pleno, Sênior"** ✅, limiar **80%** no LinkedIn ✅, formato **.apkg/.csv** na exportação ✅, **PWA** no modo offline ✅.
- 10 RNF com categorias bem nomeadas (Segurança, Usabilidade, Desempenho, Disponibilidade, Confiabilidade, Portabilidade, Interoperabilidade, Privacidade, Manutenibilidade, Acessibilidade).
- 7 regras de negócio específicas, incluindo regras de governança relevantes: revisão de erros reportados por administrador (regra 4) e ranking apenas com quizzes completados sincronizados (regra 5).
- Modelo Cloud: **SaaS** com 4 argumentos centrados no professor — uma das melhores justificativas desta seção.
- O que NÃO faz: **8 limites** válidos, todos sem contradições com os RF.

#### Diferenças em relação ao gabarito:
- RF05 (US05 — painel de estatísticas) omite o 3º indicador: "tempo médio por questão".
- RNF01 do gabarito (desempenho do painel de estatísticas) não coberto — RNF03 de Marcus cobre velocidade de PDF, não do painel.
- RNF05 do gabarito (usabilidade: botão reportar no QuizCard) não mapeado.
- Regras de Negócio sem análise do código-fonte; faltam as regras do motor de quiz (embaralhamento, cálculo de nível) e do Gerador de Provas (exatamente 10 questões).
- Detalhes/Acessórios genéricos, sem tech stack ou entidades do banco de dados.

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

### 🌿 nycollas-rodrigues

**Arquivo**: `alunos/nyckzx.md`  
**Status**: 🟢 Completo — RF perfeitos, cobertura completa e precisa

#### Destaques:
- **Único aluno a obter 30/30 nos RF** — todos os 15 RF mapeados às User Stories com detalhes técnicos corretos, incluindo os mais exigentes: níveis de dificuldade como "Junior, Pleno, Senior" (não "Fácil/Médio/Difícil"), limiar ≥80% no compartilhamento do LinkedIn, e PWA no modo offline.
- 11 RNF listados com categorias bem nomeadas (Desempenho, Segurança, Usabilidade, Escalabilidade, Interoperabilidade, Portabilidade, etc.).
- Regras de Negócio: identifica as regras principais (correção automática, registro de desempenho, controle de acesso), mas sem análise do código-fonte.
- Modelo Cloud: **SaaS** — justificativa centrada no professor (sem configurar servidores), com atualizações automáticas e acesso remoto.
- O que NÃO faz: **7 limites** corretos e sem contradições (melhor cobertura desta seção).

#### Diferenças em relação ao gabarito:
- RNF05 do gabarito (usabilidade: botão reportar erro diretamente no QuizCard) não foi mapeado como RNF.
- RNF07 do gabarito (suporte a Markdown e Syntax Highlighting como restrição de qualidade) ausente como RNF.
- Regras de Negócio não analisam o código-fonte para extrair o motor de quiz (embaralhamento, cálculo de desempenho) e a regra das exatamente 10 questões no Gerador de Provas.

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
| Bruna-Oliveira | 15 | ✅ 97% | Falta "tempo médio" em US05 e limiar 80% em US13 |
| Gabriel-Ernandes | 17 | ✅ ~100% | Extras genéricos adicionados |
| iago-marinho | 0 | ❌ 0% | Apenas template |
| José-Reginaldo | 15 | ✅ 100% | Alinhado ao gabarito |
| adriano-dmarco.md | 15 | ✅ 100% | Alinhado |
| esdras-fernando | 0 | ❌ 0% | Não entregue |
| franky-jr | 14 | ❌ 0% das US | Genérico, não baseado nas US |
| josuel-pereira | 15 | ✅ 95% | US10 com níveis de dificuldade errados (Fácil/Médio/Difícil) |
| marcus-vinicius | 15 | ✅ 97% | RF05 incompleto (falta "tempo médio por questão") |
| nicolas-vinicius | 15 | ✅ 100% | Alinhado ao gabarito |
| nycollas-rodrigues | 15 | ✅ 100% | Alinhado ao gabarito, com detalhes técnicos mais precisos |
| rafael-braga | 14 | ⚠️ 93% | Faltou RF14 (Markdown) |
| theo22 | 15 | ✅ 100% | Alinhado ao gabarito |

### Modelo de Entrega Cloud

| Aluno | Escolha | Justificativa |
|---|---|---|
| alexandre-ferreira (gabarito) | SaaS | Baseada no código-fonte (SPA/React/Vite), praticidade para professor |
| Bruna-Oliveira | SaaS | 2 níveis: arquitetura PWA (CDN, interoperabilidade) + 4 argumentos para o professor |
| Gabriel-Ernandes | SaaS | Praticidade, sem instalação, atualizações automáticas |
| iago-marinho | — | Não entregue |
| José-Reginaldo | SaaS + PWA | Justificativa técnica mais completa (CDN, CI/CD, Offline-First, API Portal) |
| adriano-dmarco.md | SaaS ou IaaS | Resposta dúbia sem conclusão definitiva |
| esdras-fernando | — | Não entregue |
| franky-jr | SaaS | Justificativa presente, simplificada |
| josuel-pereira | SaaS | Apenas rótulo, sem justificativa |
| marcus-vinicius | SaaS | 4 argumentos focados no professor (excelente justificativa) |
| nicolas-vinicius | SaaS | Justificativa presente |
| nycollas-rodrigues | SaaS | Justificativa centrada no professor, sem instalação de servidores |
| rafael-braga | SaaS | Justificativa superficial |
| theo22 | SaaS + PWA | 4 argumentos voltados ao professor (mais detalhado que o gabarito) |

---

## Pontuação Final (rubrica proporcional de 100 pts)

> Detalhamento completo com critérios, erros e classificação de qualidade em [`notas-e-avaliacao.md`](./notas-e-avaliacao.md)

| Posição | Aluno | Nota /100 | Conceito |
|---|---|---|---|
| 🥇 1º | **José-Reginaldo** | **92** | Excelente |
| 🥈 2º | **nicolas-vinicius** | **87** | Ótimo |
| 🥉 3º | **Bruna-Oliveira** | **84** | Ótimo |
| 4º | **nycollas-rodrigues** | **79** | Bom |
| 5º | **marcus-vinicius** | **77** | Bom |
| 6º | **theo22** | **75** | Bom |
| 7º | **Gabriel-Ernandes** | **62** | Regular |
| 8º | **josuel-pereira** | **44** | Insuficiente |
| 9º | **adriano-dmarco.md** | **43** | Insuficiente |
| 10º | **rafael-braga** | **37** | Insuficiente |
| 11º | **franky-jr** | **18** | Reprovado |
| 12º | **esdras-fernando** | **0** | Não entregue |
| 12º | **iago-marinho** | **0** | Não entregue |
