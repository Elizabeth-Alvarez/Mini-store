// We want to create a file that has the schema for our friends and 
//creates a model that we can then call upon in our controller
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  quantity: String
});

mongoose.model('Product', ProductSchema);
