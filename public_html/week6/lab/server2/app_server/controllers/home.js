
var request = require('request');



module.exports.homePage = function (req, res) {

    var requestOptions = {
        url: 'http://localhost:3001/api/v1/reviews',
        method: "GET",
        json: {},
        qs: {}
    };

    request(requestOptions, function (err, response, body) {
        var results = [];
        if (response.statusCode === 200 && body.length) {
            results = (body instanceof Array) ? body : [];
        }

        res.render('index', {
            title: 'Home Page',
            results: results
        });

    }
    );


};

module.exports.formPage = function (req, res) {

    res.render('form', {
        title: 'Form Page',
        results: []
    }

    );
};

module.exports.formPost = function (req, res) {
//Add HTML attribute "Name" for forms
    var requestOptions = {
        url: 'http://localhost:3001/api/v1/reviews',
        method: "Post",
        json: {
            'author': req.body.name,
            'rating': req.body.rating,
            'reviewText': req.body.review,
        },
        qs: {}
    };

    request(requestOptions, function (err, response, body) {
        var msg = 'submit failed';
        if (response.statusCode === 201) {
            msg = 'submit worked';
        }
        res.render('form', {
            title: 'Form Page',
            message: msg
        });


    });
};