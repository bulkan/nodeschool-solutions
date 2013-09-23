fs = require('fs');

fs.readFile(process.argv[2], function(err, buf){
  console.log(buf.toString().split('\n').length - 1);
});
