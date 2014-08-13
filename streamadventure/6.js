var through = require('through');
var concat = require('concat-stream');

var transform = concat(function(data) {
  var reversed = data.toString().split('').reverse().join('');
  console.log(reversed);
});

process.stdin.pipe(transform);
