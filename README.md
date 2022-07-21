## Api simples para app bancário

## SOLID

> **S**: Single Responsibility Principle<br>
> **O**: Open-Closed Principle<br>
> **L**: Liskov-Substitution Principle<br>
> **I**: Interface Segregation Principle<br>
> **D**: Dependency Inversion Principle<br>

## Requisitos

- [ ] Deve ser possível criar uma conta
- [ ] Deve ser possível buscar o extrato
- [ ] Deve ser possível realizar um depósito
- [ ] Deve ser possível realizar um saque
- [ ] Deve ser possível buscar o extrato bancário do cliente por data
- [ ] Deve ser possível atualizar dados da conta do cliente
- [ ] Deve ser possível obter dados da conta do cliente
- [ ] Deve ser possível deletar uma conta

## Regras de negócio

- [ ] Não deve ser possível cadastrar uma conta com CPF existente
- [ ] Não deve ser possível fazer depósito em uma conta não existente
- [ ] Não deve ser possível buscar extrato em uma conta não existente
- [ ] Não deve ser possível fazer saque em uma conta não existente
- [ ] Não deve ser possível excluir uma conta não existente
- [ ] Não deve ser possível fazer saque com saldo insuficiente

## TODOs

- [x] routing
- [x] database config --typeorm --postgres
- [ ] fix classes indexing
- [ ] fix repository returning no metadata from requests

## Rodar o projeto

-- Para rodar o projeto primeiro clone-o

git clone "URL DO PROJETO"<br>
cd "PASTA DO PROJETO"<br>
npm i<br>

-- Scripts

npm run build "Builda o projeto e o salva na dasta ./dist"<br>
npm run start "Starta o arquivo /dist/index.js"<br>
npm run dev "Builda e sobe o projeto com nodemon"<br>
