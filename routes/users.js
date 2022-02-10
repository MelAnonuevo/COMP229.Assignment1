// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);

/* GET users listing. */
router.get('/mel', userController.mel);

module.exports = router;
