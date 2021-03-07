var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let pathName = q.pathname;
    switch (pathName) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('ĐÂY LÀ TRANG HOME');
            res.end();
            break;
        case '/contact':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('ĐÂY LÀ TRANG contact');
            res.end();
            break;
        case '/news':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('ĐÂY LÀ TRANG news');
            res.end();
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('404 NOT FOUND');
            res.end();
            break;
    }
}).listen(3000);
