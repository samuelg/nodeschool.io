var fs = require('fs');

function filter(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      callback(err);
    } else {
      var filtered = list.filter(function(file) {
        return ~file.search(new RegExp('\.' + ext + '$'));
      });
      callback(null, filtered);
    }
  });
}

module.exports = filter;
