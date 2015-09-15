// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = function() {
 return {

 	show: function(req, res) {
    	Customer.find({}, function(err, results) {
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
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
    var date_str = month + ' ' + mydate.getDate()+ " "+ mydate.getFullYear();


    var customer = new Customer({name:req.body.name, date: date_str});
     customer.save(function(err, results) {
      if(err) {
        console.log('oops', err);
      }
      else {
        res.send(JSON.stringify(results)); //json used to bring back data from db user: req.body.user
      }
    })
  },

  // show_Customer: function(req, res) {
  //   console.log(req.params.id);
  //   Customer.find({_id: req.params.id}, function(err, results) {
  //     if(err) {
  //       console.log(err);
  //     } else {
  //       res.json(results);
  //     }
  //   })
  // },

  remove: function(req, res) {
    // console.log(req);
    Customer.remove({_id: req.body._id }, function(err,results) {
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
