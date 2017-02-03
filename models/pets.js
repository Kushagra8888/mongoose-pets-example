var mongoose = require('mongoose');

var petSchema = mongoose.Schema({
    name: String,
    type: String,
    age: Number
});

var Pet = mongoose.model('pet', petSchema);

module.exports = Pet;