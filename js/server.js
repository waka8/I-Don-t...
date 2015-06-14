var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb://localhost/idont');

var personSchema = {
	name:String,
	age:String,
	actions:Array
};

var Person = mongoose.model('Person', personSchema, 'users');

var app = express();
app.use(cors());

app.get('/users', function (req, res) {
	Person.find(function(err, doc) {
		res.send(doc);
	});
});

app.listen(3000);