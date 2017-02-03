var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var vehicles = [ 
  { 
    "combustivel" : "Flex",
    "imagem" : null,
    "marca" : "Volkswagem",
    "modelo" : "Gol",
    "placa" : "FFF-5498",
    "valor": "20000"
  },
  { 
    "combustivel" : "Gasolina",
    "imagem" : null,
    "marca" : "Volkswagem",
    "modelo" : "Fox",
    "placa" : "FOX-4125",
    "valor" : "20000"
  },
  { 
    "combustivel" : "Alcool",
    "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    "marca" : "Volkswagen",
    "modelo" : "Fusca",
    "placa" : "PAI-4121",
    "valor" : "20000"
  }
];

app.listen(process.env.PORT || 3000);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/vehicles', function(req, res) {
  res.json(vehicles);
});

app.post('/vehicles', function(req, res) {
  vehicles.push(req.body.params);
  res.json(true);
});

app.delete('/vehicles/:id', function(req, res) {

  console.log(req.params.id);
  if(vehicles.length <= req.params) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  

  vehicles.splice(req.params.id, 1);
  res.json(true);
});
