# Server

Este é um servidor Node.js construído com Express, Prisma para integração com o banco de dados e JWT para autenticação.

## Configuração

- Certifique-se de ter o Node.js instalado em seu sistema.
- Clone este repositório para o seu ambiente local.
- Execute `npm install` para instalar todas as dependências.
- Certifique-se de configurar a chave secreta JWT no arquivo `server.js`:

```javascript
const jwtSecret = 'sua_chave_secreta';
```
* Inicie o servidor usando node server

# Rotas Disponíveis

* GET /users: Retorna todos os usuários cadastrados no banco de dados.
* POST /register: Registra um novo usuário no banco de dados.
 - Parâmetros: name, email, password.
* POST /login: Realiza login e gera um token JWT.
 - Parâmetros: email, password.
* POST /reset-password: Redefine a senha de um usuário existente.
 - Parâmetros: email, newPassword.
* DELETE /users/:id: Exclui um usuário com o ID fornecido.
* GET /users/:id: Retorna informações de um usuário específico com o ID fornecido.

## Autenticação
Este servidor utiliza autenticação baseada em JWT (JSON Web Tokens). As rotas que requerem autenticação são protegidas por um middleware authenticateToken.

## Banco de Dados
Este servidor utiliza o Prisma como ORM para interagir com o banco de dados. Certifique-se de configurar corretamente o Prisma para se conectar ao seu banco de dados.
