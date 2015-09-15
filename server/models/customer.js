// We want to create a file that has the schema for our friends and
//creates a model that we can then call upon in our controller
var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String,
  date: String,
  // user: String
});

mongoose.model('Customer', CustomerSchema);
