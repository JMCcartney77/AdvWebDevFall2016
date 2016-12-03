
var request = require('request');



module.exports.homePage = function (req, res) {

    var requestOptions = {
        url: 'http://localhost:3001/api/v1/employees',
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
        url: 'http://localhost:3001/api/v1/employees',
        method: "Post",
        json: {
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'department': req.body.department,
            'startDate': req.body.startDate,
            'jobTitle': req.body.jobTitle,
            'salary': req.body.salary
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