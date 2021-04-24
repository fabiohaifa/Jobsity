const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  try {
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = function(passport) {

  function getUser(username, password) {
    return global.db.getUser(username, password);
  }

  passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    async(req, username, password, done) => {
      try {
        const user = await getUser(username);

        if (!user)
          return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

        const isValid = bcrypt.compareSync(password, user.password);
        if (!isValid)
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

        // req.session.user = user;
        return done(null, user);

      } catch (err) {
        done(err, false);
      }
    }));
}