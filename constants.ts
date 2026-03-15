
import { Question } from './types';

export const QUIZ_DATABASE: Question[] = [
  {
    id: 'es1-1',
    topic: 'Engenharia de Software',
    question: 'Sobre a natureza das falhas em sistemas computacionais, assinale a alternativa correta:',
    options: [
      'O hardware sofre desgaste físico com o tempo, enquanto o software se deteriora devido a constantes modificações.',
      'O software obedece à curva da banheira por sofrer desgaste estrutural, enquanto o hardware exige entregas incrementais.',
      'As falhas de hardware ocorrem pelas iterações de tempo fixo, enquanto o software falha pela integração tardia linear.',
      'O desgaste do hardware é mitigado pelo fluxo contínuo de tarefas, e a deterioração do software pela prototipagem.',
      'Tanto o hardware quanto o software exigem um gerenciamento de configuração rígido para evitar o desgaste físico natural.'
    ],
    correctAnswer: 0,
    explanation: 'O hardware é um componente físico que sofre desgaste (wear out) com o tempo e uso. Já o software é um componente lógico; ele não "quebra" fisicamente, mas se deteriora (deteriorate) devido a mudanças e manutenções que introduzem novos erros e complexidade.'
  },
  {
    id: 'es1-2',
    topic: 'Engenharia de Software',
    question: 'Qual é o objetivo principal da introdução da Engenharia de Software no desenvolvimento de sistemas?',
    options: [
      'Estabelecer uma disciplina estruturada para criar produtos de qualidade respeitando restrições financeiras e temporais.',
      'Substituir o modelo de iterações curtas por uma abordagem fundamentada na previsibilidade linear e integração tardia.',
      'Priorizar a criação de protótipos de risco para evitar a deterioração lógica do software durante o fluxo de trabalho.',
      'Limitar o trabalho em progresso da equipe técnica para garantir que o hardware não sofra desgaste físico precoce.',
      'Focar na criação de repositórios de requisitos para contornar a curva da banheira em projetos de longa duração.'
    ],
    correctAnswer: 0,
    explanation: 'A Engenharia de Software visa transformar o desenvolvimento artesanal em uma disciplina sistemática, controlada e eficiente, garantindo a entrega de software de alta qualidade dentro do prazo e orçamento previstos.'
  },
  {
    id: 'es1-3',
    topic: 'Engenharia de Software',
    question: 'Uma característica fundamental do modelo de processo Cascata é:',
    options: [
      'Focar na linearidade e previsibilidade das fases, apresentando alta fragilidade nos momentos de integração tardia.',
      'Basear o desenvolvimento na visualização do fluxo contínuo de trabalho e na limitação rigorosa das tarefas ativas.',
      'Estruturar as entregas em iterações de tempo fixo para garantir a adaptabilidade às mudanças ao longo do projeto.',
      'Priorizar o gerenciamento de riscos mediante a construção de protótipos em ciclos cada vez mais abrangentes.',
      'Deteriorar a estrutura do sistema intencionalmente para avaliar o desgaste dos componentes perante falhas severas.'
    ],
    correctAnswer: 0,
    explanation: 'O modelo Cascata (Waterfall) é sequencial: uma fase só começa quando a anterior termina. Sua maior fraqueza é a integração tardia, onde problemas de design ou requisitos só aparecem no final do projeto, tornando as correções caríssimas.'
  },
  {
    id: 'es1-4',
    topic: 'Engenharia de Software',
    question: 'O modelo de processo Espiral difere dos demais modelos tradicionais pois:',
    options: [
      'Prioriza o gerenciamento contínuo de riscos através da criação de protótipos sucessivos durante o desenvolvimento.',
      'Exige a limitação estrita do trabalho em progresso para evitar a sobrecarga estrutural e a deterioração do sistema.',
      'Foca na previsibilidade estática das fases sequenciais, o que facilita o planejamento de sistemas de grande porte.',
      'Distribui os papéis da equipe em funções gerenciais específicas para garantir o cumprimento das entregas contínuas.',
      'Trata as falhas de software com os mesmos preceitos físicos aplicados à curva da banheira de componentes materiais.'
    ],
    correctAnswer: 0,
    explanation: 'O modelo Espiral é focado em riscos. Ele divide o projeto em ciclos, e cada ciclo envolve análise de riscos e prototipagem, permitindo que o projeto evolua conforme as incertezas são mitigadas.'
  },
  {
    id: 'es1-5',
    topic: 'Engenharia de Software',
    question: 'O Manifesto Ágil introduziu uma revolução no desenvolvimento de software ao:',
    options: [
      'Valorizar a adaptabilidade às mudanças do projeto e focar em entregas incrementais contínuas ao longo do processo.',
      'Estabelecer a previsibilidade linear como única forma viável de garantir a qualidade técnica e reduzir os custos gerais.',
      'Exigir o desenvolvimento de protótipos documentados para gerenciar riscos sistêmicos antes de qualquer codificação.',
      'Equiparar a manutenção de software à substituição de peças de hardware para evitar os efeitos da curva da banheira.',
      'Centralizar as decisões em um fluxo de trabalho onde a integração final do sistema ocorre apenas no encerramento.'
    ],
    correctAnswer: 0,
    explanation: 'A Revolução Ágil prioriza "responder a mudanças mais do que seguir um plano". O foco é em software funcional entregue frequentemente (iterações curtas) e colaboração próxima com o cliente.'
  },
  {
    id: 'es1-6',
    topic: 'Engenharia de Software',
    question: 'No contexto dos frameworks ágeis, o Scrum caracteriza-se por:',
    options: [
      'Estruturar o desenvolvimento em iterações de tempo fixo e utilizar artefatos para gerenciar as funcionalidades desejadas.',
      'Focar unicamente na visualização do fluxo contínuo de atividades para eliminar a necessidade de reuniões de planejamento.',
      'Aplicar os princípios da curva da banheira para prever o desgaste da equipe técnica durante as fases de integração.',
      'Reduzir os riscos do projeto através da criação sequencial de protótipos descartáveis antes de aprovar os requisitos.',
      'Impor um modelo de cascata em pequena escala onde cada membro da equipe assume a linearidade de suas próprias tarefas.'
    ],
    correctAnswer: 0,
    explanation: 'O Scrum utiliza Sprints (iterações de tempo fixo, ex: 2 a 4 semanas) e artefatos como o Product Backlog e Sprint Backlog para organizar o trabalho de forma empírica (transparência, inspeção e adaptação).'
  },
  {
    id: 'es1-7',
    topic: 'Engenharia de Software',
    question: 'O framework Kanban tem como princípio operacional primário:',
    options: [
      'Basear seu funcionamento na visualização do fluxo de trabalho e na limitação rigorosa das atividades em progresso.',
      'Dividir o ciclo de desenvolvimento em prazos imutáveis para garantir a entrega de incrementos de software regulares.',
      'Estruturar o gerenciamento de riscos com a exigência de prototipagem prévia para todas as funcionalidades solicitadas.',
      'Retardar a integração dos componentes do sistema para o momento final a fim de assegurar a estabilidade do hardware.',
      'Definir papéis de liderança rígidos responsáveis por ditar as tarefas diárias e avaliar a deterioração lógica do código.'
    ],
    correctAnswer: 0,
    explanation: 'O Kanban foca no fluxo contínuo. Seus pilares são a visualização do trabalho (quadro Kanban) e a limitação do WIP (Work In Progress), o que ajuda a identificar gargalos e manter um ritmo sustentável.'
  },
  {
    id: 'es1-8',
    topic: 'Engenharia de Software',
    question: 'A distinção conceitual entre as falhas de hardware e de software reside no fato de que:',
    options: [
      'A deterioração do software é impulsionada por efeitos colaterais resultantes de mudanças em sua estrutura lógica.',
      'O software desgasta fisicamente pela execução contínua, enquanto o hardware se corrompe por atualizações de rotina.',
      'Ambiente seguem a mesma curva de falhas, mas o software possui uma fase de integração tardia mais complexa e cara.',
      'O hardware exige iterações de tempo fixo para sua manutenção, e o software depende da limitação do fluxo contínuo.',
      'A degradação do código ocorre pela ausência de prototipagem física, assemelhando-se ao superaquecimento de peças.'
    ],
    correctAnswer: 0,
    explanation: 'Diferente do hardware, o software não sofre desgaste ambiental. Sua "deterioração" é lógica: cada vez que alteramos o código para corrigir um erro ou adicionar uma função, corremos o risco de introduzir novos defeitos (efeitos colaterais).'
  },
  {
    id: 'es1-9',
    topic: 'Engenharia de Software',
    question: 'Em relação ao impacto sistêmico do software na sociedade moderna, é correto afirmar que:',
    options: [
      'Atua como infraestrutura central invisível e suas falhas podem gerar grandes impactos financeiros e operacionais.',
      'Representa um elemento isolado cuja fragilidade afeta apenas as equipes que utilizam a integração tardia de sistemas.',
      'Elimina a necessidade de disciplina de engenharia, pois sua maleabilidade contorna as restrições de tempo e custo.',
      'Depende da taxa de desgaste dos equipamentos para que seus defeitos estruturais e lógicos sejam percebidos e sanados.',
      'Garante estabilidade universal quando desenvolvido sob a estrita limitação de tarefas em andamento de um quadro visual.'
    ],
    correctAnswer: 0,
    explanation: 'O software hoje é o "motor" do mundo: bancos, hospitais, transportes e comunicações dependem dele. Por ser uma infraestrutura crítica, a Engenharia de Software é vital para evitar falhas catastróficas.'
  },
  {
    id: 'es1-10',
    topic: 'Engenharia de Software',
    question: 'Ao comparar o modelo Cascata com os princípios da Revolução Ágil, observa-se que:',
    options: [
      'O primeiro busca previsibilidade em fases restritas, enquanto o segundo foca em adaptação rápida a novos cenários.',
      'O primeiro baseia-se na entrega incremental contínua, e o segundo na mitigação de riscos por meio de protótipos.',
      'Ambos compartilham a mesma abordagem de integração tardia, diferindo apenas nos papéis designados para a equipe.',
      'O primeiro limita o trabalho em progresso sistematicamente, enquanto o segundo opera por meio de sequências lineares.',
      'A curva de desgaste físico aplica-se perfeitamente ao primeiro, ao passo que o segundo previne a deterioração lógica.'
    ],
    correctAnswer: 0,
    explanation: 'O modelo Cascata assume que os requisitos são fixos e o futuro é previsível. Os métodos Ágeis assumem que os requisitos mudam e que a melhor forma de gerenciar isso é através de ciclos curtos de feedback e adaptação.'
  },
  {
    id: 'es1-11',
    topic: 'Engenharia de Software',
    question: 'Papéis específicos, como o responsável por maximizar o valor do produto e o facilitador do processo, pertencem ao:',
    options: [
      'Framework estruturado em ciclos de tempo fixos voltado para a inspeção e adaptação contínua do trabalho planejado.',
      'Modelo de processo linear focado na conclusão rigorosa de cada etapa antes do início da fase subsequente do projeto.',
      'Sistema de fluxo contínuo que prioriza a limitação do trabalho ativo sem prescrever funções hierárquicas predefinidas.',
      'Paradigma de gerenciamento de riscos que exige a construção de um novo protótipo a cada mudança de funcionalidade.',
      'Estudo de deterioração lógica focado em mapear os efeitos colaterais das manutenções na estrutura interna do código.'
    ],
    correctAnswer: 0,
    explanation: 'A questão descreve o Product Owner (maximiza valor) e o Scrum Master (facilitador), que são papéis centrais do Scrum, um framework baseado em Sprints (ciclos de tempo fixos).'
  },
  {
    id: 'es1-12',
    topic: 'Engenharia de Software',
    question: 'A prática de limitar o trabalho em progresso possui como benefício central:',
    options: [
      'Garantir o fluxo contínuo ao impedir que a equipe inicie muitas tarefas simultaneamente sem finalizá-las previamente.',
      'Mitigar o risco de falhas críticas através da elaboração de protótipos exaustivos antes de qualquer desenvolvimento.',
      'Estabelecer prazos fixos para as entregas e garantir que as mudanças de requisitos ocorram apenas no final do ciclo.',
      'Evitar o desgaste físico da infraestrutura tecnológica associando o ritmo de codificação à curva de falhas do hardware.',
      'Transferir a responsabilidade da integração tardia para o início do projeto, assegurando a linearidade da engenharia.'
    ],
    correctAnswer: 0,
    explanation: 'Limitar o WIP (Work In Progress) é um conceito do Kanban. Ao focar em terminar o que foi começado antes de iniciar novas tarefas, a equipe reduz o tempo de ciclo e evita a sobrecarga (multitarefa ineficiente).'
  },
  {
    id: 'es1-13',
    topic: 'Engenharia de Software',
    question: 'A integração tardia é considerada um ponto de grande fragilidade porque:',
    options: [
      'Concentra a descoberta de falhas sistêmicas em uma fase avançada onde as correções são complexas e muito custosas.',
      'Reduz a capacidade de adaptação da equipe ao limitar artificialmente o fluxo contínuo de tarefas em desenvolvimento.',
      'Exige a substituição de componentes físicos do sistema, elevando a probabilidade de falhas descritas na curva padrão.',
      'Impossibilita o uso de protótipos de risco, forçando a equipe a adotar entregas incrementais não testadas previamente.',
      'Viola as diretrizes do manifesto ágil ao exigir a presença de papéis fixos para o gerenciamento da lista de requisitos.'
    ],
    correctAnswer: 0,
    explanation: 'Em modelos lineares, as partes do sistema só se "encontram" no final. Se houver um erro de arquitetura ou incompatibilidade, ele só será descoberto tarde demais, gerando retrabalho massivo.'
  },
  {
    id: 'es1-14',
    topic: 'Engenharia de Software',
    question: 'A elaboração de protótipos no desenvolvimento de software atende primariamente à necessidade de:',
    options: [
      'Representar o mecanismo central para a mitigação de falhas em modelos orientados ao gerenciamento de riscos técnicos.',
      'Mapear a quantidade máxima de atividades que a equipe pode executar simultaneamente em um quadro de fluxo visual.',
      'Garantir que as entregas ocorram em intervalos regulares de tempo, independentemente das oscilações de requisitos.',
      'Substituir a engenharia disciplinada por uma abordagem artesanal que ignora restrições orçamentárias e temporais.',
      'Solucionar os problemas de desgaste físico do ambiente de hospedagem durante as fases de implementação linear tardia.'
    ],
    correctAnswer: 0,
    explanation: 'Prototipagem é uma ferramenta de redução de incerteza. Ao criar uma versão simplificada do sistema, validamos ideias e requisitos com o usuário antes de investir no desenvolvimento completo.'
  },
  {
    id: 'es1-15',
    topic: 'Engenharia de Software',
    question: 'A organização do trabalho em blocos de tempo fixos tem como propósito:',
    options: [
      'Definir ciclos de desenvolvimento estáveis para garantir entregas incrementais e constantes do produto planejado.',
      'Adiar a integração de todos os módulos de código para o momento de entrega, assegurando a previsibilidade linear.',
      'Restringir a quantidade de funcionalidades ativas no quadro de trabalho para maximizar a eficiência do fluxo contínuo.',
      'Avaliar o impacto das mudanças estruturais no código e comparar essa deterioração com a curva de falha do hardware.',
      'Priorizar a análise minuciosa de todos os riscos arquiteturais por meio de versões descartáveis elaboradas anualmente.'
    ],
    correctAnswer: 0,
    explanation: 'O "Timeboxing" (como as Sprints do Scrum) cria um ritmo previsível. A equipe se compromete com um conjunto de tarefas e entrega um incremento funcional ao final de cada bloco de tempo.'
  },
  {
    id: 'es1-16',
    topic: 'Engenharia de Software',
    question: 'A deterioração do software ao longo de sua vida útil ocorre principalmente devido a:',
    options: [
      'Modificações contínuas que introduzem defeitos lógicos invisíveis, os quais corrompem gradualmente a estabilidade.',
      'Exposição prolongada ao ambiente de execução, que desgasta as linhas de código de maneira análoga a componentes.',
      'Falta de limitação do trabalho em progresso, que sobrecarrega os servidores e causa falhas de hardware inevitáveis.',
      'Adoção de modelos de processos ágeis, que priorizam a documentação exaustiva em detrimento do fluxo contínuo visual.',
      'Restrições de tempo excessivas durante a fase de integração tardia típica de metodologias orientadas a prototipagem.'
    ],
    correctAnswer: 0,
    explanation: 'Conceito de "Software Deterioration": o software não sofre desgaste físico, mas cada manutenção corretiva ou evolutiva tende a degradar sua estrutura original, aumentando a entropia e a chance de novos bugs.'
  },
  {
    id: 'es1-17',
    topic: 'Engenharia de Software',
    question: 'A transição da produção artesanal de software para a Engenharia de Software visa:',
    options: [
      'Substituir métodos instáveis por práticas sistemáticas para garantir qualidade técnica dentro de orçamentos e prazos.',
      'Abandonar as entregas incrementais contínuas em favor de um modelo linear de previsibilidade e integração unificada.',
      'Focar exclusivamente no limite de tarefas ativas para evitar a necessidade de gerenciar riscos por meio de protótipos.',
      'Minimizar as falhas da curva da banheira por meio de manutenções preventivas nas estruturas físicas de hospedagem.',
      'Delegar o controle do projeto a papéis centralizadores que determinam o andamento dos ciclos de tempo imutáveis.'
    ],
    correctAnswer: 0,
    explanation: 'A "Crise do Software" nos anos 60 mostrou que o desenvolvimento artesanal não escalava. A Engenharia de Software surgiu para trazer rigor científico, processos e ferramentas para gerenciar a complexidade.'
  },
  {
    id: 'es1-18',
    topic: 'Engenharia de Software',
    question: 'A visualização do fluxo contínuo em metodologias de desenvolvimento permite à equipe:',
    options: [
      'Identificar gargalos produtivos e otimizar a entrega de valor sem depender de iterações com duração predefinida.',
      'Segregar as responsabilidades através de reuniões regulares de planejamento baseadas em um repositório de requisitos.',
      'Antecipar a integração linear dos módulos desenvolvidos, garantindo o isolamento da deterioração lógica do software.',
      'Aplicar conceitos de desgaste físico para prever quando o código necessitará de refatoração ou substituição completa.',
      'Criar protótipos descartáveis de alta fidelidade para certificar a eliminação de todos os riscos operacionais mapeados.'
    ],
    correctAnswer: 0,
    explanation: 'No Kanban, ver o fluxo (To Do -> Doing -> Done) ajuda a equipe a entender onde o trabalho está "parado" (gargalo) e a focar esforços para liberar o fluxo de entrega de valor.'
  },
  {
    id: 'es1-19',
    topic: 'Engenharia de Software',
    question: 'O repositório priorizado de funcionalidades desejadas em um projeto de software:',
    options: [
      'Funciona como a base central de requisitos que alimenta o planejamento estratégico das iterações de tempo preestabelecidas.',
      'Constitui a última fase de um modelo estritamente sequencial, concentrando todas as atividades de integração e validação.',
      'Representa o limite máximo de tarefas que podem transitar simultaneamente pelo quadro visual de desenvolvimento diário.',
      'Documenta os índices de falha de componentes estruturais visando prevenir o colapso ocasionado pela curva da banheira.',
      'Substitui a necessidade de adaptabilidade contínua por um contrato engessado focado exclusivamente em prazos longos.'
    ],
    correctAnswer: 0,
    explanation: 'O Product Backlog é uma lista dinâmica e priorizada de tudo o que pode ser necessário no produto. Ele é a fonte única de requisitos para a equipe planejar seu trabalho.'
  },
  {
    id: 'es1-20',
    topic: 'Engenharia de Software',
    question: 'A prática de realizar entregas incrementais contínuas no processo de desenvolvimento resulta em:',
    options: [
      'Redução da incerteza do projeto ao disponibilizar partes funcionais do sistema para validação frequente pelos interessados.',
      'Aumento da fragilidade estrutural, pois a ausência de um ciclo linear obriga a integração tardia de componentes incompatíveis.',
      'Substituição da disciplina de engenharia por uma gestão informal focada unicamente na avaliação do desgaste dos equipamentos.',
      'Eliminação completa dos riscos arquiteturais pela construção obrigatória de protótipos antes do início de qualquer codificação.',
      'Concentração extrema de trabalho ativo no quadro visual, invalidando as restrições projetadas para manter o fluxo balanceado.'
    ],
    correctAnswer: 0,
    explanation: 'Entregas incrementais permitem que o cliente veja o progresso real e dê feedback cedo. Isso reduz o risco de construir algo que o cliente não quer ou que não funciona como esperado.'
  },
  {
    id: 'cloud-1',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Qual característica define fundamentalmente o modelo de hospedagem On-Premise em contraste com a Computação em Nuvem?',
    options: [
      'A organização assume a responsabilidade integral pela manutenção da infraestrutura física e aquisição contínua de servidores.',
      'A empresa compartilha os recursos lógicos através de multilocação para otimizar as regras de negócio centrais da sua aplicação.',
      'O provedor entrega a plataforma de desenvolvimento pronta para que a equipe foque apenas na retrospectiva da próxima sprint.',
      'O sistema adota uma arquitetura gritante para isolar o banco de dados dos servidores físicos que são alocados sob demanda.',
      'O software é consumido diretamente pelo usuário final sem a necessidade de gerenciar o planejamento e a planta baixa do projeto.'
    ],
    correctAnswer: 0,
    explanation: 'No modelo On-Premise (local), a empresa é dona de tudo: do prédio aos cabos e servidores. Ela é responsável por comprar, instalar, refrigerar e manter todo o hardware físico.'
  },
  {
    id: 'cloud-2',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'No contexto dos modelos de nuvem, o que o provedor oferece primariamente quando uma empresa contrata Infraestrutura como Serviço?',
    options: [
      'Servidores virtuais e armazenamento para que a equipe técnica instale o sistema operacional e gerencie a aplicação completa.',
      'Um ambiente de desenvolvimento totalmente preparado para focar exclusivamente na regra de negócio e nas estimativas da iteração.',
      'O isolamento lógico dos dados do cliente através de multilocação sem expor a linha de montagem da atual fábrica de software.',
      'Acesso direto e imediato ao software finalizado para o usuário focar exclusivamente na retrospectiva das funcionalidades entregues.',
      'Uma arquitetura limpa e independente onde o banco de dados é terceirizado e o planejamento do produto ocorre em sprints regulares.'
    ],
    correctAnswer: 0,
    explanation: 'IaaS (Infrastructure as a Service) fornece os componentes básicos: processamento (CPUs), memória e disco. O cliente ainda precisa instalar o Windows/Linux, bancos de dados e sua própria aplicação.'
  },
  {
    id: 'cloud-3',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Qual vantagem principal a Plataforma como Serviço oferece para uma equipe na linha de montagem de software?',
    options: [
      'Isenta os desenvolvedores da gestão complexa de servidores e redes para que foquem inteiramente no código e na regra de negócio.',
      'Transfere o controle total do hardware físico para o cliente com o objetivo de facilitar amplamente as reuniões de planejamento.',
      'Fornece o produto final completamente pronto para o consumo isolando os dados através dos mecanismos nativos de multilocação.',
      'Exige que a organização compre equipamentos pesados de infraestrutura para suportar as entregas incrementais do projeto de software.',
      'Obriga a adoção de uma arquitetura gritante específica onde os provedores gerenciam sozinhos as cerimônias do ciclo de desenvolvimento.'
    ],
    correctAnswer: 0,
    explanation: 'PaaS (Platform as a Service) oferece um ambiente pronto (como o Heroku ou Google App Engine). O desenvolvedor só faz o "upload" do código; o provedor cuida do sistema operacional, atualizações e escalonamento.'
  },
  {
    id: 'cloud-4',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Como o modelo de Software como Serviço se posiciona na entrega de valor para o cliente final?',
    options: [
      'Fornece a aplicação completamente pronta para uso pela internet eliminando quaisquer preocupações com instalação e com infraestrutura.',
      'Entrega as máquinas virtuais sob demanda para que a equipe de planejamento estruture a planta baixa do banco de dados relacional.',
      'Disponibiliza ferramentas de programação na nuvem para agilizar intensamente a fase de estimativa de tarefas no ciclo da iteração.',
      'Permite o gerenciamento físico dos datacenters pelo próprio usuário garantindo o isolamento lógico das diversas regras de negócio.',
      'Foca na construção de uma arquitetura limpa oferecendo suporte direto para a equipe técnica durante a execução contínua da sprint.'
    ],
    correctAnswer: 0,
    explanation: 'SaaS (Software as a Service) é o software pronto para consumo (ex: Gmail, Netflix, Salesforce). O usuário não vê servidores nem código; ele apenas usa a funcionalidade.'
  },
  {
    id: 'cloud-5',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Durante o ciclo de iteração, qual é o objetivo principal da fase de planejamento da equipe de desenvolvimento?',
    options: [
      'Selecionar e detalhar cuidadosamente as funcionalidades que serão construídas no próximo ciclo para alcançar a visão geral do projeto.',
      'Configurar todas as máquinas virtuais da infraestrutura como serviço para suportar adequadamente a arquitetura gritante do sistema.',
      'Avaliar criticamente as falhas da iteração anterior para melhorar a multilocação lógica do software que é entregue aos clientes finais.',
      'Migrar os servidores físicos do antigo modelo tradicional para a plataforma como serviço que foi contratada pela fábrica de software.',
      'Escrever o código fonte estritamente focado nas regras de negócio e terceirizar todo o banco de dados para o software como serviço.'
    ],
    correctAnswer: 0,
    explanation: 'No Planejamento (Planning), a equipe define o "O Quê" e o "Como" do próximo ciclo. É o momento de alinhar expectativas e garantir que todos entendam as tarefas prioritárias.'
  },
  {
    id: 'cloud-6',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Uma empresa deseja focar exclusivamente na construção da regra de negócio sem configurar servidores. Qual modelo é ideal?',
    options: [
      'Plataforma como Serviço pois abstrai a infraestrutura e permite que a equipe programe a lógica do sistema de forma rápida e direta.',
      'Infraestrutura como Serviço pois oferece o controle total do sistema operacional necessário para sustentar a moderna arquitetura limpa.',
      'Software como Serviço pois entrega o aplicativo finalizado eliminando completamente a necessidade de planejar o próximo ciclo de iteração.',
      'Modelo de Hospedagem Tradicional pois assegura que o banco de dados seja tratado como um mero detalhe na moderna fábrica de software.',
      'Estrutura de Multilocação pois compartilha o planejamento da arquitetura gritante de forma igualitária entre vários provedores de nuvem.'
    ],
    correctAnswer: 0,
    explanation: 'PaaS é a escolha para desenvolvedores que querem produtividade. Ao remover a necessidade de gerenciar o "baixo nível" (servidores, redes), a equipe foca 100% na lógica do negócio.'
  },
  {
    id: 'cloud-7',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Qual a importância da retrospectiva dentro do fluxo contínuo de um ciclo de iteração ágil?',
    options: [
      'Analisar o processo de trabalho da equipe para identificar melhorias práticas a serem aplicadas sistematicamente no próximo ciclo.',
      'Revisar o modelo de nuvem escolhido para garantir que a atual plataforma como serviço suporte a implementação da nova arquitetura limpa.',
      'Estimar o tempo necessário para migrar os dados do formato tradicional físico para o novo modelo avançado de infraestrutura em nuvem.',
      'Validar o isolamento completamente seguro dos locatários no ambiente compartilhado antes de disponibilizar o novo software como serviço.',
      'Desenhar a planta baixa do sistema focando nos requisitos de negócio e delegando a construção da infraestrutura para o provedor externo.'
    ],
    correctAnswer: 0,
    explanation: 'A Retrospectiva foca no PROCESSO e nas PESSOAS. É o momento de perguntar: "Como podemos trabalhar melhor juntos?" e definir ações concretas de melhoria.'
  },
  {
    id: 'cloud-8',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Em comparação com a computação em nuvem, o modelo tradicional de infraestrutura física apresenta qual desafio?',
    options: [
      'Exige alto investimento inicial e manutenção contínua dos equipamentos físicos limitando fortemente a flexibilidade técnica da equipe.',
      'Obriga o compartilhamento de recursos através de multilocação comprometendo perigosamente o isolamento lógico das regras de negócio.',
      'Impede a realização funcional do ciclo de iteração pois as restrições constantes de hardware afetam o planejamento contínuo das entregas.',
      'Restringe o uso de plataformas de desenvolvimento prontas forçando a empresa a consumir apenas aplicações no modelo software como serviço.',
      'Inviabiliza a adoção imediata de uma arquitetura gritante porque o banco de dados se torna o foco central do intenso ciclo de execução.'
    ],
    correctAnswer: 0,
    explanation: 'O modelo tradicional (CapEx) exige comprar tudo antes de usar. Se o projeto crescer, você precisa comprar mais hardware (lento). Na nuvem (OpEx), você paga pelo que usa e escala instantaneamente.'
  },
  {
    id: 'cloud-9',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Assinale a característica que define o fornecimento de um sistema no modelo de Software como Serviço.',
    options: [
      'O provedor gerencia toda a pilha de tecnologia e o cliente apenas consome a aplicação finalizada através de um simples navegador web.',
      'O contratante aluga a capacidade de processamento bruto e realiza a estimativa financeira de custos durante todo o ciclo da iteração ágil.',
      'A equipe de arquitetura desenha a planta baixa do projeto utilizando exclusivamente as ferramentas fornecidas pela plataforma em nuvem.',
      'O cliente compra o hardware físico e instala o aplicativo base para garantir a multilocação segura de todas as suas regras de negócio.',
      'O serviço foca em prover um ambiente virtualizado isolado para o desenvolvimento contínuo durante as longas execuções de cada iteração.'
    ],
    correctAnswer: 0,
    explanation: 'No SaaS, o cliente é um usuário, não um administrador de sistemas. Toda a complexidade técnica está escondida atrás de uma interface simples (web ou app).'
  },
  {
    id: 'cloud-10',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'O que ocorre prioritariamente durante a fase de execução dentro de um ciclo de iteração de software?',
    options: [
      'A equipe codifica e testa ativamente as funcionalidades planejadas focando intensamente em transformar a ideia inicial em um produto real.',
      'O provedor de nuvem ajusta ativamente a alocação de recursos da infraestrutura como serviço para suportar plenamente a arquitetura limpa.',
      'Os desenvolvedores realizam a retrospectiva obrigatória para corrigir as estimativas erradas do projeto que está hospedado internamente.',
      'O cliente final valida regularmente o isolamento total de seus dados no ambiente de multilocação do eficiente modelo plataforma como serviço.',
      'A fábrica de software desenha a planta baixa priorizando a integração direta do banco de dados ao novo planejamento estritamente ágil.'
    ],
    correctAnswer: 0,
    explanation: 'A Execução é a "mão na massa". É onde o trabalho técnico acontece para transformar os requisitos planejados em código funcional e testado.'
  },
  {
    id: 'cloud-11',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Ao contratar um serviço que fornece apenas redes, armazenamento e servidores virtuais, a empresa está adotando qual modelo?',
    options: [
      'Infraestrutura como Serviço mantendo a grande responsabilidade por instalar e configurar o sistema operacional e todos os seus próprios dados.',
      'Plataforma como Serviço pois a arquitetura limpa do código desenvolvido exige controle absoluto sobre as linguagens de programação utilizadas.',
      'Software como Serviço para garantir plenamente que as estimativas do ciclo de iteração nunca sejam afetadas por imprevistos de rede interna.',
      'Hospedagem Tradicional Física pois a empresa precisa gerenciar o isolamento lógico da multilocação diretamente nos equipamentos adquiridos.',
      'Nuvem Híbrida Gritante estritamente focada em manter a lógica de negócio separada do banco de dados durante a linha de montagem de software.'
    ],
    correctAnswer: 0,
    explanation: 'IaaS é como alugar um terreno vazio com utilidades (luz, água). Você ainda precisa construir a casa (instalar o SO, apps e dados).'
  },
  {
    id: 'cloud-12',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'De que forma o uso da Plataforma como Serviço pode beneficiar diretamente a execução do ciclo de iteração?',
    options: [
      'Acelera as entregas regulares da equipe ao eliminar o extenso tempo gasto com configuração de servidores e manutenção diária de infraestrutura.',
      'Melhora a retrospectiva do projeto complexo ao fornecer métricas físicas detalhadas sobre o desgaste dos equipamentos próprios da fábrica.',
      'Facilita a estimativa inicial de tarefas pois o novo modelo exige que o código fonte seja substituído inteiramente a cada nova versão liberada.',
      'Garante o isolamento absoluto em servidores distintos para cada cliente anulando totalmente a necessidade de usar o mecanismo de multilocação.',
      'Transfere toda a elaboração da arquitetura limpa do software para o provedor que assume a definição das difíceis regras do negócio local.'
    ],
    correctAnswer: 0,
    explanation: 'PaaS aumenta a velocidade (Time-to-Market). Como a infraestrutura já está pronta e automatizada, a iteração foca apenas no que gera valor: o software.'
  },
  {
    id: 'cloud-13',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Qual sequência representa o aumento crescente de abstração e gerenciamento pelo provedor nos modelos de nuvem?',
    options: [
      'Infraestrutura como Serviço seguido diretamente por Plataforma como Serviço e terminando com a entrega do Software como Serviço.',
      'Modelo Tradicional Físico seguido imediatamente por Infraestrutura como Serviço e concluindo com o isolamento total de dados da multilocação.',
      'Software como Serviço seguido primeiramente por Plataforma como Serviço e encerrando com a adoção da Infraestrutura como Serviço na fábrica.',
      'Ciclo Padrão de Iteração seguido logo por Arquitetura Limpa e terminando com a execução impecável da planta baixa em ambientes virtuais.',
      'Plataforma como Serviço seguido ativamente por Software como Serviço e finalizando com a complexa gestão física de todas as redes internas.'
    ],
    correctAnswer: 0,
    explanation: 'IaaS (menos abstração, mais controle) -> PaaS (abstração do SO) -> SaaS (abstração total, apenas uso).'
  },
  {
    id: 'cloud-14',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'No modelo de Software como Serviço, a multilocação é um conceito fundamental porque permite que:',
    options: [
      'Vários clientes utilizem a mesma infraestrutura provedora de forma simultânea mantendo seus respectivos dados rigorosamente isolados e seguros.',
      'Cada usuário receba um servidor físico exclusivo de alta performance para rodar suas aplicações dinâmicas durante a execução do ciclo de iteração.',
      'A dedicada equipe de desenvolvimento gerencie a linha de montagem com eficiência sem se preocupar minimamente com a arquitetura gritante do código.',
      'O complexo banco de dados seja mantido em servidores locais da empresa enquanto a regra fundamental de negócio opera de forma livre na nuvem pública.',
      'As frequentes retrospectivas das equipes ocorram em ambientes isolados na nuvem para não interferir nas estimativas das novas funcionalidades.'
    ],
    correctAnswer: 0,
    explanation: 'Multilocação (Multi-tenancy) é a base da economia de escala na nuvem. Um único software serve milhares de clientes, mas cada um vê apenas seus próprios dados.'
  },
  {
    id: 'cloud-15',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Se uma equipe adota ciclos curtos de iteração para entregar um sistema hospedado internamente, ela deve gerenciar:',
    options: [
      'Tanto as valiosas entregas incrementais de código moderno quanto a manutenção contínua e a atualização complexa do hardware físico da empresa.',
      'A transição progressiva e automática do aplicativo para o eficiente formato de software como serviço após a conclusão de cada retrospectiva ágil.',
      'O imprescindível isolamento lógico dos dados do cliente delegado integralmente ao parceiro provedor terceirizado de infraestrutura como serviço.',
      'A completa abstração do banco de dados relacional como um mero detalhe para focar exclusivamente na aquisição rápida de novos servidores escaláveis.',
      'O moderno ambiente de plataforma como serviço que automatiza integralmente todo o planejamento das difíceis tarefas da fábrica sem intervenção humana.'
    ],
    correctAnswer: 0,
    explanation: 'No On-Premise, a agilidade do software (iterações) pode ser freada pela rigidez do hardware. A equipe precisa equilibrar a velocidade do código com a gestão física dos servidores.'
  },
  {
    id: 'cloud-16',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Durante o ciclo de iteração, qual a finalidade da estimativa antes de iniciar o desenvolvimento das funcionalidades?',
    options: [
      'Avaliar criteriosamente o esforço e a capacidade da equipe para decidir o que é de fato viável entregar com qualidade no período de tempo definido.',
      'Calcular com exatidão os custos de aquisição de servidores físicos modernos para garantir a sustentação da arquitetura central da fábrica de software.',
      'Definir precocemente o modelo de multilocação ideal para o banco de dados antes de migrar todo o grande sistema para infraestrutura como serviço.',
      'Analisar criticamente os resultados da retrospectiva passada para reorganizar totalmente os membros da equipe que falharam na rápida linha de montagem.',
      'Contratar prontamente a plataforma como serviço mais adequada do mercado para suportar as difíceis regras de negócio desenhadas na arquitetura gritante.'
    ],
    correctAnswer: 0,
    explanation: 'Estimar não é dar um prazo final imutável, mas sim entender a complexidade para não sobrecarregar a equipe e garantir entregas realistas.'
  },
  {
    id: 'cloud-17',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Utilizando a metáfora da pizza para serviços em nuvem, o que representaria o modelo de Software como Serviço?',
    options: [
      'Sair para comer diretamente em um restaurante agradável onde a pizza é preparada perfeitamente e o ambiente é totalmente gerenciado pelo local.',
      'Comprar a massa pronta no supermercado e assar de forma caseira no forno de casa representando o controle parcial exigido pela plataforma como serviço.',
      'Fazer a pizza inteira do mais absoluto zero na própria cozinha de casa assumindo todas as difíceis responsabilidades inerentes à infraestrutura física.',
      'Planejar a receita da pizza apenas durante a fase de estimativa do ciclo e delegar o processo de consumo para os clientes durante a rápida retrospectiva.',
      'Compartilhar o forno da residência ativamente com os vizinhos para ilustrar claramente o funcionamento do isolamento lógico na moderna arquitetura gritante.'
    ],
    correctAnswer: 0,
    explanation: 'Na metáfora "Pizza as a Service": On-Premise é fazer em casa; IaaS é pizza congelada; PaaS é delivery; SaaS é comer no restaurante (você só senta e come).'
  },
  {
    id: 'cloud-18',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Qual a principal diferença de responsabilidade entre os modelos de Infraestrutura como Serviço e Plataforma como Serviço?',
    options: [
      'Na primeira o cliente gerencia o sistema operacional de forma ativa e na segunda o provedor cuida disso entregando todo o ambiente completamente pronto.',
      'Na primeira a equipe foca totalmente na retrospectiva do projeto e na segunda concentra todos os seus grandes esforços na execução do ciclo de iteração.',
      'Na primeira o banco de dados é tratado apenas como um mero detalhe e na segunda ele define completamente toda a linha de montagem do novo software.',
      'Na primeira ocorre o isolamento físico extremo de cada locatário e na segunda todos compartilham ativamente a hospedagem tradicional e local da empresa.',
      'Na primeira a aplicação desenvolvida é consumida diretamente pelo usuário final e na segunda a equipe técnica controla severamente a arquitetura do hardware.'
    ],
    correctAnswer: 0,
    explanation: 'A linha divisória entre IaaS e PaaS é o Sistema Operacional e o Middleware. No PaaS, você não se preocupa com patches de segurança do Linux ou versões do Java/Node.'
  },
  {
    id: 'cloud-19',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Uma empresa que migra seu sistema tradicional para Infraestrutura como Serviço busca primordialmente alcançar qual benefício?',
    options: [
      'Substituir a cara compra e manutenção de hardware físico pelo aluguel altamente flexível de servidores virtuais mantendo o controle total do sistema.',
      'Delegar todo o complexo planejamento e estimativa do atual ciclo de iteração para a capacitada equipe de suporte fornecida diretamente pela fábrica de software.',
      'Consumir a nova aplicação de forma totalmente pronta pelo navegador web moderno sem se preocupar com a arquitetura gritante e as lógicas regras de negócio.',
      'Transferir a responsabilidade total sobre o extenso código fonte e as regras de negócio complexas para os modernos provedores do eficiente serviço de multilocação.',
      'Implementar ativamente a plataforma de desenvolvimento pronta para que a retrospectiva final da equipe de tecnologia ocorra de forma sempre automatizada na nuvem.'
    ],
    correctAnswer: 0,
    explanation: 'A migração para IaaS foca em agilidade de infraestrutura e redução de custos fixos (CapEx para OpEx), mantendo a liberdade de configurar o software como quiser.'
  },
  {
    id: 'cloud-20',
    topic: 'Modelos de Nuvem e Ciclo de Iteração',
    question: 'Como o conceito de fábrica de software se conecta com as práticas do ciclo de iteração moderno?',
    options: [
      'A fábrica organiza estruturalmente a linha de montagem enquanto a iteração garante firmemente entregas incrementais sempre planejadas e revisadas continuamente.',
      'A fábrica adota definitivamente o popular modelo de software como serviço para evitar permanentemente qualquer necessidade de estimativa e de planejamento pelas equipes.',
      'A fábrica foca exaustivamente na grande compra de equipamentos físicos e locais para suportar adequadamente as constantes mudanças apontadas no momento da retrospectiva.',
      'A fábrica utiliza inteligentemente a moderna multilocação para desenhar a complexa arquitetura da planta baixa delegando toda a execução de fato ao provedor da nuvem.',
      'A fábrica ignora completamente as principais regras de negócio concentrando todo o grande esforço da plataforma como serviço apenas na manutenção do banco de dados.'
    ],
    correctAnswer: 0,
    explanation: 'A "Fábrica de Software" moderna usa processos repetíveis e automatizados (como CI/CD) dentro de ciclos iterativos para garantir qualidade e velocidade constantes.'
  },
  {
    id: 'req-1',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Sobre a fase de elicitação na Engenharia de Requisitos, assinale a alternativa correta:',
    options: [
      'A fase de elicitação foca em compreender as necessidades dos stakeholders antes de desenhar a estrutura lógica e física do sistema.',
      'A fase de elicitação define a arquitetura cliente-servidor para garantir o desempenho e a segurança exigidos pelos usuários finais.',
      'A fase de elicitação valida a troca cronológica de mensagens entre atores utilizando exclusivamente o diagrama visual de sequência.',
      'A fase de elicitação estabelece as restrições obrigatórias através da relação de extensão mapeada nos casos de uso do sistema principal.',
      'A fase de elicitação especifica os atributos estáticos do banco de dados para suportar os requisitos não funcionais mapeados no projeto.'
    ],
    correctAnswer: 0,
    explanation: 'A elicitação é a fase inicial onde se busca descobrir e entender as necessidades dos stakeholders. As outras alternativas misturam conceitos de arquitetura, diagramas de sequência, casos de uso e banco de dados que pertencem a fases posteriores de design e modelagem.'
  },
  {
    id: 'req-2',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'No contexto da modelagem de software, os requisitos funcionais caracterizam-se por:',
    options: [
      'Representarem as ações práticas e verbos que o sistema deve executar para atender diretamente às necessidades mapeadas dos clientes.',
      'Definirem a estrutura estática do software detalhando os métodos operacionais e os atributos diretos na camada de apresentação visual.',
      'Estabelecerem limites estritos de desempenho e de segurança que a arquitetura em múltiplas camadas precisa respeitar durante a execução.',
      'Representarem a validação cronológica das chamadas síncronas essenciais entre os servidores e os clientes da aplicação modelada tecnicamente.',
      'Descreverem as regras de negócio abstratas que ocorrem de maneira estritamente opcional dentro do diagrama de sequência do grande projeto.'
    ],
    correctAnswer: 0,
    explanation: 'Requisitos funcionais descrevem o comportamento do sistema, ou seja, o que o sistema deve fazer (ações e verbos). As alternativas B, C, D e E referem-se a estrutura estática, requisitos não funcionais, validação cronológica ou regras abstratas opcionais.'
  },
  {
    id: 'req-3',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Qual é a principal função dos requisitos não funcionais dentro de um projeto de engenharia?',
    options: [
      'Imporem restrições sistêmicas rigorosas como níveis de segurança e de disponibilidade que afetam a arquitetura geral do software projetado.',
      'Detalharem os verbos principais indicando exatamente quais operações diretas o usuário final realizará cotidianamente na interface do sistema.',
      'Mapearem a obrigatoriedade de relacionamento entre diferentes casos de uso na fronteira de interação constante do usuário final com a máquina.',
      'Estruturarem a lógica de programação criando linhas de vida ativas para cada ator diretamente dentro da linguagem visual unificada de classes.',
      'Especificarem o comportamento dinâmico através de blocos lógicos estruturados e independentes aplicados diretamente no diagrama estrutural.'
    ],
    correctAnswer: 0,
    explanation: 'Requisitos não funcionais impõem restrições sobre como o sistema deve funcionar (desempenho, segurança, disponibilidade), afetando a arquitetura global. As outras opções descrevem requisitos funcionais, modelagem de casos de uso ou diagramas estruturais.'
  },
  {
    id: 'req-4',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'O objetivo central da fase de validação na Engenharia de Requisitos é:',
    options: [
      'Assegurar criticamente que o documento de requisitos reflete fielmente o que o cliente deseja antes de iniciar a construção lógica do código.',
      'Transformar os requisitos mapeados em uma arquitetura de camadas dividindo rigorosamente a apresentação visual e o acesso ao banco de dados.',
      'Definir a obrigatoriedade técnica da execução de processos sistêmicos complexos utilizando a relação de inclusão visual dos casos de uso.',
      'Extrair velozmente as necessidades vagas dos interessados para formatar o diagrama dinâmico de interação cronológica do novo software.',
      'Especificar a composição exata dos atributos estruturais do projeto criando uma dependência rígida e funcional no diagrama de classes.'
    ],
    correctAnswer: 0,
    explanation: 'A validação serve para garantir que os requisitos documentados realmente atendem aos desejos e necessidades do cliente. Transformar em arquitetura (B), definir inclusão (C), extrair necessidades (D - isso é elicitação) ou especificar atributos (E) são atividades de outras fases.'
  },
  {
    id: 'req-5',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Como a fase de especificação atua dentro do ciclo de vida dos requisitos de sistema?',
    options: [
      'Consolida todas as necessidades analisadas em um documento técnico claro e estruturado que guiará o desenvolvimento integral do software.',
      'Apresenta o comportamento em tempo real do sistema exibindo loops operacionais e mensagens através da linguagem de modelagem unificada.',
      'Garante que as complexas restrições de desempenho sejam implementadas de forma opcional utilizando a extensão nativa de casos de uso.',
      'Estabelece o contato inicial com os clientes para identificar velozmente os principais atores que interagem com o robusto servidor de dados.',
      'Valida a herança estrutural obrigatória entre as regras de negócio criadas dentro da complexa lógica da arquitetura unificada de desenvolvimento.'
    ],
    correctAnswer: 0,
    explanation: 'A especificação é o processo de documentar os requisitos de forma clara e estruturada. Comportamento em tempo real (B), restrições opcionais (C), contato inicial (D - elicitação) ou herança estrutural (E) não definem o propósito da especificação.'
  },
  {
    id: 'req-6',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'A diferença prática fundamental entre requisitos funcionais e não funcionais reside no fato de que:',
    options: [
      'O primeiro foca especificamente no que o software faz e o segundo impõe limites técnicos sobre como o software deve operar internamente.',
      'O primeiro descreve detalhadamente a arquitetura em camadas e o segundo mapeia a interação cronológica completa no diagrama de sequência.',
      'O primeiro estabelece relacionamentos opcionais de extensão e o segundo define rigidamente as inclusões obrigatórias dos diversos casos de uso.',
      'O primeiro foca inteiramente nos atributos estáticos das classes modeladas e o segundo avalia o comportamento dinâmico visual entre os atores.',
      'O primeiro valida sistematicamente a comunicação cliente-servidor e o segundo elícita as necessidades estáticas diretas do banco de dados.'
    ],
    correctAnswer: 0,
    explanation: 'Funcionais focam no "o quê" (funcionalidades), enquanto não funcionais focam no "como" (qualidades e restrições técnicas). As outras alternativas misturam conceitos de diagramas de sequência, casos de uso, classes e banco de dados de forma incorreta.'
  },
  {
    id: 'req-7',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'A disciplina de Engenharia de Requisitos tem como propósito metodológico principal:',
    options: [
      'Buscar extrair e documentar corretamente o comportamento esperado do software para evitar a construção tardia de uma solução incorreta.',
      'Focar unicamente em desenhar a visão estrutural do sistema usando atributos técnicos e heranças na linguagem de modelagem de arquitetura.',
      'Substituir integralmente a modelagem de casos de uso pela definição direta das mensagens síncronas na arquitetura padrão de camadas.',
      'Priorizar a implementação técnica do modelo cliente-servidor negligenciando a validação humana das restrições de desempenho exigidas.',
      'Traduzir as grandes metas dos usuários em blocos lógicos de repetição dentro do comportamento dinâmico esperado do projeto unificado.'
    ],
    correctAnswer: 0,
    explanation: 'O objetivo é garantir que o software certo seja construído através da extração e documentação correta das necessidades. Focar apenas em visão estrutural (B), substituir casos de uso (C), priorizar cliente-servidor (D) ou traduzir metas em loops (E) são visões distorcidas ou parciais.'
  },
  {
    id: 'req-8',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'O que ocorre de forma prioritária durante a fase de análise de requisitos?',
    options: [
      'Investiga as informações coletadas inicialmente para resolver conflitos de interesse e organizar as reais necessidades do sistema a ser construído.',
      'Desenha a planta estática do software detalhando as composições de classes visuais e suas associações diretas de dependência de dados.',
      'Apresenta o software funcionando ao cliente final para garantir que a arquitetura em camadas respeite o diagrama de sequência desenvolvido.',
      'Documenta rigorosamente as chamadas críticas de banco de dados para assegurar os elevados níveis de disponibilidade do modelo de rede.',
      'Mapeia as fronteiras do sistema convertendo instantaneamente requisitos não funcionais em casos de uso com relacionamento flexível de extensão.'
    ],
    correctAnswer: 0,
    explanation: 'Na análise, os requisitos coletados são refinados, conflitos são resolvidos e as necessidades são organizadas. Desenhar planta estática (B), apresentar software (C - validação/demo), documentar banco (D) ou converter em casos de uso instantaneamente (E) não são o foco primário da análise.'
  },
  {
    id: 'req-9',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Assinale a alternativa que apresenta um exemplo clássico de requisito funcional:',
    options: [
      'O sistema deve permitir que o administrador autorizado cadastre novos usuários através de um formulário de inserção específico na tela.',
      'O software precisa apresentar tempo de resposta invariavelmente inferior a dois segundos durante interações ágeis na arquitetura de camadas.',
      'A aplicação deve utilizar a relação de inclusão obrigatória estruturada para garantir que o diagrama de classes fique sempre seguro contra falhas.',
      'A infraestrutura de rede deve suportar a recuperação ágil de falhas mantendo a comunicação síncrona obrigatória com os bancos de dados.',
      'O banco de dados necessita criptografar todas as senhas armazenadas seguindo rigorosamente os padrões de herança da linguagem unificada.'
    ],
    correctAnswer: 0,
    explanation: 'Permitir o cadastro de usuários é uma funcionalidade direta do sistema. Tempo de resposta (B), inclusão estruturada (C), recuperação de falhas (D) e criptografia de senhas (E) são requisitos não funcionais ou detalhes de implementação/segurança.'
  },
  {
    id: 'req-10',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Assinale a alternativa que apresenta um exemplo claro de requisito não funcional:',
    options: [
      'O sistema deve garantir que todas as transações financeiras realizadas sejam processadas com alta segurança criptográfica contra invasões.',
      'O software precisa gerar um relatório gerencial mensal contendo todas as vendas organizadas pelo relacionamento estrutural de dependência.',
      'A plataforma moderna deve permitir a exclusão de registros antigos de usuários utilizando a extensão comportamental típica dos casos de uso.',
      'O usuário final necessita enviar mensagens assíncronas contínuas para o servidor remoto consultar o saldo através do painel principal da tela.',
      'O sistema inteligente deve calcular os descontos comerciais aplicando as lógicas de negócio presentes na respectiva classe principal unificada.'
    ],
    correctAnswer: 0,
    explanation: 'A segurança criptográfica é uma restrição de qualidade (como o sistema deve operar), caracterizando um requisito não funcional. Gerar relatórios (B), excluir registros (C), enviar mensagens (D) e calcular descontos (E) são funcionalidades (requisitos funcionais).'
  },
  {
    id: 'req-11',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Como a modelagem de casos de uso se conecta com o início da engenharia de requisitos?',
    options: [
      'Eles ajudam a mapear visualmente o que os usuários desejam realizar no sistema durante as valiosas entrevistas de elicitação e levantamento.',
      'A elicitação converte instantaneamente os limites de desempenho mapeados em métodos estruturais dentro da camada unificada de apresentação.',
      'Eles garantem decisivamente que os requisitos não funcionais de segurança extrema substituam a validação formal do modelo cliente-servidor.',
      'A elicitação define obrigatoriamente a herança complexa das classes para que os requisitos funcionais atuem fortemente como adjetivos técnicos.',
      'Eles detalham intensamente a troca de mensagens cronológicas rápidas que o processo de elicitação define precocemente como chamadas síncronas.'
    ],
    correctAnswer: 0,
    explanation: 'Casos de uso são ferramentas visuais excelentes para capturar e organizar as metas dos usuários durante a elicitação. As outras opções tentam forçar conexões técnicas sem sentido com herança, adjetivos técnicos ou chamadas síncronas.'
  },
  {
    id: 'req-12',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Qual é o impacto esperado de requisitos não funcionais severos na arquitetura do sistema?',
    options: [
      'Restrições fortes de desempenho e altíssima disponibilidade moldam profundamente a escolha do modelo cliente-servidor ou das camadas usadas.',
      'Esses requisitos representam ações lógicas diretas que obrigam ativamente o uso de herança múltipla no momento crucial de desenhar as classes.',
      'A necessidade extrema de segurança inviabiliza a fase de elicitação e exige a adoção imediata e isolada do diagrama de sequência lógico unificado.',
      'As características altamente restritivas transformam verbos operacionais rápidos em relacionamentos de extensão dentro dos casos de uso do cliente.',
      'Tais adjetivos focam exclusivamente na interface gráfica do ator desprezando a comunicação sistêmica estruturada nos blocos lógicos de repetição.'
    ],
    correctAnswer: 0,
    explanation: 'Requisitos de desempenho, segurança e disponibilidade são determinantes para a escolha da arquitetura (ex: cliente-servidor, microserviços). As outras opções misturam herança, diagramas de sequência e interfaces de forma desconexa.'
  },
  {
    id: 'req-13',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'A linguagem unificada de modelagem contribui diretamente com a fase de especificação ao:',
    options: [
      'Fornecer diagramas padronizados que enriquecem o documento de especificação tornando as regras operacionais muito mais claras e visuais.',
      'Substituir completamente a necessidade da fase de análise ao transformar instantaneamente as restrições de rede em diagramas de tempo real.',
      'Focar o documento de especificação puramente na interação cronológica descartando a elicitação das necessidades funcionais básicas do ator.',
      'Obrigar metodologicamente que todos os requisitos não funcionais sejam representados de maneira exclusiva por linhas de vida dinâmicas e ativas.',
      'Traduzir o conceito de relacionamento de extensão dinâmico em requisitos físicos de hardware pesado na arquitetura estrutural de muitas camadas.'
    ],
    correctAnswer: 0,
    explanation: 'A UML fornece notações padronizadas (diagramas) que tornam a especificação mais precisa e compreensível. Substituir análise (B), descartar elicitação (C) ou focar apenas em linhas de vida (D) são afirmações incorretas sobre o papel da UML.'
  },
  {
    id: 'req-14',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Por que a identificação de atores é crucial durante a análise de requisitos de um projeto?',
    options: [
      'Compreender quem interage ativamente com o sistema é essencial para delimitar sua correta fronteira e definir os devidos requisitos funcionais.',
      'O ator representa o moderno banco de dados interno que processa as restrições sistêmicas detalhadas no diagrama unificado de classes estático.',
      'Definir rapidamente os atores garante que a comunicação do cliente-servidor funcione perfeitamente sem depender da elicitação técnica de restrições.',
      'A análise profunda dos atores impõe um relacionamento de inclusão estritamente obrigatório na elaboração visual do modelo visual de apresentação.',
      'Os atores constituem componentes densos de hardware responsáveis por manter incessantemente a alta disponibilidade exigida pelo desempenho.'
    ],
    correctAnswer: 0,
    explanation: 'Identificar quem interage com o sistema ajuda a definir o escopo (fronteira) e as funcionalidades necessárias para cada perfil. Atores não são bancos de dados (B), hardware (E) ou meras ferramentas de inclusão visual (D).'
  },
  {
    id: 'req-15',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Qual a relação prática entre as fases de requisitos e os diagramas de modelagem?',
    options: [
      'A fase de análise frequentemente utiliza a visão estrutural e comportamental modelada para validar o real entendimento do problema do usuário.',
      'A elicitação de necessidades depende exclusivamente do diagrama de sequência para mapear os complexos requisitos não funcionais de infraestrutura.',
      'A especificação técnica proíbe estritamente o uso de modelagem visual e foca apenas nos severos limites de disponibilidade da estrutura em camadas.',
      'A validação real ocorre no instante em que o modelo cliente-servidor estabelece a herança direta entre as classes definidas pelos usuários finais.',
      'A análise robusta converte imediatamente a interação cronológica desenhada em código fonte executável ignorando os relacionamentos de metas.'
    ],
    correctAnswer: 0,
    explanation: 'Diagramas ajudam a validar se o entendimento técnico do problema está correto. Elicitação não depende exclusivamente de diagramas de sequência (B), nem a especificação proíbe modelagem visual (C).'
  },
  {
    id: 'req-16',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Qual é a principal consequência de uma falha grave ocorrida durante a fase de validação?',
    options: [
      'O sistema pode até ser construído de forma tecnicamente perfeita mas muito provavelmente não atenderá às necessidades reais de negócio do cliente.',
      'O software inevitavelmente sofrerá falhas críticas de desempenho pois a modelagem unificada das classes ignorou o diagrama dinâmico em loops.',
      'A relação flexível de extensão dos casos de uso tornará permanentemente obrigatória a execução de métodos estáticos na camada de interfaces.',
      'O cliente insatisfeito precisará refazer o moderno modelo cliente-servidor para incorporar todas as mensagens síncronas omitidas na elicitação.',
      'A arquitetura central de desenvolvimento perderá a capacidade nativa de processar os importantes adjetivos estruturais previstos na linguagem ágil.'
    ],
    correctAnswer: 0,
    explanation: 'Se a validação falha, corre-se o risco de construir um sistema que funciona tecnicamente, mas não serve para o propósito do cliente. As outras opções focam em falhas técnicas específicas de diagramas ou arquitetura que não são a consequência direta de uma validação de requisitos falha.'
  },
  {
    id: 'req-17',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'O mapeamento dos requisitos funcionais se beneficia do diagrama de sequência porque:',
    options: [
      'O comportamento dinâmico modelado no diagrama ajuda a detalhar exatamente como o sistema executará as ações sistêmicas descritas nos requisitos.',
      'Os requisitos funcionais delimitam com precisão os atributos físicos e as composições de rede que permanecerão estáticos na visão arquitetural.',
      'O diagrama visual foca quase que inteiramente nas restrições de desempenho da rede enquanto os requisitos mapeiam a comunicação física estruturada.',
      'O detalhamento dinâmico profundo converte velozmente necessidades operacionais de rede em heranças rígidas presentes na camada de lógica pura.',
      'Os requisitos operacionais delimitam a relação técnica de extensão para garantir que todas as chamadas síncronas ocorram unicamente na elicitação.'
    ],
    correctAnswer: 0,
    explanation: 'O diagrama de sequência mostra a interação entre objetos ao longo do tempo para realizar uma funcionalidade, detalhando o comportamento dinâmico. As outras opções confundem atributos físicos, restrições de rede ou herança com o propósito do diagrama de sequência.'
  },
  {
    id: 'req-18',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Como os requisitos não funcionais podem impactar a elaboração do diagrama de classes?',
    options: [
      'Regras severas de segurança podem obrigar o time técnico a projetar classes específicas e robustas para lidar com a criptografia de dados no sistema.',
      'As duras restrições técnicas garantem que todos os atores utilizem unicamente a relação de inclusão rápida para acessar a interface modelada do cliente.',
      'A indispensável disponibilidade ininterrupta do sistema exige diretamente que o diagrama apresente a troca cronológica incessante entre servidores.',
      'Os complexos limites técnicos simplesmente proíbem a representação estática clássica transformando velozes atributos em linhas de vida da arquitetura.',
      'A estruturação não funcional exige forçosamente que a fase preliminar de elicitação desenhe pesados blocos operacionais para substituir a arquitetura.'
    ],
    correctAnswer: 0,
    explanation: 'Requisitos de segurança, por exemplo, podem exigir a criação de classes específicas para criptografia ou auditoria. As outras opções tentam ligar requisitos não funcionais a inclusões de casos de uso ou trocas cronológicas de forma errada.'
  },
  {
    id: 'req-19',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Qual o valor de integrar diagramas de casos de uso no documento formal de especificação?',
    options: [
      'Eles servem primordialmente para documentar de forma bastante visual e clara as grandes metas que os usuários pretendem alcançar ao usar o sistema.',
      'Eles descrevem perfeitamente a complexa arquitetura de banco de dados mapeando atributos estáticos unificados e os difíceis níveis de segurança.',
      'Eles definem com exatidão as chamadas síncronas essenciais na camada profunda de lógica de negócio durante a validação da engenharia estrutural.',
      'Eles obrigam silenciosamente o analista técnico a descartar os requisitos funcionais básicos em favor das estritas regras de desempenho operacional.',
      'Eles detalham metodicamente a troca de longas mensagens ao longo do tempo da aplicação usando blocos lógicos definidos na fase de elicitação técnica.'
    ],
    correctAnswer: 0,
    explanation: 'Eles fornecem uma visão clara e de alto nível das metas do usuário no sistema. Eles não descrevem arquitetura de banco de dados (B), chamadas síncronas de lógica (C) ou mensagens de elicitação técnica (E).'
  },
  {
    id: 'req-20',
    topic: 'Engenharia de Requisitos e Tipos de Requisitos',
    question: 'Como o documento de especificação de requisitos orienta o projeto de padrões de arquitetura?',
    options: [
      'O documento final completo orienta intensamente a equipe técnica na escolha da melhor arquitetura disponível para suportar todas as restrições mapeadas.',
      'A especificação elaborada define estritamente o comportamento cronológico da aplicação forçando o uso pesado de casos de uso no banco de dados.',
      'O longo documento determina precocemente a herança estática obrigatória das interfaces visuais eliminando sumariamente as fases preliminares de elicitação.',
      'A especificação técnica aplica obrigatoriamente relacionamentos de extensão complexos diretamente nas linhas de vida para garantir a alta disponibilidade.',
      'O documento robusto substitui integralmente a linguagem visual de modelagem unificada por estritos requisitos focados no fluxo estrutural de apresentação.'
    ],
    correctAnswer: 0,
    explanation: 'O documento contém as restrições e funcionalidades que a arquitetura deve suportar, servindo como guia para a equipe técnica. As outras opções misturam conceitos de banco de dados, herança e alta disponibilidade de forma confusa.'
  },
  {
    id: 'git-1',
    topic: 'Git e Controle de Versão',
    question: 'Sobre o paradigma de armazenamento de dados utilizado pelo Git, assinale a alternativa correta:',
    options: [
      'O Git salva instantâneos completos do projeto em cada versão registrada ao longo de todo o histórico.',
      'O Git armazena as mudanças delta diretamente no diretório de trabalho durante o desenvolvimento.',
      'O Git registra os deltas dos arquivos modificados apenas quando ocorre uma união de ramificações.',
      'O Git utiliza instantâneos exclusivamente durante a resolução de conflitos gerados pelo envio local.',
      'O Git aplica as mudanças incrementais no servidor remoto ao usar os comandos básicos de tráfego.'
    ],
    correctAnswer: 0,
    explanation: 'Diferente de sistemas que armazenam deltas (diferenças entre arquivos), o Git trata os dados como um conjunto de instantâneos (snapshots) de um mini sistema de arquivos. Cada commit registra o estado completo do projeto naquele momento.'
  },
  {
    id: 'git-2',
    topic: 'Git e Controle de Versão',
    question: 'Qual é a função exata da Staging Area no ciclo de vida de um arquivo gerenciado pelo Git?',
    options: [
      'Preparar e organizar as modificações específicas que farão parte do próximo instantâneo consolidado.',
      'Armazenar os arquivos temporários criados automaticamente pela ramificação leve de funcionalidades.',
      'Sincronizar o histórico local com o repositório remoto através da execução do comando de envio direto.',
      'Registrar o estado modificado dos arquivos diretamente dentro do diretório de trabalho do desenvolvedor.',
      'Consolidar de forma definitiva as mudanças incrementais provenientes das linhas de produto principal.'
    ],
    correctAnswer: 0,
    explanation: 'A Staging Area (ou Index) é uma área intermediária onde você seleciona quais alterações (do diretório de trabalho) devem ser incluídas no próximo commit. Isso permite um controle granular sobre o que é versionado.'
  },
  {
    id: 'git-3',
    topic: 'Git e Controle de Versão',
    question: 'O que ocorre fisicamente no fluxo do Git quando o comando git commit é executado no terminal?',
    options: [
      'Os arquivos preparados na área intermediária são consolidados como um instantâneo no repositório local.',
      'As mudanças registradas em deltas são enviadas diretamente para o repositório remoto na nuvem original.',
      'O diretório de trabalho é atualizado com o histórico de desenvolvimento mais recente advindo do servidor.',
      'Uma nova ramificação leve é criada visando isolar o produto principal das novas funcionalidades inseridas.',
      'Os conflitos lógicos gerados por linhas de desenvolvimento separadas são resolvidos de forma automática.'
    ],
    correctAnswer: 0,
    explanation: 'O comando commit pega os arquivos que estão na Staging Area e os salva permanentemente como um snapshot no banco de dados do repositório local (.git), criando um novo nó no histórico.'
  },
  {
    id: 'git-4',
    topic: 'Git e Controle de Versão',
    question: 'Para mover um arquivo do estado puramente modificado para o estado preparado, qual comando é usado?',
    options: [
      'O comando git add transfere as mudanças do diretório de trabalho para a área de preparação do sistema.',
      'O comando git commit move as alterações incrementais para consolidar integralmente o repositório remoto.',
      'O comando git push envia o estado modificado para a nuvem resolvendo os complexos conflitos estruturais.',
      'O comando git merge une as linhas de desenvolvimento separadas direto na configuração base do projeto.',
      'O comando git pull sincroniza os instantâneos completos presentes unicamente na ramificação de origem.'
    ],
    correctAnswer: 0,
    explanation: 'O comando "git add" é responsável por mover as alterações do "Working Directory" (Diretório de Trabalho) para a "Staging Area" (Área de Preparação), marcando-as para o próximo commit.'
  },
  {
    id: 'git-5',
    topic: 'Git e Controle de Versão',
    question: 'A criação de uma ramificação leve no ambiente de desenvolvimento de software serve fundamentalmente para:',
    options: [
      'Desenvolver novas funcionalidades em um universo isolado sem alterar o código estável do produto principal.',
      'Consolidar os arquivos estáticos do diretório de trabalho diretamente no histórico restrito do servidor remoto.',
      'Resolver imediatamente todos os conflitos lógicos surgidos durante o intenso trabalho de colaboração remota.',
      'Substituir o uso técnico de instantâneos pelo registro de deltas perante modificações em arquivos pequenos.',
      'Enviar as alterações contidas na área de preparação para sincronização rápida utilizando o comando de busca.'
    ],
    correctAnswer: 0,
    explanation: 'Branches (ramificações) permitem que você se desvie da linha principal de desenvolvimento e continue a trabalhar sem bagunçar essa linha estável, facilitando o desenvolvimento paralelo de recursos.'
  },
  {
    id: 'git-6',
    topic: 'Git e Controle de Versão',
    question: 'Qual a operation central realizada pelo comando git push dentro de um fluxo contínuo de colaboração?',
    options: [
      'Envia o histórico consolidado do repositório local para atualizar as informações presentes no servidor remoto.',
      'Sincroniza o diretório de trabalho baixando estritamente os deltas de mudanças provindos do produto principal.',
      'Move os arquivos modificados de forma direta para a área de preparação originando o novo código da equipe.',
      'Une duas linhas de desenvolvimento isoladas resolvendo os pesados conflitos de sobrescrita de configuração.',
      'Cria um universo paralelo simplificado para isolar inteiramente o código de funcionalidades ainda incompletas.'
    ],
    correctAnswer: 0,
    explanation: 'O "git push" é o comando que transfere os commits do seu repositório local para um repositório remoto, compartilhando suas alterações com o restante da equipe.'
  },
  {
    id: 'git-7',
    topic: 'Git e Controle de Versão',
    question: 'O comando git pull atua no controle avançado de versão executando quais operações técnicas em sequência?',
    options: [
      'Realiza a busca das atualizações remotas na nuvem e logo em seguida une os históricos baixados ao local.',
      'Adiciona os arquivos modificados na área de preparação e cria um novo instantâneo no diretório de trabalho.',
      'Envia o código plenamente consolidado para a nuvem e cria uma ramificação limpa para o produto estrutural.',
      'Desfaz a sobrescrita acidental de dados combinando deltas antigos e instantâneos novos simultaneamente.',
      'Isola as novas funcionalidades em um ambiente de desenvolvimento separado antes de consolidar os arquivos.'
    ],
    correctAnswer: 0,
    explanation: 'O "git pull" é, na verdade, uma combinação de dois comandos: "git fetch" (busca as alterações do servidor) seguido de um "git merge" (une essas alterações ao seu branch atual).'
  },
  {
    id: 'git-8',
    topic: 'Git e Controle de Versão',
    question: 'A operação de união de histórias possui como objetivo técnico central dentro do gerenciamento do código:',
    options: [
      'Combinar linhas de desenvolvimento separadas integrando as devidas modificações das diferentes ramificações.',
      'Transitar os arquivos presentes no estado preparado diretamente para o diretório de trabalho da equipe remota.',
      'Envia os instantâneos salvos exclusivamente no repositório local para o servidor originário do projeto base.',
      'Eliminar o denso histórico de deltas acumulados com a intenção de economizar bastante espaço de armazenamento.',
      'Isolar o código crítico em desenvolvimento do arquivo base para impedir permanentemente eventuais sobrescritas.'
    ],
    correctAnswer: 0,
    explanation: 'O "merge" (união) serve para integrar o histórico de duas ramificações diferentes. Por exemplo, quando você termina uma funcionalidade em um branch e quer trazê-la para o branch principal (main/master).'
  },
  {
    id: 'git-9',
    topic: 'Git e Controle de Versão',
    question: 'Trabalhar sem adotar um sistema de gerenciamento de configuração expõe o projeto de software a qual risco?',
    options: [
      'Aumento expressivo das chances de perda irreversível de histórico e ocorrência de sobrescrita acidental de arquivos.',
      'Adoção obrigatoriamente estrita do armazenamento de instantâneos que afeta o espaço em disco do repositório.',
      'Criação excessiva de ramificações simples que impossibilitam a consolidação final do arquivo no diretório original.',
      'Extrema lentidão na sincronização de pacotes através dos comandos de fluxo enviados ao repositório descentralizado.',
      'Bloqueio sistêmico permanente da área de preparação perante o volume elevado de modificações em andamento local.'
    ],
    correctAnswer: 0,
    explanation: 'Sem controle de versão, não há rastro de quem mudou o quê, nem como voltar atrás em caso de erro. A colaboração torna-se perigosa, pois um desenvolvedor pode facilmente sobrescrever o trabalho do outro.'
  },
  {
    id: 'git-10',
    topic: 'Git e Controle de Versão',
    question: 'O que ocasiona exatamente o surgimento de um conflito lógico na execução da operação de união de histórias?',
    options: [
      'Duas linhas isoladas de desenvolvimento alteraram a mesma exata região de um arquivo usando lógicas divergentes.',
      'O diretório de trabalho arquivou modificações extensas que não transitaram para a área de preparação rapidamente.',
      'O repositório remoto recusou categoricamente a criação da nova ramificação designada para corrigir funcionalidades.',
      'O sistema de versionamento falhou na tentativa de converter deltas de alterações em novos instantâneos autônomos.',
      'O envio do histórico completo foi severamente interrompido antes de conseguir sincronizar com o produto original.'
    ],
    correctAnswer: 0,
    explanation: 'Conflitos ocorrem quando o Git não consegue decidir automaticamente como mesclar mudanças. Isso acontece tipicamente quando a mesma linha de um arquivo foi alterada de formas diferentes em dois branches que estão sendo unidos.'
  },
  {
    id: 'git-11',
    topic: 'Git e Controle de Versão',
    question: 'Qual etapa indispensável do fluxo tradicional do Git independe completamente de conexão com a rede externa?',
    options: [
      'A transição contínua de um arquivo do diretório de trabalho até sua total consolidação dentro do repositório local.',
      'A sincronização das atualizações produzidas pela equipe empregando as conjuntas operações de busca e de união.',
      'A transferência do grande histórico consolidado no ambiente físico para originar o código espelhado na nuvem remota.',
      'O exigente processo de baixar os deltas de mudanças contidos em outra ramificação para contornar sobrescritas leves.',
      'A complexa resolução dos conflitos estruturais iniciados unicamente na hora exata do envio conclusivo de histórico.'
    ],
    correctAnswer: 0,
    explanation: 'Como o Git é um sistema distribuído, quase todas as operações (add, commit, branch, merge, log) são feitas localmente no seu computador, sem precisar de internet ou servidor.'
  },
  {
    id: 'git-12',
    topic: 'Git e Controle de Versão',
    question: 'O Git inovou o controle rigoroso de configuração alterando o clássico paradigma de armazenamento para focar em:',
    options: [
      'Instantâneos autônomos e completos que registram perfeitamente o estado inteiro de todo o projeto a cada alteração.',
      'Gravação de modificações sequenciais em deltas visando blindar as linhas paralelas no repositório local principal.',
      'Sincronização constante atrelada ao repositório hospedado na nuvem vetando o uso isolado do diretório de trabalho.',
      'Geração de ramificações complexas capazes de mesclar o software automaticamente antes da área de preparação.',
      'Repasse contínuo dos arquivos em estado modificado sem requisitar comandos secundários para a união de histórias.'
    ],
    correctAnswer: 0,
    explanation: 'A grande inovação do Git foi pensar em "snapshots" (fotos do estado do projeto) em vez de apenas "diffs" (diferenças entre versões). Isso torna operações como ramificação e união extremamente rápidas e seguras.'
  },
  {
    id: 'git-13',
    topic: 'Git e Controle de Versão',
    question: 'Os arquivos localizados no Diretório de Trabalho que receberam alterações recentes encontram-se em qual estado?',
    options: [
      'Ocupam o estado modificado apontando que possuem recentes alterações e que ainda não se encontram preparados.',
      'Situam-se no estado plenamente consolidado o que assegura a integridade absoluta dos instantâneos no disco central.',
      'Constam como propriedade única do sistema remoto aguardando apenas a sincronização através do envio de histórico.',
      'Apresentam-se como ramificações conectadas e isentas de variados conflitos de lógica no código estrutural primário.',
      'Foram devidamente convertidos em deltas bloqueados com o intuito de neutralizar os amplos efeitos da entropia inicial.'
    ],
    correctAnswer: 0,
    explanation: 'No Git, um arquivo pode estar em três estados: modificado (alterado mas não preparado), preparado (marcado para o próximo commit) ou consolidado (salvo no banco de dados local).'
  },
  {
    id: 'git-14',
    topic: 'Git e Controle de Versão',
    question: 'A distinção operacional principal entre buscar os dados no ambiente remoto e executar a sincronização direta é que:',
    options: [
      'Sincronizar implica em transferir os dados da nuvem para o computador e uni-los instantaneamente ao código original.',
      'Buscar engloba movimentar as valiosas informações unicamente da rede externa para o limite interno da área de preparo.',
      'Sincronizar garante que os componentes do diretório de trabalho origines novos e urgentes instantâneos na nuvem ativa.',
      'Buscar ocasiona inquestionavelmente o surgimento de ramificações virtuais orientadas a blindar o pacote principal.',
      'Sincronizar impede terminantemente o aproveitamento de deltas limitando-se ao preenchimento integral do histórico.'
    ],
    correctAnswer: 0,
    explanation: 'O "git fetch" (buscar) apenas baixa os dados do remoto para o seu repositório local, mas não altera seu trabalho atual. Já o "git pull" (sincronizar) baixa e tenta unir (merge) automaticamente ao seu branch.'
  },
  {
    id: 'git-15',
    topic: 'Git e Controle de Versão',
    question: 'Para embutir uma nova função sistêmica sem arriscar quebrar a base de código do produto o operador necessita:',
    options: [
      'Inaugurar uma ramificação exclusiva contendo e isolando as adições dentro de um universo alternativo e controlável.',
      'Repetir incansavelmente os envios de consolidações locais prevendo a manutenção de salvaguardas no modelo remoto.',
      'Apagar completamente os itens situados tanto no diretório flexível quanto na área transitória da base de configurações.',
      'Permutar todos os instantâneos arquivados no repositório de entrada pelos componentes delta das divisões secundárias.',
      'Equilibrar e transpor os dados simultaneamente mitigando qualquer conflito sistêmico no exato instante de codificação.'
    ],
    correctAnswer: 0,
    explanation: 'O uso de branches é a prática recomendada para isolar o desenvolvimento de novas funcionalidades (feature branches), mantendo o branch principal (main) sempre estável e pronto para produção.'
  },
  {
    id: 'git-16',
    topic: 'Git e Controle de Versão',
    question: 'O diretório designado como repositório local de um projeto funciona estritamente como um reduto direcionado a:',
    options: [
      'Alojar de modo definitivo os diversificados instantâneos salvos formando toda a linha do tempo e o arquivo histórico.',
      'Reter de forma passageira todas as cópias concebidas na área estruturada de preparo visando sustentar a nuvem limpa.',
      'Ofertar a espinha dorsal de nuvem para auxiliar a comunicação dos funcionários excluindo repositórios de base remota.',
      'Propiciar os dados em padrão delta reduzindo assim possíveis atritos originados ao transitar para outro ponto divergente.',
      'Acumular exclusivamente os códigos de núcleo impedindo fortemente a fundação de ramificações de pesquisa tecnológica.'
    ],
    correctAnswer: 0,
    explanation: 'O repositório local (pasta .git) contém todo o histórico do projeto, todos os commits e branches. É o banco de dados onde o Git armazena os metadados e o banco de dados de objetos do seu projeto.'
  },
  {
    id: 'git-17',
    topic: 'Git e Controle de Versão',
    question: 'O encadeamento habitual empregado ao trabalhar em um novo arquivo no sistema requer exatamente qual progressão?',
    options: [
      'Começar pela edição no diretório de trabalho, transferir o conteúdo para a área de preparação e finalizar a consolidação.',
      'Preparar o repositório principal, enviar de imediato ao sistema remoto e por fim arranjar tudo no limite estático da rede.',
      'Consolidar no diretório flexível inicial, exportar os deltas configurados e montar a área temporária da máquina operante.',
      'Alinhar a configuração do servidor exterior, traçar os novos instantâneos em nuvem e fundir as variações de funcionalidade.',
      'Migrar do servidor de versionamento à área preparatória concluindo ao apartar o resultado dentro do limite de colaboração.'
    ],
    correctAnswer: 0,
    explanation: 'O fluxo básico do Git é: 1. Você modifica arquivos no seu diretório de trabalho. 2. Você prepara os arquivos (git add), adicionando instantâneos deles à sua área de preparação. 3. Você faz um commit (git commit), que leva os arquivos como estão na área de preparação e armazena esse instantâneo permanentemente no seu diretório Git.'
  },
  {
    id: 'git-18',
    topic: 'Git e Controle de Versão',
    question: 'O recurso empregado ao sincronizar o esforço contínuo das equipes agrega invariavelmente quais funções operantes?',
    options: [
      'A busca de pacotes novos perante o servidor base externo adicionada à união destas novidades no repositório interno.',
      'O direcionamento rápido dos componentes consolidados à nuvem unida à imediata fragmentação das ramificações soltas.',
      'A consolidação dos conjuntos afetados associada rigorosamente à migração da camada contida na zona prévia de testes.',
      'O processamento quantitativo das diferenciações acrescido da resposta plenamente autônoma diante de atritos espessos.',
      'A locomoção entre o quadrante criativo em andamento até o repasse do arquivo dispensando análises extras do formato.'
    ],
    correctAnswer: 0,
    explanation: 'A sincronização (pull) envolve buscar (fetch) o que há de novo no servidor e unir (merge) essas mudanças ao seu trabalho local, permitindo que a equipe trabalhe de forma integrada.'
  },
  {
    id: 'git-19',
    topic: 'Git e Controle de Versão',
    question: 'Na estrutura segmentada das árvores de desenvolvimento a linha mestre possui a incumbência principal de assegurar:',
    options: [
      'A hospedagem do agrupamento mais confiável e testado de arquivos protegendo essa base principal dos fluxos de ensaio.',
      'A reserva severa do conteúdo de código alcançado via decodificação dos antigos deltas minimizando a entropia local original.',
      'A exclusão definitiva das modificações aguardando na área prévia sempre que um impasse no percurso originário for exposto.',
      'A finalização sistêmica unificada executando apenas sincronismos quando o pacote estiver distante de uma forte rede ativa.',
      'O desencadeamento autônomo perante os itens substituídos pelos demais componentes antecedendo a ida ao histórico final.'
    ],
    correctAnswer: 0,
    explanation: 'O branch principal (geralmente chamado de "main" ou "master") deve representar o estado estável do projeto. Desenvolvimentos experimentais ou novas funções devem ocorrer em outros branches até estarem prontos.'
  },
  {
    id: 'git-20',
    topic: 'Git e Controle de Versão',
    question: 'No instante em que o mecanismo funde as linhas e enxerga uma grave contradição estrutural ele requer como prioridade:',
    options: [
      'Interromper o processo padronizado de união exigindo imperativamente a intervenção e decisão avalizada pelo programador.',
      'Cancelar o formato local superpondo os dados originais através do download integral proveniente do arquivo primário remoto.',
      'Reverter os resultados processados no percurso local retomando integralmente as composições de antes da divisão paralela.',
      'Separar os trechos confusos transferindo estes problemas ao espaço provisório de preparo desativando o envio contínuo final.',
      'Trocar o conceito primário voltado a instantâneos visando incorporar deltas até que os lados atinjam grande correspondência.'
    ],
    correctAnswer: 0,
    explanation: 'Quando ocorre um conflito que o Git não pode resolver sozinho, ele pausa o merge e marca os arquivos conflitantes. O desenvolvedor deve então abrir os arquivos, resolver as diferenças manualmente, prepará-los e finalizar o commit de união.'
  }
];
