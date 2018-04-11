
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

/* setar as variáveis view engine e views do express */
app.set('view engine','ejs');
app.set('views', './app/view');

/* configurar o middleware */
app.use(express.static('.app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app*/
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);

/* exportar o objeto app */
module.exports = app;

