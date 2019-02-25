
var server = require('diet');
const path = require('path');
const fs = require('fs');

const map = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.tar.gz': 'application/tar+gzip'
  };

//Enact
var enact = server();
enact.listen('https://enact.infynect.com:8003', {
    key: fs.readFileSync('/root/kv/enact/server-key.pem'), 
    cert: fs.readFileSync('/root/kv/enact/server-crt.pem'), 
    ca: fs.readFileSync('/root/kv/enact/ca-crt.pem'), 
    requestCert: false, 
    rejectUnauthorized:false
});

//var static_enact = require('diet-static')({ path: enact.path+'/enact' })
//enact.footer(static_enact);
enact.get('/:file', function($){
  var pathname='enact/'+($.params.file || 'index.html');
console.log(pathname);
  const ext = path.parse(pathname).ext;
  $.setHeader('Content-type', map[ext] || 'text/plain' );
  $.sendFile(pathname);
});
