var http = require('http');
var chars = 0;
var servResp = '';

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    chars += data.length;
    servResp += data;
  });
  response.on('error', console.error);
  response.on('end', function() {
    console.log(chars);
    console.log(servResp);
  });
});
