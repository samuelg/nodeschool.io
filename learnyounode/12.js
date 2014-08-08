var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405, {'content-type': 'text/plain', 'allow': 'POST'});
    res.write('Only POST is supported');
    res.end();
  } else {
    res.writeHead(200, {'content-type': 'text/plain'});
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
});
server.listen(port);
