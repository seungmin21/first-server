const http = require('http');

http.createServer(function(request, response) {
  let writeHeadObject = {
    'Content-Type': 'text/html'
  }
  
  response.writeHead(200, writeHeadObject);
  response.end("hello");


}).listen(8080);

// 터미널에 node app.js 입력
// 서버 가동중이기 때문에 밑에 실행줄이 안됨
// 서버 끄는 방법은 ctrl c 입력
  
