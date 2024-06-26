# NIUCO API Integration Challenge

## Descrição

Esta aplicação integra-se com uma API mock, coleta dados de usuários, processa e exibe essas informações conforme as regras de negócio especificadas.
Este projeto é um console application. 

## Requisitos

- Node.js
- Docker (opcional)
- npm

## Instalação

### Rodando com Docker

1. Certifique-se de ter o Docker instalado.
2. Execute o comando `docker-compose up` para iniciar a aplicação.

### Rodando Localmente

1. Clone o repositório: ``` git clone git@github.com:pedroarthuralvesdeoliveira/niuco-typescript-version.git ```
2. Navegue até o diretório do projeto e instale as dependências: cd niuco-typescript-version

```bash
npm install
```

3. Inicie a aplicação Mock

```bash
cd config
json-server --watch db.json
```

4. Inicie a aplicação: 
```bash
npm start
```

## Testes

Para rodar os testes, execute: 
```bash
npm test
```
## Configuração
Crie um arquivo .env na raiz do projeto com a URL da API:
```bash
API_URL=http://0.0.0.0:8080
```
