var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World...HAPPY STAR WARS DAY\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://192.168.0.23:1337/');
