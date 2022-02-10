// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

exports.projects = function(req, res, next) {
    res.render('index', { title: 'Projects' });
  }

exports.services = function(req, res, next){
  res.render('index', {title: 'Services'});
}

exports.about = function(req, res, next) {
    res.render('index', { title: 'About' });
}

exports.contact = function(req, res, next) {
  res.render('index', { title: 'Contact' });
}