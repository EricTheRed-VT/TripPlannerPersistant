var Sequelize = require('sequelize');

var db = new Sequelize('postgres://eric:1234@localhost:5432/tripplannerstatic', {
  logging: false
});

module.exports = db;
