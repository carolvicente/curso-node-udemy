module.exports = function(app){
    app.get('/forms', function(req, res){
        app.app.controllers.admin.forms(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res){
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
}
