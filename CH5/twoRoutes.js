var http = require('http');

http.createServer(function (req, res) {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World...<strong>HAPPY STAR WARS DAY</strong>\n');
    } else if (req.url === '/account' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello <strong>account page</strong>\n');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Page <strong>Not Found</strong>\n');
    }
    
}).listen(1337);

