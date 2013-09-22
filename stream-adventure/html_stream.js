var trumpet = require('trumpet')
  , through = require('through');

var tr = trumpet();

process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream();

var t = through(
  function write(buf){
    this.queue(buf.toString().toUpperCase());
  }
);

stream.pipe(t).pipe(process.stdout);
