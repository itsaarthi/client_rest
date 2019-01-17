var MongoClient = require('mongodb').MongoClient;
var new_db = "mongodb://<dbuser>:<dbpassword>@ds133041.mlab.com:33041/secure_auth";

MongoClient.connect(new_db ,function (error , db) {
	if (error){
		throw error;
	}
		
	//CREATING A COLLECTION IN MONGODB USING NODE.JS
	db.createCollection("users" ,function (err , collection) {
		if(err) throw err;
		
		console.log("Details collection created successfully");
		
	});
});
