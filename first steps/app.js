var app = require('./config/server');

/* var rotaNoticias = require('./app/routes/noticias')(app);
var rotaFormNoticia = require('./app/routes/form_noticia')(app);
var rotaHome = require('./app/routes/home')(app);
*/

app.listen(3000, function(){
    console.log('Servidor ON');
});