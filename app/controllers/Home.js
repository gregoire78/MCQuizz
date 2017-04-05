var request = require('request');

var Home = {
    /**
     * @param req La requête entrante
     * @param res Ce qui est renvoyé au navigateur
     */
    index: function(req, res){
		request('http://api.gregoirejoncour.xyz/restaurant', function (error, response, body) {
			console.log('error:', error); // Print the error if one occurred 
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
			console.log('body:', body); // Print the HTML for the Google homepage. 
		})
		res.render('index', { title: 'Express' });
    }
};

module.exports = Home;