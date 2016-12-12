var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    department: String,
    startDate: String,
    jobTitle: String,
    salary: String
    
});


var employeeSchema = mongoose.model('Employee', employeeSchema);

module.exports = employeeSchema;