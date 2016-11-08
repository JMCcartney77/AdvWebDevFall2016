var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/index');
var ctrlAbout = require('../controllers/about')

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET about page. */
router.get('/', ctrlAbout.index);

module.exports = router;