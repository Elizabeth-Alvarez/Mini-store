// We want to create a file that has the schema for our friends and 
//creates a model that we can then call upon in our controller
var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  name: String,
  product: String,
  quantity: Number,
  date: String
});

mongoose.model('Order', OrderSchema);
