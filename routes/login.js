var passport = require('passport');
var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', (req, res, next) => {
  if (req.query.fail)
    res.render('login', { message: 'Invalid username or password.' });
  else
    res.render('login', { message: null });
});

/* POST login page */
router.post('/',
  passport.authenticate('local', {
    successRedirect: '/chat',
    failureRedirect: '/login?fail=true'
  })
);

module.exports = router;