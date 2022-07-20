## Api simples para app bancário

## Requisitos

- [] Deve ser possível criar uma conta
- [] Deve ser possível buscar o extrato
- [] Deve ser possível realizar um depósito
- [] Deve ser possível realizar um saque
- [] Deve ser possível buscar o extrato bancário do cliente por data
- [] Deve ser possível atualizar dados da conta do cliente
- [] Deve ser possível obter dados da conta do cliente
- [] Deve ser possível deletar uma conta

## Regras de negócio

- [] Não deve ser possível cadastrar uma conta com CPF existente
- [] Não deve ser possível fazer depósito em uma conta não existente
- [] Não deve ser possível buscar extrato em uma conta não existente
- [] Não deve ser possível fazer saque em uma conta não existente
- [] Não deve ser possível excluir uma conta não existente
- [] Não deve ser possível fazer saque com saldo insuficiente

## Rodar o projeto

-- Para rodar o projeto primeiro clone-o

git clone "URL DO PROJETO"
cd "PASTA DO PROJETO"
npm i

-- Scripts

npm run build "Builda o projeto e o salva na dasta ./dist"
npm run start "Starta o arquivo /dist/index.js"
npm run dev "Builda e sobe o projeto com nodemon"
