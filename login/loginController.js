var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var login={};

login.register=function(payload){
	console.log("payload",payload);
	var options = { 
	hostname: 'localhost', 
	port: 8002, 
	path: '/api/user', 
	method: 'POST'
	}; 
	var post = JSON.stringify({
		user_name : payload.user_name,
		first_name : payload.first_name,
		last_name : payload.last_name,
		mail_id : payload.mail_id,
		phonenumber : payload.phonenumber,
		password : payload.password
})
	var req1 = http.request(options, function(res1) {   //http client call syntax
	res1.on('data', function(data) { 
	process.stdout.write(data); 
	}); 
	}); 
	req1.write(post)
	req1.end();

}
module.export=login;


