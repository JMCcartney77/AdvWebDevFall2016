/* 
 * These examples do not work as is, they are just code examples on how to do so.
 */

var Review = require('../models/review');


  Review.create({
    author: 'data1',
    rating: 'data2',
    reviewText: 'data3',
    createdOn: Date()
  },function (err) {           
     /* saved! Callbacks are optional */
     successCB();
  });