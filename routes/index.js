var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jobsity - Challenge' });
  initializeUsers();
});

async function initializeUsers() {
  /*initialize users for use chat if doesnt exists*/
  const result = await global.db.getAllUser();
  const saltRounds = 10;
  if (result.length === 0) {
    const pass1 = await bcrypt.hash('123', saltRounds);
    let user1 = await global.db.insertUser({
      username: 'user1',
      password: pass1
    });
    console.log(user1);
    const pass2 = await bcrypt.hash('321', saltRounds);
    let user2 = await global.db.insertUser({
      username: 'user2',
      password: pass2
    });
    console.log(user2);
  }
}

module.exports = router;