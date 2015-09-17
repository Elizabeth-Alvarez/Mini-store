// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();

require('./config/mongoose.js');

var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));

var port = Number(process.env.PORT || 8000);

app.listen(port, function() {
  console.log('cool stuff on: 8000');
});
