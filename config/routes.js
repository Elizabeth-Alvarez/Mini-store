var customers = require('./../server/controllers/customers.js')();
var orders = require('./../server/controllers/orders.js')();
var products = require('./../server/controllers/products.js')();



module.exports = function(app) {

	app.get('/customers', function(req, res) {
  		customers.show(req, res);
	})

	app.post('/addCustomers', function(req, res) {
		customers.insert(req, res);
	})

	app.post('/removeCustomers', function(req, res) {
		customers.remove(req, res);
	})

	app.get('/products', function(req, res) {
  		orders.show(req, res);
	})

	app.post('/addProducts', function(req, res) {
		orders.insert(req, res);
	})

	app.post('/removeOrders', function(req, res) {
		orders.remove(req, res);
	})

	app.get('/images', function(req, res) {
		products.show(req, res);
	})

	app.post('/addImages', function(req, res) {
		products.insert(req, res);
	})

	app.post('/removeProducts', function(req, res) {
		products.remove(req, res);
	})


}
