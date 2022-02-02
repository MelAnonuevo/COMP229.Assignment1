// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022


var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home );

/* GET home page. */
router.get('/home', indexController.home );

/* GET Project page. */
router.get('/projects', indexController.projects);

/* GET About page. */
router.get('/about', indexController.about);

module.exports = router;
