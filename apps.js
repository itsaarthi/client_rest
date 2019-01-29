var express = require('express');
var cors = require('cors');
var app = express();
//var db = require('./db'); // Use this when your using DB
global.__root   = __dirname + '/';

console.log("root",__root);
app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

/*var Login = require(__root + 'login/loginController');
app.use('/api/login', Login);
*/

module.exports = app;
