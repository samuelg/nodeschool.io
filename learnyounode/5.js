var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  list.filter(function(file) {
    return ~file.search(new RegExp('\.' + process.argv[3] + '$'));
  }).forEach(function(file) {
    console.log(file);
  });
});
