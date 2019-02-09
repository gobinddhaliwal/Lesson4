let mongoose = require('mongoose');

// Create a model class
let contactSchema = mongoose.Schema({
    name: String,
    description: String
},
{
    collection: "favoritethings"
});

module.exports = mongoose.model('demo',contactSchema);