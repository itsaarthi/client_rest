var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var http = require('http');
router.use(bodyParser.json());


var LoginCon={};

LoginCon.register = function(payload){
	var pay= payload;
	console.log("pay",pay.first_name);
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
	console.log("post",post);
	req1.write(post)
	req1.end();

}

module.exports=LoginCon;



