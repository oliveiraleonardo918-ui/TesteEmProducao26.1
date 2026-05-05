# DOCUMENTO DE REQUISITOS - Aplicativo GAC

---

## 1. VISÃO GERAL

### 1.1. Introdução

A coordenação do Centro de Tecnologia (CT) gerencia diariamente a movimentação intensa de projetores multimídia e chaves de laboratórios e salas de aula. Atualmente, o fluxo envolve professores, estagiários e funcionários da secretaria, exigindo um registro preciso de quem retirou o item, o horário e a finalidade acadêmica.

### 1.2. Objetivo Geral

Criar uma aplicação de gestão patrimonial para o controle de empréstimos e devoluções de ativos do CT.

### 1.3. Objetivos Específicos

- Desenvolver um banco de dados de inventário (projetores com número de série e chaves por bloco/sala).
- Implementar um sistema de autenticação para professores e funcionários.
- Desenvolver uma aplicação web para o gerenciamento de ativos e usuários.

---

## 2. ATORES

### 2.1. Atendente

- **Descrição:** Funcionários da secretaria do centro de ciências tecnológicas (CCT) da UNIFOR que lidam com o controle patrimonial.
- **Ações Principais:** Emprestar itens, receber devoluções, gerenciar estoque e gerar relatórios.

### 2.2. Administrador/Gestor

- **Descrição:** Diretor do centro de ciências tecnológicas.
- **Ações Principais:** Gerenciar os usuários do sistema.

### 2.3. Professor

- **Descrição:** Usuário dos ativos do centro de ciências tecnológicas.
- **Ações Principais:** Solicitar empréstimo e realizar a devolução de projetores.

---

## 3. REQUISITOS FUNCIONAIS

| ID         | Requisito     | Descrição                                                       | Prioridade |
| :--------- | :------------ | :-------------------------------------------------------------- | :--------- |
| **RF01**   | Autenticação  | Página de login com matrícula e senha.                          | Alta       |
| **RF01.1** | Validação     | Validar credenciais e exibir mensagens de erro.                 | Alta       |
| **RF01.2** | Provedor Auth | Utilizar Firebase Authentication.                               | Alta       |
| **RF02**   | Cadastro      | Cadastro de novos usuários (nome, matrícula, e-mail e senha).   | Alta       |
| **RF02.1** | Persistência  | Armazenar dados no Firebase Realtime Database.                  | Alta       |
| **RF02.2** | Unicidade     | Validar se e-mail ou matrícula já estão cadastrados.            | Alta       |
| **RF03**   | Navegação     | Implementar rotas via React Router.                             | Alta       |
| **RF03.1** | Proteção      | Redirecionar usuários não autenticados para o login.            | Alta       |
| **RF04**   | Listagem      | Exibir itens recuperados do banco de dados.                     | Alta       |
| **RF04.1** | Detalhes      | Permitir navegação para detalhamento do item.                   | Alta       |
| **RF05**   | CRUD Projetor | Cadastro com marca, modelo, património e status.                | Alta       |
| **RF06**   | CRUD Chave    | Cadastro com sala, bloco e status.                              | Alta       |
| **RF07**   | CRUD Usuário  | Cadastro com nome, e-mail, matrícula e role.                    | Alta       |
| **RF08**   | Movimentação  | Registro de empréstimo/devolução (data, hora, professor, sala). | Alta       |

---

## 4. REQUISITOS NÃO FUNCIONAIS

| ID          | Categoria       | Descrição                                            | Prioridade |
| :---------- | :-------------- | :--------------------------------------------------- | :--------- |
| **RNF01**   | Tecnologia      | Front-end em React.js e Back-end em Java/SpringBoot. | Alta       |
| **RNF02**   | Compatibilidade | Compatível com Chrome, Firefox e Edge.               | Alta       |
| **RNF02.1** | Responsividade  | Interface adaptável para Desktop, Tablet e Mobile.   | Média      |
| **RNF03**   | Desempenho      | Carregamento de páginas inferior a 3 segundos.       | Média      |
| **RNF03.2** | Desempenho      | Operações de CRUD concluídas em menos de 2 segundos. | Média      |
| **RNF04**   | Segurança       | Conformidade com a LGPD e uso de Firebase Auth.      | Alta       |
| **RNF05**   | Usabilidade     | Interface intuitiva e design consistente.            | Alta       |

---

## 5. CASOS DE USO

### UC01 - Cadastrar Novo Usuário (Atendente/Gestor)

- **Ator:** Administrador ou Gestor.
- **Descrição:** Permite a criação de novos perfis para operar o sistema (outros atendentes ou gestores).
- **Fluxo Principal:** 1. O administrador acessa a área de gestão de usuários. 2. Insere nome, e-mail, matrícula e define o nível de acesso (role). 3. O sistema valida os dados e persiste no Firebase.

### UC02 - Cadastrar Novo Professor

- **Ator:** Atendente ou Administrador.
- **Descrição:** Registro de professores habilitados a solicitar empréstimos.
- **Fluxo Principal:** 1. O atendente solicita a matrícula e o nome completo do professor. 2. O sistema verifica se a matrícula já existe. 3. O registro é salvo como um perfil de "Professor".

### UC03 - Realizar Empréstimo de Ativo

- **Ator:** Atendente.
- **Descrição:** Registro da saída de um projetor ou chave para uso acadêmico.
- **Fluxo Principal:** 1. O atendente identifica o professor pela matrícula. 2. O sistema lista os ativos disponíveis (status: "Disponível"). 3. O atendente seleciona o ativo (projetor ou chave) e confirma a data/hora. 4. O status do ativo muda para "Emprestado".

### UC04 - Realizar Devolução de Ativo

- **Ator:** Atendente.
- **Descrição:** Registro do retorno do item à secretaria.
- **Fluxo Principal:** 1. O atendente localiza o empréstimo ativo pelo item ou pela matrícula do professor. 2. Confirma o recebimento e verifica o estado do item. 3. O sistema registra o horário de devolução e altera o status do ativo para "Disponível".

### UC05 - Troca de Ativo por Defeito

- **Ator:** Atendente.
- **Descrição:** Substituição rápida de um item durante um empréstimo em caso de falha técnica.
- **Fluxo Principal:** 1. O atendente acessa o empréstimo em curso. 2. Seleciona a opção "Trocar por defeito". 3. O item defeituoso tem seu status alterado para "Em Manutenção". 4. O atendente seleciona um novo item disponível para substituir. 5. O sistema gera um novo vínculo de movimentação para o novo item.

### UC06 - Gerar Relatório de Movimentações

- **Ator:** Atendente ou Administrador.
- **Descrição:** Geração de logs de todas as saídas e entradas em um período.
- **Fluxo Principal:** 1. O usuário seleciona o período (data início e fim). 2. O sistema filtra todas as movimentações (empréstimos, devoluções e trocas). 3. Exibe a lista formatada ou permite exportação dos dados.

### UC07 - Consultar Inventário e Status de Ativos

- **Ator:** Atendente ou Gestor.
- **Descrição:** Visualização rápida do estado de todos os itens do patrimônio.
- **Fluxo Principal:** 1. O usuário acessa a dashboard de ativos. 2. O sistema exibe a lista filtrável por:
  _ **Disponíveis:** Prontos para uso.
  _ **Alugados/Emprestados:** Identifica com qual professor está o item. \* **Em Manutenção:** Itens com defeito aguardando reparo.

### UC08 - Cadastrar Novo Ativo (Chave ou Projetor)

- **Ator:** Atendente ou Administrador.
- **Descrição:** Inclusão de novos itens físicos no inventário do CT.
- **Fluxo Principal:** 1. O usuário escolhe o tipo de ativo (Chave ou Projetor). 2. Preenche os dados obrigatórios (Marca/Modelo para projetor; Sala/Bloco para chaves). 3. Insere o número de patrimônio e define o status inicial como "Disponível".

---

## 6. REGRAS DE NEGÓCIO (RN)

| ID       | Regra                         | Descrição                                                                                                                                   |
| :------- | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| **RN01** | **Disponibilidade de Ativo**  | Um ativo (projetor ou chave) só pode ser emprestado se o seu status atual for "Disponível".                                                 |
| **RN02** | **Limite de Empréstimos**     | Cada professor pode ter, no máximo, um projetor e uma chave de sala simultaneamente.                                                        |
| **RN03** | **Identificação Obrigatória** | Nenhum empréstimo pode ser realizado sem o registro da matrícula válida do professor e a assinatura digital/confirmação do atendente.       |
| **RN04** | **Tempo de Permanência**      | O empréstimo deve ser encerrado obrigatoriamente até o final do turno em que foi realizado (Manhã, Tarde ou Noite).                         |
| **RN05** | **Bloqueio de Pendência**     | Professores com itens em atraso (não devolvidos no prazo) ficam impedidos de realizar novos empréstimos até a regularização.                |
| **RN06** | **Registro de Defeito**       | Ao trocar um ativo por defeito, o sistema deve obrigatoriamente exigir uma breve descrição da falha para fins de manutenção.                |
| **RN07** | **Hierarquia de Cadastro**    | Apenas usuários com perfil "Administrador/Gestor" podem excluir ativos ou usuários do sistema. Atendentes podem apenas cadastrar ou editar. |
| **RN08** | **Integridade de Histórico**  | Movimentações finalizadas (devolvidas) não podem ser excluídas, apenas consultadas para fins de auditoria e relatórios.                     |

---

## 7. DIAGRAMA DE CLASSES

---

## 8. DIAGRAMA DE CASOS DE USO

---

## 9. DIAGRAMA DE SEQUÊNCIA

---

## 10. PROTÓTIPO DE BAIXA FIDELIDADE

---
