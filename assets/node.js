var http = require('http');
    http.createServer(function (queryurl, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(queryurl.url);
    res.end();
    }).listen(8080);