fs = require('fs');

var ext = process.argv[3];

fs.readdir(process.argv[2], function(err, list){
  list.forEach(function(dirname){
    if (dirname.indexOf('.' + ext) > -1)
      console.log(dirname);
  });
});
