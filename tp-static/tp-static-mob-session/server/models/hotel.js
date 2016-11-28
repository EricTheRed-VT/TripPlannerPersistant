var db = require('../db').db;
var Place =  require('./place');

const Sequelize = require('sequelize');


var Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING, allowNull: false,
    },
    num_stars: {
        type: Sequelize.INTEGER, allowNull: false
    },
    amenities: {
        type: Sequelize.STRING, allowNull: false
    }
});

Hotel.belongsTo(Place);

module.exports = Hotel;