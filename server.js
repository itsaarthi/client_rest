var port = 8001;
var http = require('http');
var app = require('./apps');
var exec = require('child_process').exec;
var login = require(__root+'login/loginController')
var read = require('read');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("login",login);
http.createServer(app).listen(port,function(){
console.log('Express server listening on port_cert ' + port);
});

console.log("Establishing Connection");

console.log("1.Register");
console.log("2.Login");


app.post('/register', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      user_name:req.body.Username,
      password:req.body.password,
      mail_id:req.body.email
   };
	var payload = {
		user_name : response.user_name,
		mail_id : response.mail_id,
		password : response.password
	}

	function ecb(data){
	res.redirect('http://m2mcloud.com/error.html');	
	}

	function scb(Data){
	res.redirect('http://m2mcloud.com/login.html');
	}


	login.register(payload,scb,ecb);

   console.log(response);
   
   // res.end(JSON.stringify(response));
})


app.post('/login', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   console.log("test",req.body)
   response = {
      user_name:req.body.Username,
      password:req.body.password,
      key:req.body.key
   };
	var postData = {
		user_name : response.user_name,
		password : response.password,
		key	: response.key
	}
	
	
	function ecb(data){
	res.redirect('http://m2mcloud.com/error.html');	
	}

	function scb(Data){
	res.redirect('http://m2mcloud.com/download.html');
	}

	login.login(postData,scb,ecb);
})



app.post('/file', urlencodedParser, function (req, res) {
   
   var file=req.body.file;
   exec("./download.sh "+file+,function(err,stdout,stderr){
   		if(!err){
   			res.redirect('http://m2mcloud.com/download.html');		
   		}
   });
   
 
})    
