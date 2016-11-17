'use strict';

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/NodeTest');

var nodeTest = function(){
	var nodeSchema = mongoose.Schema({
		Firstname: String,
		Lastname: String,
		email: String,
		Designation: String,
		dob: Date
	});
	return mongoose.model('Node', nodeSchema);
};

module.exports = new nodeTest();	