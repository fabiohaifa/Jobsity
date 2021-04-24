var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jobsity - Challenge' });
  initializeUsers();
});

router.get('/chat', function(req, res) {
  res.render('chat', {});
});

async function initializeUsers() {
  /*initialize users for use chat if doesnt exists*/
  const result = await global.db.getAllUser();
  if (result.length == 0) {
    let user1 = await global.db.insertUser({
      username: "user1",
      password: "123"
    });
    console.log(user1);
    let user2 = await global.db.insertUser({
      username: "user2",
      password: "321"
    });
    console.log(user2);
  }
}

module.exports = router;