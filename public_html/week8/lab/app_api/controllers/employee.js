var employeeSchema = require('../models/employeeSchema');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
}
;

module.exports.readAll = function (req, res) {

    console.log('Getting all Employees');
    employeeSchema
            .find()
            .exec(function (err, results) {
                if (err) {
                    sendJSONresponse(res, 404, err);
                } else {
                    sendJSONresponse(res, 200, results);
                }
            });


};

module.exports.readOne = function (req, res) {

    if (req.params && req.params.employeeid) {
        console.log('Getting single employee with id =', req.params.employeeid);
        employeeSchema
                .findById(req.params.employeeid)
                .exec(function (err, results) {

                    if (results) {
                        sendJSONresponse(res, 200, results);
                    } else {
                        sendJSONresponse(res, 404, {
                            "message": "employee id not found"
                        });
                    }

                });

    } else {
        sendJSONresponse(res, 404, {
            "message": "employee id not found"
        });
    }
};

/*module.exports.employeeCreate = function (req, res) {

    console.log('Creating a employee with data ', req.body);

    employeeSchema.create({
        author: req.body.author,
        rating: req.body.rating,
        reviewText: req.body.reviewText
    }, function (err, dataSaved) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            sendJSONresponse(res, 201, dataSaved);
        }
    });


};*/



module.exports.updateOne = function (req, res) {

    if (!req.params.employeeid) {
        sendJSONresponse(res, 404, {
            "message": "Not found, reviewid is required"
        });
        return;
    }
    employeeSchema
            .findById(req.params.employeeid)
            .exec(function (err, data) {
                if (!data) {
                    sendJSONresponse(res, 404, {
                        "message": "employeeid not found"
                    });
                    return;
                } else if (err) {
                    sendJSONresponse(res, 400, err);
                    return;
                }
                
                data.firstName = req.body.firstName;
                data.lastName = req.body.lastName;
                data.department = req.body.department;
                data.startDate = req.body.startDate;
                data.jobTitle = req.body.jobTitle;
                data.salary = req.body.salary;

                data.save(function (err, data) {
                    if (err) {
                        sendJSONresponse(res, 404, err);
                    } else {
                        sendJSONresponse(res, 200, data);
                    }
                });
            });

};

module.exports.create = function (req, res) {

    console.log('Creating a employee with data ', req.body);

    employeeSchema.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department,
        startDate: req.body.startDate,
        jobTitle: req.body.jobTitle,
        salary: req.body.salary
    }, function (err, dataSaved) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            sendJSONresponse(res, 201, dataSaved);
        }
    });


};



module.exports.deleteOne = function (req, res) {
    if (!req.params.employeeid) {
        sendJSONresponse(res, 404, {
            "message": "Not found, reviewid is required"
        });
        return;
    }
    employeeSchema
            .findByIdAndRemove(req.params.employeeid)
            .exec(function (err, data) {
                if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log("Employee id " + req.params.employeeid + " deleted");
                sendJSONresponse(res, 204, null);

            });
};