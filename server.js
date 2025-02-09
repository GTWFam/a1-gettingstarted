const http = require('http'),
  fs = require('fs'),
  port = 3000

fs.readFile('./index.html', function (err, html) {

  if (err) throw err;

  http.createServer(function (request, response) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  }).listen(process.env.PORT || port);
});