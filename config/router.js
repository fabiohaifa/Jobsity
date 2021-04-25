module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    res.render('index.ejs', { title: "Jobsity Challenge" }); // load the index.ejs file
  });

  app.get('/login', function(req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.get('/chat', isLoggedIn, async function(req, res) {
    const messages = await global.db.getAllMessages();
    res.render('chat.ejs', { title: 'Chat', messages, username: req.user.username });
  });

  app.post('/login', passport.authenticate('local', {
    successRedirect: '/chat',
    failureRedirect: '/login',
    failureFlash: true
  }));

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}