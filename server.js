var port = 8001;
var http = require('http');
var app = require('./apps');
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

console.log("1.Regster");
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
	login.register(payload);

   console.log(response);
   res.redirect('http://m2mcloud.com/login.html');
   // res.end(JSON.stringify(response));
})


app.post('/login', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      user_name:req.body.Username,
      password:req.body.password,
      mail_id:req.body.email
   };
	var postData = {
		user_name : response.user_name,
		key : response.key,
		password : response.password
	}
	login.login(postData);


   console.log(response);
   res.redirect('http://m2mcloud.com/welcome.html');
   // res.end(JSON.stringify(response));
})
    
	/*read({prompt : 'Enter your option',silent : false},function(err,choice){
	switch(choice){
		case '1':
read({prompt : 'Enter your user_name',silent : false},function(err,user_name){
						read({prompt : 'Enter your mail_id',silent : false},function(err,mail_id){
								read({prompt : 'Enter your password',silent : true},function(err,password){
										var payload = {
											user_name : user_name,
											mail_id : mail_id,
											password : password
									}
									login.register(payload);						
								});
							});
						});

			break;
		case '2':
			read({prompt : 'Enter your user_name',silent : false},function(err,user_name){
				read({prompt : 'Enter your password',silent : true},function(err,password){	
					var postData = {
						user_name : user_name,
						password : password
					}
					login.login(postData);
				});
			});
			break;
}

})*/
