const router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

router.get('/', function(req, res, next) {
	Day.findAll()
		.then(function(days) {
			res.send(days);
		})
		.catch(next)

});

router.get('/:id', function(req, res, next) {
	Day.findById(req.params.id)
		.then(function(days) {
			res.send(days);
		})
		.catch(next)
});

router.post('/', function(req, res, next) {
	Day.create(req.body)
		.then(res.send)
		.catch(next)
});

router.put('/:id/:attraction', function(req, res, next) {

	Day.findById(req.params.id)
		.then(function(currentDay) {
			switch (req.params.attraction) {
				case 'Hotel':
					currentDay.update(req.body)
						.then(res.send)
						.catch(next);
					break;
				case 'Activity':
					currentDay.addActivity(req.body)
						.then(res.send)
						.catch(next);
					break;
				case 'Restaurant':
					currentDay.addRestaurant(req.body)
						.then(res.send)
						.catch(next);
					break;
				default:
					throw Error;
			}
		}).catch(next);


});

router.delete('/:id', function(req, res, next) {

});

router.delete('/:id/:attraction', function(req, res, next) {

});

module.exports = {
	router
};