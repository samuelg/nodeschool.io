var http = require('http');
var urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4]
];
var results = [];
var processed = 0;

urls.forEach(function(url, index) {
  var servResp = '';
  http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      servResp += data;
    });
    response.on('error', console.error);
    response.on('end', function() {
      results[index] = servResp;
      processed++;

      if (processed === 3) {
        results.forEach(function(result) {
          console.log(result);
        });
      }
    });
  });
});
