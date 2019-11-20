const MongoClient = require('mongodb').MongoClient;
const dbName = "NewDB"
const url = "mongodb://localhost:27017/" + dbName;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log(`Database ${dbName} created`);
  db.close();
});