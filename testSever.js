const http = require('http');

const server = http.createServer(function(request, response) {
  console.log(request.method);
  console.log(request.url);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("hello");
  response.end("end");

})