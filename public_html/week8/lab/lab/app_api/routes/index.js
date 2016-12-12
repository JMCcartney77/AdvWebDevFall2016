var express = require('express');
var router = express.Router();
/* Make sure naming convention is same as the actual file name*/
var ctrlEmployees = require('../controllers/employee');

//Employees
router.get('/employees', ctrlEmployees.readAll);
router.get('/employees/:employeeid', ctrlEmployees.readOne);
router.post('/employees', ctrlEmployees.create);
router.put('/employees/:employeeid', ctrlEmployees.updateOne);
router.delete('/employees/:employeeid', ctrlEmployees.deleteOne);

module.exports = router;
