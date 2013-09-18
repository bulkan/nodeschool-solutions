var http    = require('http')
  , through = require('through');

var tr = through(
  function write(data){
    this.queue(data.toString().toUpperCase());
  }
)

var server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    req.pipe(tr).pipe(res);
  } else res.end('send me a POST\n');
});


server.listen(8000);
