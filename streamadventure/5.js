var through = require('through');
var split = require('split');

var odd = true;
var lines = split();
var transform = through(function(line) {
  line = line.toString() + '\n';
  line = (odd) ? line.toLowerCase(): line.toUpperCase();
  odd = !odd;
  this.queue(line);
});

process.stdin.pipe(lines).pipe(transform).pipe(process.stdout);
