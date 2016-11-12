/* GET 'home info' page */


var Review = require('../models/review');

module.exports.home = function(req, res){
    
    
    function successCB(messages){
         res.render('index', { 
            title: 'home',
            message : messages
        });        
    }
    if (req.method === 'POST') {
        console.log(req.body);
        
        Review.create({
          author: req.body.name,
          rating: req.body.rating,
          reviewText: req.body.review
        },function (err) {           
           // saved!
           successCB('Review Saved');
        });
              
    } else {
         successCB('');
    }   
    
 
};

module.exports.view = function(req, res){
    
     var id = req.params.id,
         removed = '';
 
    function finish() {     
       Review
       .find()
       .exec(function(err, results){

               res.render('view', { 
                   title: 'View Results',
                   results : results,
                   removed : removed
               });
       });
    }
    
     if ( id ) {
         
         var removePromise = new Promise(
            function (resolve, reject) { 
                
                Review.remove({ _id: id }, function (err) {
                   if (!err) {
                        resolve(' has been removed'); // success
                    } else {
                        reject(' has not been removed'); // failure
                    }
               });                
                
            });
         
         
             removePromise.then(result, result);
           
                function result(result) {
                 removed = id + result;
                 finish();  
             }
     } else {
      finish();
    }
     
     
    
};



module.exports.update = function(req, res){
    
    var id = req.params.id;
    var msg = '';
    if (req.method === 'POST') {
         
         id = req.body._id;
         var query = { '_id': req.body._id };
         var update = {
          author: req.body.name,
          rating: req.body.rating,
          reviewText: req.body.review
        };
        var options = {};
        var callback = function(){};
        Review.update(query, update, options, callback);
        msg = 'data has been updated';
     }
    
    
    Review
    .findOne({ '_id': id })
    .exec(function(err, results){
    
         if ( results ) {
            res.render('update', { 
                title: 'Update Results',
                message: msg,
                results : results
            });
        } else {
             res.render('notfound', { 
                message: 'Sorry ID not found'
            });
        }
           
    });
};


