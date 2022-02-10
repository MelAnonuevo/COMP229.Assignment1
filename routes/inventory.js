// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022

let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
// const { router } = require('../config/app');
// let inventory = require('../models/inventory');

let Inventory = require('../models/inventory');

router.get('/list', function(req, res, next){
    Inventory.find((err, inventoryList) => {
        // console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(inventoryList);
        }
    });
    res.render('index', {title: 'About'});
});

module.exports = router;