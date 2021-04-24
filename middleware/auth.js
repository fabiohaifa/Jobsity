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
      passwordField: 'password'
    },
    async(username, password, done) => {
      try {
        const user = await getUser(username);
        if (!user) {
          return done(null, false)
        }
        const isValid = bcrypt.compareSync(password, user.password);
        if (!isValid)
          return done(null, false)
        return done(null, user)
      } catch (err) {
        done(err, false);
      }
    }
  ));
}