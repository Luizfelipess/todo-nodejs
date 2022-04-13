
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

Instalando pacotes
```
npm install
```

### Iniciando o projeto
```
npm run start-dev
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
