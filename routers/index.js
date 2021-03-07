var url = require('url');

module.exports = (req, res) => {
    let q = url.parse(req.url, true);
    let pathName = q.pathname;
    switch (pathName) {
        case '/':
            res.end('ĐÂY LÀ TRANG HOME');
            break;
        case '/contact':
            res.end('ĐÂY LÀ TRANG contact');
            break;
        case '/news':
            res.end('ĐÂY LÀ TRANG news');
            break;
        default:
            res.end('404 NOT FOUND');
            break;
    }
}