1. Lista de Requisitos Funcionais (RF)

RF01 - Como analista, identifiquei que o sistema deve permitir que professores cadastrem novas questões contendo enunciado, alternativas, resposta correta e explicação.
RF02 - Identifiquei a necessidade de o sistema oferecer a opção de ativar um cronômetro regressivo com tempos configuráveis (15, 30 ou 60 minutos) antes do início de um quiz.
RF03 - Observei que o sistema deve permitir que professores exportem provas geradas em formato PDF, com formatação e cabeçalho/logo da instituição.
RF04 - Constato que o sistema deve implementar um mecanismo de autenticação e autorização que restrinja o acesso às funcionalidades de professor apenas a usuários com perfil "Docente".
RF05 - Verifico que o sistema deve exibir um painel de estatísticas semanais para alunos, mostrando histórico de pontuações e taxa de acerto por tópico.
RF06 - Entendo que o sistema deve permitir que alunos exportem as questões que erraram nos quizzes em formato compatível com Anki (.apkg ou .csv).
RF07 - Percebo que o sistema deve disponibilizar um botão "Reportar Erro" em cada questão para que usuários possam notificar administradores/professores sobre problemas.
RF08 - Analiso que o sistema deve implementar um ranking global semanal e mensal para os alunos.
RF09 - Concluo que o sistema deve permitir que alunos marquem questões como "Favoritas" e acessem posteriormente uma lista com essas questões salvas.
RF10 - Identifico que o sistema deve permitir que alunos filtrem quizzes por nível de dificuldade (Júnior, Pleno, Sênior).
RF11 - Verifico a necessidade de o sistema disponibilizar uma seção de comentários em cada questão para discussão entre os usuários.
RF12 - Constato que o sistema deve oferecer uma API REST para exportação automática de notas dos alunos, permitindo integração com sistemas LMS.
RF13 - Percebo que o sistema deve disponibilizar um botão para compartilhamento no LinkedIn quando o aluno atingir pontuação superior a 80% em um quiz.
RF14 - Analiso que o sistema deve suportar formatação Markdown e syntax highlighting no cadastro e exibição de questões que contenham trechos de código.
RF15 - Entendo que o sistema deve funcionar como PWA, permitindo que alunos baixem conjuntos de questões e respondam offline.

2. Lista de Requisitos Não Funcionais (RNF)
RNF01 (Segurança) - Defendo que o sistema deve garantir que apenas usuários autenticados e com perfil "Docente" possam acessar áreas restritas.
RNF02 (Usabilidade) - Considero que a interface de cadastro de questões deve oferecer suporte a formatação de código para facilitar a criação de perguntas técnicas.
RNF03 (Desempenho) - Avalio que o sistema deve gerar e exportar provas em PDF em tempo hábil, mesmo com grande volume de questões.
RNF04 (Disponibilidade) - Entendo que o modo offline deve sincronizar automaticamente os resultados quando o dispositivo reconectar à internet.
RNF05 (Confiabilidade) - Acredito que as notificações de erro devem ser entregues aos administradores sem perda de dados.
RNF06 (Portabilidade) - Observo que o sistema deve ser acessível via navegadores modernos em diferentes dispositivos.
RNF07 (Interoperabilidade) - Concluo que a API REST deve seguir padrões RESTful e utilizar formatos amplamente aceitos.
RNF08 (Privacidade) - Defendo que os dados dos alunos no ranking devem ser tratados sem expor informações pessoais desnecessárias.
RNF09 (Manutenibilidade) - Verifico que o sistema deve permitir configuração dinâmica dos tempos do cronômetro sem alteração de código.
RNF10 (Acessibilidade) - Considero que a interface deve seguir diretrizes de acessibilidade para usuários com deficiências.

3. Regras de Negócio

Entendo que apenas usuários com perfil "Professor" podem cadastrar, editar ou excluir questões no sistema.
Concluo que apenas usuários com perfil "Professor" podem acessar o gerador de provas e exportar PDFs.
Percebo que o sistema deve diferenciar claramente os perfis de Aluno, Professor e Administrador.
Analiso que questões reportadas como erradas devem ser revisadas por administradores antes de qualquer alteração.
Considero que o ranking deve considerar apenas quizzes completados, sem considerar respostas offline não sincronizadas.
Entendo que o conteúdo das questões é de responsabilidade dos professores que as cadastram.
Acredito que comentários em questões devem ser moderados para evitar conteúdo impróprio.

4. Detalhes (Acessórios)

Decido que os dados serão armazenados em um banco de dados centralizado na nuvem.
Opto por uma interface web, acessível via navegador em qualquer dispositivo com internet.
Estabeleço que o sistema exigirá conexão com internet para funcionalidades online, com suporte limitado a modo offline apenas para responder questões baixadas previamente.

5. Análise de Modelo de Entrega (Cloud)

Modelo escolhido: SaaS (Software as a Service)
Minha justificativa: Escolho o modelo SaaS por ser mais conveniente para professores, pois permite acesso imediato via navegador sem necessidade de instalação, configuração ou manutenção de infraestrutura própria. Entendo que professores podem utilizar a plataforma de qualquer lugar (escola, casa, laboratório) e em qualquer dispositivo, bastando uma conexão com internet. Considero que atualizações e correções feitas centralmente garantem que todos usem a versão mais recente sem esforço adicional. Percebo também que escolas não precisam arcar com custos de servidores ou equipe de TI especializada.

6. O que o sistema NÃO faz (Versão 2.0)

Com base na minha análise, delimito que nesta versão o sistema:
Não corrige provas discursivas ou dissertativas.
Não oferece videoconferência ou aulas ao vivo.
Não substitui completamente um LMS.
Não permite edição colaborativa em tempo real.
Não possui suporte a múltiplos idiomas.
Não gera questões automaticamente por IA.
Não permite upload de vídeos nas questões.
Não valida automaticamente o conteúdo das questões.