const router = require('express').Router();
const Hotel =  require('../models/hotel');
const Restaurant =  require('../models/Restaurant');
const Activity =  require('../models/Activity');



router.get('/', (req, res, next) => {

var outerScopeContainer = {};
Hotel.findAll()
.then(function (dbHotels) {
  outerScopeContainer.dbHotels = dbHotels;
  return Restaurant.findAll();
})
.then(function (dbRestaurants) {
  outerScopeContainer.dbRestaurants = dbRestaurants;
  return Activity.findAll();
})
.then(function (dbActivities) {
  res.render('index', {
    templateHotels: outerScopeContainer.dbHotels,
    templateRestaurants: outerScopeContainer.dbRestaurants,
    templateActivities: dbActivities
  });
})
.catch(next);

});


module.exports = router;



