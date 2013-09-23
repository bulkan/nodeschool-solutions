var crypto  = require('crypto')
  , zlib    = require('zlib')
  , through = require('through')
  , tar     = require('tar');


var parser = tar.Parse();

parser.on('entry', function(e){
  if (e.type !== 'File') return;

  var h = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(h).pipe(through(null, function() {
    this.queue(' ' + e.path + '\n');
  })).pipe(process.stdout);

});


var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var gunzip = zlib.createGunzip();

process.stdin.pipe(decipher).pipe(gunzip).pipe(parser);
