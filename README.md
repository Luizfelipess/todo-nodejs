
# To-Do
Projeto de CRUD To-Do



## Stack utilizada
NodeJS + Typescript + Sequelize + Mysql + Docker



## Requisitos e Instalação

- Docker
- NPM
- Node
- Typescript

Caso não tenha NPM e Node, e não saiba como instalar siga o tutorial a seguir 
[Link](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos)

## Instalação do projeto

```
git clone https://github.com/Luizfelipess/todo-nodejs.git <nome-pasta>
```

Para instalar nodemon, typescript e ts-node global
```
npm i -g nodemon typescript ts-node
```

Instalando pacotes após entrar na pasta do projeto
```
npm install
```

### Iniciando o projeto
```
npm run start-dev
```

Rodar o docker 
```
docker-compose up -d
```

Conectar ao banco de dados mysql usando as credenciais que estão no docker-compose.yml
- Criar tabela **tasks**

Crie o arquivo .env, utilizando o .env.example como base, colocando credenciais do banco que esta no docker-compose.yml:
```
cp .env.example .env
```

## Documentação da API

### Endpoints
| Método | Rota | Descrição |
| -------|-------|--------- |
| GET    | /todos      | Buscar todos os To-Do|
| GET    | /todo/{id} | Buscar um To-Do especifico|
| POST   | /todo/create | Criar um To-Do|
| PUT    | /todo/edit/{id} | Editar um To-Do|
| DELETE | /todo/delete/{id} | Deletar um To-Do|

Payload
```json
{
  "title": "<nome>",
  "done": "<false/0 true/1>"
}
```
Done é opcional ao criar um To-Do


### Melhorias futuras
- Criação de repositories
- Criação de services
- Testes
- Login
- Autenticação
