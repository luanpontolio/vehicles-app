== Vehicles App

Aplicaçao desenvolvida utilizando Angularjs 1.5 com ES6.

== Introdução

O projeto consiste em um CRUD de veículos e para tal foi desenvolvido uma Single Page Aplication(SPA) e também uma API(que encontra-se na pasta *./backend*) em Node utilizando Expressjs para simular um ambiente completo. 

== Configurações

Este projeto esta utilizando a seguinte configurações:

 Node7.1.0[https://nodejs.org/en/download/current/] e npm 4.2.1
 Gulp3.9.0[http://gulpjs.com/]
 Express4.14.1[http://expressjs.com/pt-br/]

== Rodando a aplicação

Para rodar a aplicação local, é necessario copia-la para seu sistema. Como o ambiente está divido em duas partes Front-end e Back-end, segue o seu passo a passo:

 git clone https://github.com/luanpontolio/vehicles-app.git
 cd /vehicles-app
 npm install
 
 gulp
 Front-end acessar em http://localhost:4567/#/

 cd backend/
 $ node express.js
 Back-end acessar em http://localhost:1234/vehicles


