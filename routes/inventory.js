// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022

let express = require('express');
let router = express.Router();
let inventoryController = require('../controllers/inventory');

router.get('/list', inventoryController.list);

module.exports = mongoose.model('inventory', inventorymodel);