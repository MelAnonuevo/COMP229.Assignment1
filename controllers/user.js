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