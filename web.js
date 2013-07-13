1;3201;0cvar express = require('express');

var app = express.createServer(express.logger());
var fs = require ('fs');

buf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  len=buf.length;
  string_h= buf.toString('utf-8');
  response.send("PRUEBA");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
