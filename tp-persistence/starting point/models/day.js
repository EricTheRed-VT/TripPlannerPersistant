var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Hotel = require('./hotel');

var Day = db.define('day', {
  number: {type: Sequelize.INTEGER, allowNull: false}
  
},
  { hooks:
  		{beforeValidate: function (row){
  			

  		return this.count().then(function(size){
  		
  		row.number = size + 1;
  	});

  }


  		
		}

	}
);


module.exports = Day;