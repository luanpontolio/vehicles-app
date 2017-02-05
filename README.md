### Vehicles App

Aplicação desenvolvida com

	* Angularjs 1.5
	* ES6
	* GULP
	* Node
	* Express

### Introdução

O projeto consiste em um CRUD de veículos e para tal foi desenvolvido uma Single Page Aplication(SPA) e também uma API para simular um ambiente completo. 

### Configurações

Este projeto esta utilizando a seguinte configurações:

 [Node 7.1.0](https://nodejs.org/en/download/current/) 
 [Npm 4.2.1](https://nodejs.org/en/download/current/) 
 [Gulp 3.9.0](http://gulpjs.com/) 
 [Express 4.14.1](http://expressjs.com/pt-br/)

### Rodando a aplicação

Para rodar a aplicação local, é necessario copia-la para sua maquina. Como o ambiente está divido em duas partes Front-end e Back-end, segue o seu passo a passo:

```sh
 
 $ git clone https://github.com/luanpontolio/vehicles-app.git
 $ cd /vehicles-app
 $ npm install

```

Rodando a Aplicação, acessar em: http://localhost:4567/#/ 

```sh
 
 $ gulp

```

Rodando a API, acessar em: http://localhost:1234/vehicles

```sh
 
 $ cd backend/
 $ node express.js

```