var db = require('../db').db;
const Sequelize = require('sequelize');


var Place = db.define('place', {
    address: {
        type: Sequelize.STRING, allowNull: false,
    },
    city: {
        type: Sequelize.STRING, allowNull: false
    },
    state: {
        type: Sequelize.TEXT, allowNull: false
    },
    phone: {
        type: Sequelize.STRING, allowNull: false
    },
    location: {
        type: Sequelize.FLOAT, allowNull: false
        
    }
});

module.exports = Place;