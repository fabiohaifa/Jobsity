const mongoClient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017';

mongoClient.connect(url, { useUnifiedTopology: true })
  .then(conn => global.conn = conn.db("jobsity-test"))
  .catch(err => console.log(err))

function getUser(username, password) {
  return global.conn.collection("users").find(x => x.username == username && x.password == paswword).toArray();
}

function getAllUser() {
  return global.conn.collection("users").find().toArray();
}

function insertUser(user) {
  return global.conn.collection("users").insertOne(user);
}

module.exports = {
  getAllUser,
  getUser,
  insertUser
}