var port = 8001;
var http = require('http');
var app = require('./apps');

http.createServer(app).listen(port,function(){
console.log('Express server listening on port_cert ' + port);
});

console.log("Establishing Connection");

var options = { 
	hostname: 'localhost', 
	port: 8002, 
	path: '/api', 
	method: 'GET'
	}; 

var req = http.request(options, function(res) {   //http client call syntax
	res.on('data', function(data) { 
	process.stdout.write(data); 
		}); 
	}); 

req.end();