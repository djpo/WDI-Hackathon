var mongoose = require('mongoose');

var LostSchema = new mongoose.Schema({
  animal_type: String,
  breed: String,
  name: String,
  color: String,
  age: Number,
  image: String,
  location_lost: String,
  date_lost: Date,
  contact_name: String,
  contact_email: String,
  contact_phone: Number
});

module.exports = mongoose.model('Lost', LostSchema);
