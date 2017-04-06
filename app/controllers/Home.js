"use strict";
import request from 'request';

const Home = {
    /**
     * @param req La requête entrante
     * @param res Ce qui est renvoyé au navigateur
     */
    index: (req, res) => {
        let restaurants = {};
        request.get('http://api.gregoirejoncour.xyz/restaurant', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log(JSON.parse(body).restaurants);
            restaurants = JSON.parse(body).restaurants;
            res.render('index', {title: 'Express', restaurants: restaurants});
        });

    }
};

module.exports = Home;