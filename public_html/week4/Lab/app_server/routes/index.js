var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/index');
var ctrlabout = require('../controllers/about');
var ctrlform = require('../controllers/form');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/index', ctrlMain.index);

/* GET about page. */
router.get('/about', ctrlabout.about);

/*Get Form page */
router.get('/form', ctrlform.formView);
router.post('/form', ctrlform.formPost);

module.exports = router;