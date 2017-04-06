"use strict";
import request from 'request';
//noinspection JSUnresolvedVariable
import Restaurants from '../models/Restaurant';

let Home = {
    /**
     * @param req La requête entrante
     * @param res Ce qui est renvoyé au navigateur
     */
    index: (req, res) => {
        request.get('http://api.gregoirejoncour.xyz/restaurant', function (error, response, body) {
            /*            console.log('error:', error); // Print the error if one occurred
             console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
             console.log(JSON.parse(body).restaurants);*/
            if(!error && response.statusCode == 200){
                res.render('index', {title: 'Express', restaurants: JSON.parse(body).restaurants});
            }
        });
    }
};

module.exports = Home;