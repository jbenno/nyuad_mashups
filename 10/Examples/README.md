# MongoDB Examples

#### Create a new database
```JavaScript
const MongoClient = require('mongodb').MongoClient;
const dbName = "NewDB"
const url = "mongodb://localhost:27017/" + dbName;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log(`Database ${dbName} created`);
  db.close();
});
```

#### Add a new collection

```JavaScript
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "newDB";
const colName = "Cities"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db(dbName);

  dbo.createCollection(colName, function(err, res) {
    if (err) throw err;
    console.log(`Collection ${colName} created`);
    db.close();
  });
});
```

#### Insert new documents into a collection

```JavaScript
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "newDB";
const colName = "Cities"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db(dbName);
  const obj = { name: "Abu Dhabi", country: "U.A.E." };
  dbo.collection(colName).insertOne(obj, function(err, res) {
    if (err) throw err;
    console.log(`New document ${obj.name} inserted in ${colName}`);
    db.close();
  });
});
```

#### Query the database

`findOne()` returns the first document in the collection:
```JavaScript
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
```

`find({})` returns all documents of the collection:
```Javascript
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "newDB";
const colName = "Cities"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db(dbName);
  dbo.collection(colName).find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```

`find(query)` returns documents matching the query term

```Javascript
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "newDB";
const colName = "Cities"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db(dbName);
  const query = { country: "U.A.E." };
  dbo.collection(colName).find(query, { projection: { name: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```

- `query = { name: /^A/ } returns documents where `name` starts with an "A"
- with `const sortResults = { name: 1 };` and `.sort(sortResults)` added directly after the `find()` statement sorts results ascending with the name. Parameter -1 sorts descending 



