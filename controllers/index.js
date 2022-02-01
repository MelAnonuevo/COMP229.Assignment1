exports.home = function(req, res, next) {
    res.render('index', { title: 'My Portfolio' });
}

exports.projects = function(req, res, next) {
    res.render('index', { title: 'Projects' });
  }