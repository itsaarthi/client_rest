var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var http = require('http');
router.use(bodyParser.json());
var request = require('request');
const netIface = require('network-interfaces');
var exec = require('child_process').exec;
var fs=require("fs");

const options = {
  internal: false, // boolean: only acknowledge internal or external addresses (undefined: both)
  ipVersion: 4     // integer (4 or 6): only acknowledge addresses of this IP address family (undefined: both)
};


const netDev = netIface.getInterface(options);

console.log("netDev",netDev);

var LoginCon={};

LoginCon.register = function(payload,scb,ecb){
   require('getmac').getMac({iface: netDev},function(err, macAddress){
	var options = { 
	hostname: 'localhost', 
	port: 8002, 
	path: '/api/user/register', 
	method: 'POST'
	}; 

exec("./cert_gen.sh",function(err,stdout,stderr){


const postData = {
		user_name : payload.user_name,
		mail_id : payload.mail_id,
		password : payload.password,
		mac 	: 	macAddress
	    // csr: fs.readFileSync('/edgeserver-crt.pem').toString(), 
};

	request.post({url:'http://localhost:8002/user/register', formData: postData}, function optionalCallback(err, httpResponse, body) {
   if (err) {
    return console.error('upload failed:', err);
   }
    if(httpResponse.statusCode == 200){
   	scb(httpResponse.statusCode);
   }else{
   	ecb(httpResponse.statusCode);
   }


 });


})

	
	/*var req = http.request(options, function(res1) {   //http client call syntax
	res1.on('data', function(data) { 
	process.stdout.write(data); 
	}); 
	}); 
	req.write(post);
	console.log("post",post);
	req.end();*/

});
}

LoginCon.login = function(payload,scb,ecb){
 
   require('getmac').getMac({iface: netDev},function(err, macAddress){
	var options = { 
	hostname: 'localhost', 
	port: 8002, 
	path: '/api/user/login', 
	method: 'POST'
	}; 

	var post = {
		user_name : payload.user_name,
		password : payload.password,
		mac 	: macAddress
};

   request.post({url:'http://localhost:8002/user/login', formData: post }, function optionalCallback(err, httpResponse, body) {
   if (err) {
    return console.error('upload failed:', err);
   }
   if(httpResponse.statusCode == 200){
   	scb(httpResponse.statusCode);
   }else{
   	ecb(httpResponse.statusCode);
   }
   
 });


	});

}
module.exports=LoginCon;



