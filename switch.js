var read = require("read");   //run npm install read
console.log("1.Register");
console.log("2.Login");
read({prompt : 'Enter your option',silent : false},function(err,choice){
	switch(choice){
		case '1':
			console.log("Register done");
			break;
		case '2':
			console.log("Login done");
			break;
	}

})
