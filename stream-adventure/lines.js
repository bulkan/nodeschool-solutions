var split   = require('split')
  , through = require('through');

var lines = 0;

tr = through(
  function(line) {
    var s = line.toString();
    this.queue(lines % 2 === 0
      ? s.toLowerCase() + '\n'
      : s.toUpperCase() + '\n'
    );
    lines++;
  }
)


process.stdin.pipe( split() ).pipe( tr ).pipe(process.stdout);
