## Franky junior

### 1. Requisitos Funcionais

- **RF01**: O sistema deve permitir o cadastro de usuários com informações básicas (nome, e-mail e senha).

- **RF02**: O sistema deve permitir que usuários realizem login utilizando e-mail e senha cadastrados.

- **RF03**: O sistema deve permitir a recuperação de senha por meio do e-mail do usuário.

- **RF04**: O sistema deve permitir que o usuário edite seus dados cadastrais.\

- **RF05**: O sistema deve permitir a exclusão da conta do usuário.

- **RF06**: O sistema deve permitir o cadastro de dados específicos relacionados ao objetivo do sistema (ex: produtos, tarefas, serviços, etc.).

- **RF07**: O sistema deve permitir a visualização de todos os registros cadastrados pelo usuário.

- **RF08**: O sistema deve permitir a edição dos registros cadastrados.

- **RF09**: O sistema deve permitir a exclusão dos registros cadastrados.

- **RF10**: O sistema deve permitir a busca e filtragem de informações cadastradas.

- **RF11**: O sistema deve gerar relatórios com base nos dados armazenados.

- **RF12**: O sistema deve permitir diferentes níveis de acesso (ex: administrador e usuário comum).

- **RF13**: O sistema deve registrar logs das ações realizadas pelos usuários.

- **RF14**: O sistema deve enviar notificações ao usuário (ex: e-mail ou dentro do sistema).

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

As Regras de Negócio representam o “coração” do aplicativo, ou seja, descrevem o que o sistema faz de fato e quais regras ele segue para funcionar corretamente, sem depender de linguagem de programação, banco de dados ou qualquer tecnologia específica.

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