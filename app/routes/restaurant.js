var express = require('express');
var router = express.Router();
var restaurants = require('../controllers/Restaurants'); // Nous allons récuperer notre controlleur fait précédement

var multer  =   require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'upload/')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + '.png')
	}
});
var upload = multer({ storage : storage});

/* GET Récupère la liste des utilisateurs */
router.get('/', restaurants.index);
/* GET Récupère la liste des utilisateurs */
router.get('/insert', restaurants.insert);
router.post('/insert', upload.any(), restaurants.create);

module.exports = router;