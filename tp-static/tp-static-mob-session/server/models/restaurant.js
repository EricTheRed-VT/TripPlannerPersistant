var db = require('../db').db;
var Place =  require('./place');

const Sequelize = require('sequelize');

var Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING, allowNull: false,
    },
    cuisine: {
        type: Sequelize.STRING, allowNull: false
    },
    price: {
        type: Sequelize.STRING, allowNull: false
    }
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;