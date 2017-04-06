"use strict";

let Home = {
	/**
	 * @param req La requête entrante
	 * @param res Ce qui est renvoyé au navigateur
	 */
	index: (req, res) => {
		res.render('index', {title: 'Express'});
	}
};

module.exports = Home;