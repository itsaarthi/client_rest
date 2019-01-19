var MongoClient=require('mongodb').MongoClient;
var url="mongodb://<dbuser>:<dbpassword>@ds133041.mlab.com:33041/secure_auth";
MongoClient.connect(url,function(err,db){
if(!err) 
db.createCollection("user",function(err,res){
if(!err) 
console.log("collection ready");
db.close();
});
});
