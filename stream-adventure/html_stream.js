var trumpet = require('trumpet')
  , through = require('through');

var tr = trumpet();


var stream = tr.select('.loud').createWriteStream();
process.stdin.pipe(tr);

var t = through(
  function write(buf){
    this.queue(buf.toString().toUpperCase());
  }
);

stream.pipe(t);
