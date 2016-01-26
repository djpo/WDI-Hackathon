var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Bear = require('./app/models/bear');
mongoose.connect('mongodb://localhost/bears');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./app/controllers/bear'));

app.get('/*', function (req, res){
	res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(3000);