# Post It Quick!

## Índice

1. [Resumo](#1-resumo)
2. [Stack](#2-stack)  
   2.1 [Ambiente de Desenvolvimento](#21-ambiente-de-desenvolvimento)  
   2.2 [Stack utilizada na aplicação](#22-stack-utilizada-na-aplicação)  
   2.3 [Stack do projeto](#23-stack-do-projeto)  
   2.4 [Dependências](#24-dependências)
3. [A Aplicação](#3-a-aplicação)
4. [Iniciando a aplicação](#4-iniciando-a-aplicação)
5. [Licença](#5-licença)

---

## 1. Resumo

Esta é uma aplicação simples de back-end onde os usuários podem postar, comentar em postagens e reagir com like ou dislike.

## 2. Stack

### 2.1 Ambiente de Desenvolvimento

Para o ambiente de desenvolvimento, irei utilizar DevContainers com VSCode. Esta escolha adiciona a dependência do Docker ou Podman, além do VSCode e da extensão [DevContainers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

É possível também desenvolver fora do DevContainer, sendo necessária a instalação do node.js e npm.

### 2.2 Stack utilizada na aplicação

Para o desenvolvimento da aplicação, escolhi TypeScript com o framework NestJS, utilizando Express internamente. Utilizarei também o ORM Prisma com PostgreSQL para banco de dados.

Fiz essa escolha por ser a stack que mais domino em projetos com NodeJS. Utilizar o Prisma ORM também permite uma maior facilidade ao gerenciar migrations e alterações no banco de dados.

### 2.3 Stack do projeto

Para o armazenamento de imagens decidi utilizar o MinIO, com o objetivo de simular um ambiente de produção onde as imagens são salvas como objetos no S3. É possível também utilizar outros servidores tal como AWS S3, porém, considere, que, por simplicidade, implementei a criação automática do bucket especificado ao inicializar a aplicação. Você pode utilizar a interface de gerenciamento do MinIO em [http://localhost:9001](http://localhost:9001).

Para documentação adicional, utilizarei o Swagger para disponibilizar uma interface para visualizar a API. Você pode visualizar a documentação em [http://localhost:3000/api](http://localhost:3000/api) durante a execução da aplicação.

O swagger-ui permite o teste de rotas diretamente no navegador e todos os endpoints tem exemplos funcionais.

Para tratamento local de email utilizei o Mailhog, mas também é possível configurar outros servidores SMTP. Você pode visualizar os emails recebidos em [http://localhost:8025](http://localhost:8025).

### 2.4 Dependências

Você pode encontrar os pacotes utilizados no arquivo [package.json](package.json). Aqui estão as principais dependências:

- AWS SDK: Utilizado para comunicação com o MinIO/S3.
- NestJS: Framework para desenvolvimento back-end.
- Prisma: ORM.
- Bcrypt: Para criptografia de senhas.
- Password: Para autenticação com email e senha e JWT.
- Swagger: Para documentação da API.
- Class-Validator/Transformer: Para validação de DTOs.
- Joi: Para validação de configurações.
- Multer: Para upload de arquivos.
- nest-access-control: Para controle de acesso em rotas.
- Sharp: Para redimensionamento de imagens.
- EsLint/Prettier: Para padronização de código.

Adicionalmente, utilizei o script `wait-for-it.sh` para aguardar a inicialização do banco de dados. Disponível no repositório: [https://github.com/vishnubob/wait-for-it](https://github.com/vishnubob/wait-for-it).

## 3. A Aplicação

Este projeto utiliza as portas 3000, 5432, 9000, 9001, 1025 e 8025. Certifique-se de que essas portas estão disponíveis em seu ambiente.

- 3000: A aplicação
- 5432: PostgreSQL
- 9000: MinIO S3
- 9001: MinIO web ui
- 1025: Mailhog SMTP
- 8025: Mailhog web ui

Por ser uma aplicação back-end, interaja através da interface do swagger-ui, disponível em [http://localhost:3000/api](http://localhost:3000/api) ou uma alternativa como Insomnia ou Postman.

A aplicação contém rotas de exemplo, autenticação, CRUD de usuário com perfil e avatar, CRUD de postagens com imagem, envio de comentários e envio de reações como curtidas e não-curtidas.

Você pode encontrar um passo-a-passo da aplicação aqui: [Walkthrough.md](./docs/Walkthrough.md)

## 4. Iniciando a aplicação

```
docker compose up
```

## 5. Licença

MIT License

Copyright (c) 2024 [Rafael Coelho (rfsc-mori)](https://github.com/rfsc-mori)
