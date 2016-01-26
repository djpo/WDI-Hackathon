var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Lost = require('./app/models/lost');
var Found = require('./app/models/found');
mongoose.connect('mongodb://user1:password1@ds051645.mongolab.com:51645/lost_found');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/lost', require('./app/controllers/lost'));
app.use('/api/found', require('./app/controllers/found'));

app.get('/*', function (req, res){
	res.sendfile(path.join(__dirname, 'public/index.html'))
});

app.listen(process.env.PORT || 3000);