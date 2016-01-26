var mongoose = require('mongoose');

var FoundSchema = new mongoose.Schema({
    animal_type: String,
    breed: String,
    name: String,
    color: String,
    age: Number,
    location_found: String,
    date_found: Date,
    contact_name: String,
    contact_email: String,
    contact_phone: Number
});

module.exports = mongoose.model('Found', FoundSchema);