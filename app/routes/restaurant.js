var express = require('express');
var router = express.Router();

var restaurants = require('../controllers/Restaurants'); // Nous allons récuperer notre controlleur fait précédement

/* GET Récupère la liste des utilisateurs */
router.get('/', restaurants.index);

module.exports = router;