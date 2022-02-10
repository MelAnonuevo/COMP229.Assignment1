// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022

exports.user = function(req, res, next) {
    res.render('user', {
         title: 'Users',
         name: 'Student'
         });
}

exports.mel = function(req, res, next) {
    res.render('user', {
         title: 'User',
         name: 'Mel'
         });
}