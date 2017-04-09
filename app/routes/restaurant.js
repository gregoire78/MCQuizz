var express = require('express');
var router = express.Router();
var restaurants = require('../controllers/Restaurants'); // Nous allons récuperer notre controlleur fait précédement
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

/* GET Récupère la liste des utilisateurs */
router.get('/', restaurants.index);
/* GET Récupère la liste des utilisateurs */
router.get('/insert', restaurants.insert);
router.post('/insert', multipartMiddleware, restaurants.create);

module.exports = router;