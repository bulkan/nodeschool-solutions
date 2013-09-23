var trumpet = require('trumpet')
  , through = require('through');

var tr = trumpet();
var stream = tr.select('.loud').createStream();

var t = through(
  function write(buf){
    this.queue(buf.toString().toUpperCase());
  }
);

stream.pipe(t).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);
