var mysql = require('mysql');

var connMySql = function(){
    console.log('Conexao com o bd foi reestabelecida');
    return mysql.createConnection({
        host : 'mysql.carolvicente.net',
        user : 'cvicente',
        password : 'MpBqRpgF',
        database : 'cvicente_principal'
    });
}

module.exports = function(){  
    return connMySql;
}
