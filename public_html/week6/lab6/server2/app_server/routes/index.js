var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/home');

/* Locations pages */
router.get('/', ctrlLocations.homePage);
router.get('/form', ctrlLocations.formPage);
router.post('/form', ctrlLocations.formPost);

module.exports = router;
