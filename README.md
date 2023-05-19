# Projeto de API para Lista de Jogos com CRUD completo usando Node.js e MongoDB

Este é um projeto de API desenvolvido em Node.js que implementa um CRUD completo para uma lista de jogos, utilizando o MongoDB como banco de dados. Além disso, o projeto inclui um front-end que consome essa API.

## Funcionalidades

O objetivo deste projeto é fornecer uma estrutura completa para gerenciar uma lista de jogos, permitindo a criação, leitura, atualização e exclusão de jogos por meio de uma API RESTful. As principais funcionalidades incluídas são:

- **Criação (Create)**: permite adicionar novos jogos à lista.(Proxima atualização)
- **Leitura (Read)**: permite recuperar informações de jogos específicos ou de todos os jogos da lista.
- **Atualização (Update)**: permite modificar informações existentes dos jogos na lista.(Proxima atualização)
- **Exclusão (Delete)**: permite remover jogos da lista.(Proxima atualização)

O projeto também inclui um front-end que consome essa API, fornecendo uma interface intuitiva para interagir com a lista de jogos.

## Tecnologias utilizadas

O projeto utiliza as seguintes tecnologias:

- **Node.js**: plataforma de desenvolvimento JavaScript assíncrona para construir aplicações do lado do servidor.
- **MongoDB**: banco de dados NoSQL orientado a documentos.
- **Express.js**: framework web para Node.js que facilita a criação de APIs RESTful.
- **Mongoose**: uma biblioteca do Node.js que fornece uma camada de modelagem para interagir com o MongoDB.
- **HTML**: linguagem de marcação para estruturar a interface do front-end.
- **CSS**: linguagem de estilização para aprimorar a aparência do front-end.
- **JavaScript**: linguagem de programação utilizada tanto no lado do cliente quanto no lado do servidor.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 10 ou superior)
- MongoDB

## Instalação

1. Faça um clone deste repositório para o seu ambiente de desenvolvimento local.
2. Navegue até o diretório raiz do projeto.
3. Execute o comando `npm install` para instalar as dependências do projeto.
4. Configure as variáveis de ambiente necessárias, como informações de conexão do banco de dados.
5. Execute o comando `npm start` para iniciar o servidor.

Após a execução dessas etapas, a API estará disponível em `http://localhost:3000` e o front-end estará acessível em `http://localhost:3000`.

## Uso

Após a instalação e execução do projeto, você pode interagir com a API por meio de solicitações HTTP utilizando ferramentas como o cURL, Postman ou o seu próprio front-end personalizado.

Aqui estão alguns exemplos de rotas disponíveis:

- `GET /games`: retorna todos os jogos da lista.
- `GET /games/:id`: retorna informações de um jogo específico com base no ID fornecido.
- `POST /games/add`: cria um novo jogo na lista.
- `PUT /games/:id`: atualiza as informações de um jogo existente com base no ID fornecido.
- `DELETE /games/:id`: exclui um jogo específico com base no ID forn
