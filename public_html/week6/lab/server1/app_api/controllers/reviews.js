var mongoose = require('mongoose');
var Review = mongoose.model('Review');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.reviewsReadAll = function(req, res) {
        
    console.log('Getting all reviews');
    Review
     .find()
     .exec(function(err, results){
          if ( err ) {
              sendJSONresponse(res, 404, err);
          } else {
              sendJSONresponse(res, 200, results);
          }
     });

    
};



module.exports.reviewsReadOne = function(req, res) {
    
    if (req.params && req.params.reviewid) {
      console.log('Getting single review with id =', req.params.reviewid );
      Review
      .findById(req.params.reviewid)
      .exec(function(err, results){

          if ( results ) {
             sendJSONresponse(res, 200, results);
          } else {
              sendJSONresponse(res, 404, {
                "message": "reviewid not found"
              });
          }

      });

    } else {
        sendJSONresponse(res, 404, {
            "message": "reviewid not found"
        });
    }
};




/*   POST a new review
 *   /api/v1/reviews 
 */
module.exports.reviewsCreate = function(req, res) {
    
    console.log('Creating a review with data ', req.body);
    
    Review.create({
          author: req.body.author,
          rating: req.body.rating,
          reviewText: req.body.reviewText
    }, function(err, dataSaved) {
        if (err) {
          console.log(err);
          sendJSONresponse(res, 400, err);
        } else {
          sendJSONresponse(res, 201, dataSaved);
        }
    });
  
  
};



module.exports.reviewsUpdateOne = function(req, res) {
    
  if ( !req.params.reviewid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, reviewid is required"
    });
    return;
  }
  Review
    .findById(req.params.reviewid)
    .exec( function(err, reviewData) {
        if (!reviewData) {
          sendJSONresponse(res, 404, {
            "message": "reviewid not found"
          });
          return;
        } else if (err) {
            sendJSONresponse(res, 400, err);
            return;
        }
        reviewData.author = req.body.author;
        reviewData.rating = req.body.rating;
        reviewData.reviewText = req.body.reviewText;

        reviewData.save(function(err, data) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, data);
          }
        });
    });
    
};


module.exports.reviewsDeleteOne = function(req, res) {
  if ( !req.params.reviewid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, reviewid is required"
    });
    return;
  }
  Review
    .findByIdAndRemove(req.params.reviewid)
    .exec( function(err, reviewData) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
        }
          console.log("Review id " + req.params.reviewid + " deleted");
          sendJSONresponse(res, 204, null);
                
    });
};
