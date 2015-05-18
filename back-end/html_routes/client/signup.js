(function() {
  'use strict';

  var router  = io.express.Router();

  router.get('/client/signup/farmer.html', function(req, res) {
    res.render('client/signup/farmer.html');
  });

  router.get('/client/signup/buyer.html', function(req, res) {
    res.render('client/signup/buyer.html');
  });

  module.exports = router;
}());