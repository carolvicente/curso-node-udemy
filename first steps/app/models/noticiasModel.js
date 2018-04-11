function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback)
{
    this._connection.query('select * from portal_noticias', callback); 
}

Noticias.prototype.getNoticia =  function(callback){
    this._connection.query('select * from portal_noticias where codigo = 1', callback);
}

Noticias.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into portal_noticias set ? ', noticia, callback);
}

Noticias.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
   
    return Noticias;    
}