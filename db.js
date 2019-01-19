
var MongoClient = require('mongodb').MongoClient;


MongoClient.connect("mongodb://<dbuser>:<dbpassword>@ds133041.mlab.com:33041/secure_auth",function(err, db) {
  if(!err) 
    console.log("Database created");
}
});
