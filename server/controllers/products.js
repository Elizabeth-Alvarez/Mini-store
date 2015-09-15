// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Product = mongoose.model('Product');


//module.exports = {show(), insert()};

module.exports = function() {
 return {

 	show: function(req, res) {
    	Product.find({}, function(err, results) {
    		if(err) {
         		console.log(err);
       		} else {
            res.send(JSON.stringify(results));
       		}
   		})
  	},

	insert: function(req, res) {
    var product = new Product({name:req.body.name, img:req.body.image, description:req.body.description, quantity: req.body.quantity});
    // console.log(product);
     product.save(function(err, results) {
      if(err) {
        console.log('oops', err);
      }
      else {
        res.end();
        // res.send(JSON.stringify(results));
      }
    })
  },

  remove: function(req, res) {
    Product.remove({_id: req.body._id}, function(err, results) {
      if(err) {
        console.log(err);
      }
      else {
        res.end();
      }
    })
  }

 }//Closes return
}//ends exports
