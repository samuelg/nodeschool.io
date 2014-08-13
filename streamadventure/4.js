var through = require('through');

var transform = through(function(buf) {
  this.queue(buf.toString().toUpperCase());
});

process.stdin.pipe(transform).pipe(process.stdout);
