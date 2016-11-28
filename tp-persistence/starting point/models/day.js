var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Hotel = require('./hotel');

var Day = db.define('day', {
  number: Sequelize.INTEGER
  
});


module.exports = Day;