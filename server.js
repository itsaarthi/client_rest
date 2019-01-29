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
				read({prompt : 'Enter your first_name',silent : false},function(err,first_name){
					read({prompt : 'Enter your last_name',silent : false},function(err,last_name){
						read({prompt : 'Enter your mail_id',silent : false},function(err,mail_id){
							read({prompt : 'Enter your phonenumber',silent : false},function(err,phonenumber){
								read({prompt : 'Enter your password',silent : true},function(err,password){
										var payload = {
											user_name : user_name,
											first_name : first_name,
											last_name : last_name,
											mail_id : mail_id,
											phonenumber : phonenumber,
											password : password
									}
									login.register(payload);						
								});
							});
						});
					});
				});
			});
			break;
		case '2':
			console.log("Login done");
			break;
}

})