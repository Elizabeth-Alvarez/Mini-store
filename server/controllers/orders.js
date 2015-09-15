// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = function() {
 return {

 	show: function(req, res) {
    	Order.find({}, function(err, results) {
    		if(err) {
         		console.log(err);
       		} else {
            // res.json(results);
            res.send(JSON.stringify(results));
       		}
   		})
  	},

  	insert: function(req, res) {
      var mydate = new Date();
      var month = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
      var date_str = month + ' ' + mydate.getDate()+ " "+ mydate.getFullYear();

      var order = new Order({name:req.body.name, product:req.body.product, quantity:req.body.quantity, date:date_str });
      // console.log(order);
       order.save(function(err, results) {
        if(err) {
          console.log('oops', err);
        }
        else {
          res.send(JSON.stringify(results));
        }
      })
    },

    remove: function(req, res) {
      Order.remove({_id: req.body._id }, function(err, results) {
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
