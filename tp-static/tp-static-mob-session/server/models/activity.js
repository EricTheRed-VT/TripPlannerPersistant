var db = require('../db').db;
var Place =  require('./place');
const Sequelize = require('sequelize');


var Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING, allowNull: false,
    },
    age_range: {
        type: Sequelize.STRING, allowNull: false
    }
});

Activity.belongsTo(Place);

module.exports = Activity;