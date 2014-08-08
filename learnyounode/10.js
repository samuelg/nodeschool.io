var net = require('net');
var dateFormat = 'YYYY-MM-DD hh:mm';
var moment = require('moment');

var server = net.createServer(function(socket) {
  socket.end(moment().format(dateFormat) + '\n', 'utf8');
});
server.listen(process.argv[2]);
