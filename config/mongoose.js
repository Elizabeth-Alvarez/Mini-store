//mongoose = require('') becomes global so no need for var
var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs');

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://locahost/picnic_list';

mongoose.connect(uristring, function(err, res) {
  if(err) {
    console.log('ERROR connecting to: ' + uristring + '.' + err);
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});

// connect to the database
// mongoose.connect('mongodb://localhost/Orders_Customers');
// specify the path to all of the models
var models_path = __dirname + '/../server/models'
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})
