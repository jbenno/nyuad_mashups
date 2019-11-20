const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "newDB";
const colName = "Cities"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db(dbName);
  dbo.collection(colName).findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});