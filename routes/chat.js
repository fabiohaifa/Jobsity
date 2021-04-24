var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  if (req.isAuthenticated())
    res.render('chat', {});
  res.redirect('/login?fail=true');
});

module.exports = router;