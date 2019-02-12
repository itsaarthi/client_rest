var port = 8001;
var http = require('http');
var app = require('./apps');
var login = require(__root+'login/loginController')
var read = require('read');

console.log("login",login);
http.createServer(app).listen(port,function(){
console.log('Express server listening on port_cert ' + port);
});

console.log("Establishing Connection");

console.log("1.R");
console.log("2.E");

    
	read({prompt : 'Enter your option',silent : false},function(err,choice){
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

})