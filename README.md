# pure-http-api

Api criada para fins de estudo usando apenas a api do node

## :dark_sunglasses: Rodando
```shell
node src/index.js
```

# :memo: Endpoints
## Listar Usuarios

### Listar todos os usuarios
> GET - /users

Response
```json
[
  {
    "id": 1,
    "name": "Usuario 1"
  },
  {
    "id": 2,
    "name": "Usuario 2"
  },
  {
    "id": 3,
    "name": "Usuario 3"
  }
]
```

Para listar por ordem decrescente
> GET - /users?order=desc

Response
```json
[
  {
    "id": 3,
    "name": "Usuario 3"
  },
  {
    "id": 2,
    "name": "Usuario 2"
  },
  {
    "id": 1,
    "name": "Usuario 1"
  }
]
```

### Listar um usuario
> GET - /user/:id

Response
```json
{
  "id": 1,
  "name": "Usuario 1"
}
```

## Criar novo usuario
> POST - /users

Request
```json
{
  "name": "Novo usuario"
}
```

Response
```json
{
  "id": 4,
  "name": "Novo usuario"
}
```

## Atualizar usuario
> PUT - /users/:id

Request
```json
{
	"name": "usuario atualiado"
}
```

Response
```json
{
  "id": 3,
  "name": "usuario atualiado"
}
```

## Deletar usuario
> DELETE - /users/:id

Response
```json
{
  "deleted": true
}
```

Feito por [the spanish guy](https://github.com/the-spanish-guy) com :purple_heart: