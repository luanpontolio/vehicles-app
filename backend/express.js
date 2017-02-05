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

app.listen(process.env.PORT || 1234);

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

  var vehicle = {
        "combustivel" : req.body.params.combustivel,
        "imagem" :      req.body.params.imagem,
        "marca" :       req.body.params.marca,
        "modelo" :      req.body.params.modelo,
        "placa" :       req.body.params.placa,
        "valor" :       req.body.params.valor
  }
  vehicles.push(vehicle);
  res.json(true);
});

app.put('/vehicles/:id', function(req, res) {
  vehicles.forEach(function(vehicle, key) {
    if (vehicle.placa === req.body.params.placa){
     
      vehicles[key] = {
        "combustivel" : req.body.params.combustivel,
        "imagem" :      req.body.params.imagem,
        "marca" :       req.body.params.marca,
        "modelo" :      req.body.params.modelo,
        "placa" :       req.body.params.placa,
        "valor" :       req.body.params.valor
      };
    }
  });

  res.json(true);
});

app.delete('/vehicles/:id', function(req, res) {

  if(vehicles.length <= req.params) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  

  vehicles.splice(req.params.id, 1);
  res.json(true);
});
