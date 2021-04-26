const bcrypt = require('bcryptjs')

async function initializeUsers() {
  /*initialize users for use chat if doesnt exists*/
  const result = await global.db.getAllUser();
  if (result.length == 0) {
    const saltRounds = 10;
    if (result.length === 0) {
      const pass1 = await bcrypt.hash('123', saltRounds);
      let user1 = await global.db.insertUser({
        username: "user1",
        password: pass1
      });
      console.log(user1);
      const pass2 = await bcrypt.hash('321', saltRounds);
      let user2 = await global.db.insertUser({
        username: "user2",
        password: pass2
      });
      console.log(user2);
    }
  }
}

module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    res.render('index.ejs', { title: "Jobsity Challenge" });
    initializeUsers();
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