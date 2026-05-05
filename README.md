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

## 5. PROTÓTIPO DE BAIXA FIDELIDADE

---
