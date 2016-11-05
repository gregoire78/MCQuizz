var Home = {
    /**
     * @param req La requête entrante
     * @param res Ce qui est renvoyé au navigateur
     */
    index: function(req, res){
        res.render('index', { title: 'Express' });
    }
};

module.exports = Home;