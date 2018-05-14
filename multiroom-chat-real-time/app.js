/*importar as configurações do servidor*/
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(80, function(){
    console.log('Servidor online');
});

var io = require('socket.io').listen(server);

app.set('io', io);

/* criar a conexão por websocket */
io.on('connection', (socket) =>{
    console.log('Usuário conectou');

    socket.on('disconnect', () => {
        console.log('Usuário desconectou');
    });
});
