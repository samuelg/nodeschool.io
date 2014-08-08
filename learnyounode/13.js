var http = require('http');
var url = require('url');
var moment = require('moment');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var time = parsedUrl.query.iso;
  var parsedTime = moment(time);
  var path = parsedUrl.pathname;
  var output;
  
  if (path === '/api/parsetime') {
    output = {
      hour: parsedTime.hours(),
      minute: parsedTime.minutes(),
      second: parsedTime.seconds()
    };
  } else if (path === '/api/unixtime') {
    output = {unixtime: parsedTime.valueOf()};
  } else {
    res.writeHead(404, {'content-type': 'text/plain'});
    return res.end();
  }

  res.writeHead(200, {'content-type': 'text/plain'});
  res.end(JSON.stringify(output));
});
server.listen(port);

