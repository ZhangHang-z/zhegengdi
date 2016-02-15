var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/x_admin");


var adminModel = require('../models/admin_user_model.js');

var user001 = new adminModel({
	username: "test_user_name"
})

user001.save(function(err, doc) {
	if (err) console.log(err);
	else return "Insert OK!"
});
