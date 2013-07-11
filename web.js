var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  buf = new Buffer(data);
  buf.write("some string", 0, "ascii");
  response.send(data);
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
