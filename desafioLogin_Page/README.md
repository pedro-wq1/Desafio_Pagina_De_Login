# Login com access_token

Pagina de login que envia e-mail e senha para a API e recebe um `access_token` (JWT).

## Como executar

```
npm install
npm start
```

Acesse: http://localhost:3000

## Credenciais de teste

- E-mail: `admin@teste.com`
- Senha: `123456`

## Rota da API

| Metodo | Rota     | Descricao                                    |
|--------|----------|----------------------------------------------|
| POST   | `/login` | Valida as credenciais e retorna o access_token |
