var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  // console.log(parsedUrl);
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");
  res.end("Hello World\n");
  console.log(trimmedPath);
});

server.listen(3000, function() {
  console.log("The server is listening on port 3000");
});
