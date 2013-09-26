var net = require('net');


var d = new Date();

var server = net.createServer(function(socket){
  var year = d.getFullYear().toString();
  var month = (d.getMonth() + 1).toString();
  month = (month.length == 1) ? "0" + month : month;

  var day = (d.getDate()).toString();

  day = (day.length == 1) ? "0" + day : day;

  var hours = d.getHours();
  var mins = d.getMinutes();
  socket.end(year + '-' + month + '-' + day + ' ' + hours + ':' + mins + '\n');
});

server.listen(8000);
