var http = require('http');


var results = {
 0: [], 
 1: [],
 2: []
};

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('data', function(buf){
    results[0].push(buf);
  }).on('end', function(err){

    http.get(process.argv[3], function(response){
      response.setEncoding('utf8');
      response.on('data', function(buf){
        results[1].push(buf);
      }).on('end', function(err){
        http.get(process.argv[4], function(response){
          response.setEncoding('utf8');
          response.on('data', function(buf){
            results[2].push(buf);
          }).on('end', function(e){
            console.log(results[0].join(''));
            console.log(results[1].join(''));
            console.log(results[2].join(''));
          });
        });
      });
    })
  });
});
