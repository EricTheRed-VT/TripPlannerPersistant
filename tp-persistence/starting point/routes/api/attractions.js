const router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.use('/day', require('./days').router)

router.get('/hotels', function(req, res, next){
	Hotel.findAll()
	.then(function(hotels) {
		res.send(hotels);
	})
});

router.get('/restaurants', function(req, res, next){
	Restaurant.findAll()
	.then(function(restaurants) {
		res.send(restaurants);
	})
});

router.get('/activities', function(req, res, next){
	Activity.findAll()
	.then(function(activities) {
		res.send(activities);
	})
});

module.exports = {router};