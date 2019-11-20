const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "newDB";
const colName = "Cities"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db(dbName);
  const obj = { name: "Muscat", country: "U.A.E." };
  dbo.collection(colName).insertOne(obj, function(err, res) {
    if (err) throw err;
    console.log(`New document ${obj.name} inserted in ${colName}`);
    db.close();
  });


  const query = { name: 'Muscat' };
  const correction = { $set: {name: "Muscat", country: "Oman" } };
  dbo.collection(colName).updateOne(query, correction, function(err, res) {
    if (err) throw err;
    console.log(`Document ${query.name} updated`);
    db.close();
  });
});