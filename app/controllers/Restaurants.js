"use strict";
import request from 'request';
import fs from 'fs';

//import multer from 'multer';
//const storage = multer.diskStorage({
//	destination: function (req, file, cb) {
//		cb(null, 'upload/')
//	},
//	filename: function (req, file, cb) {
//		let ext;
//		if (file.mimetype == 'image/png') ext = '.png';
//		if (file.mimetype == 'image/jpeg') ext = '.jpg';
//		if (file.mimetype == 'image/gif') ext = '.gif';
//		cb(null, file.fieldname + '-' + Date.now() + ext)
//	}
//});
//const upload = multer({
//	storage: storage,
//	fileFilter: function (req, file, cb) {
//		const type = ['image/png', 'image/jpeg', 'image/gif'];
//		if (!type.includes(file.mimetype)) {
//			req.fileValidationError = 'goes wrong on the mimetype';
//			return cb(null, false, new Error('goes wrong on the mimetype'));
//		}
//		cb(null, true);
//	}
//}).any();

let Restaurants = {
	/**
	 * @param req La requête entrante
	 * @param res Ce qui est renvoyé au navigateur
	 */
	index: (req, res) => {
		request.get('http://api.gregoirejoncour.xyz/restaurant', function (error, response, body) {
			/*            console.log('error:', error); // Print the error if one occurred
			 console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			 console.log(JSON.parse(body).restaurants);*/
			if (!error && response.statusCode == 200) {
				res.render('restaurants/index', {title: 'O\'Resto', restaurants: JSON.parse(body).restaurants});
			} else res.end('error')
		});
	},

	insert: (req, res) => {
		res.render('restaurants/insert', {title: 'O\'Resto'});
	},

	//createy: (req, res) => {
	//	upload(req, res, (err) => {
	//			if (req.fileValidationError) {
	//				return res.end(req.fileValidationError);
	//			} else
	//				res.json({result: req.body.resto})
	//		}
	//	);
	//	//console.log(req.body.resto, req.files);
	//},

	create: (req, res) => {
		const resto = req.body.resto;
		let formData = {
			// Pass a simple key-value pair
			name: resto.name,
			address: resto.address,
			city: resto.city,
			postal_code: resto.postal_code,
			description: resto.description,
			file: fs.createReadStream(req.files.file.path),
			recfile: fs.createReadStream(req.files.recfile.path)
		};
		request.post({url:'http://oresto.dev/restaurant/insert/?key=da39a3ee5e6b4b0d3255bfef95601890afd80709', formData: formData}, function(err,httpResponse,body) {
			if (!err && httpResponse.statusCode == 200) {
				console.log(body);
				fs.unlink(req.files.recfile.path);
				fs.unlink(req.files.file.path);
				res.json({result: req.body.resto, http: httpResponse, body: JSON.parse(body), files: req.files})
			} else res.end('error')
		});
	}
};

module.exports = Restaurants;