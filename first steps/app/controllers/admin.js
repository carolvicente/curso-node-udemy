module.exports.forms = function(app, req, res){
    res.render('admin/form_add_noticia', {validacao :{}, noticia :{}});
}

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;

        req.assert('nome','Obrigatório').notEmpty();
        // req.assert('','').len(10,100) - limita caracteres
        // req.assert('','').notEmpty().isDate({format: 'YYYY-MM-DD'});
        var erros = req.validationErrors();
        
        if(erros){
            res.render('admin/form_add_noticia', {validacao : erros, noticia : noticia});
            return;
        }
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasModel(connection);
        
        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
}
