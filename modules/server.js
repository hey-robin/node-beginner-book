const http = require('http');
const url = require('url');

console.log('server module'); 

function start(route) {
    function onRequest(req, res) {
        const pathName = url.parse(req.url).pathname;
        console.log('request received for', pathName, 'from', req.url);

        route(pathName);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('hi worlk');
    }

    http.createServer(onRequest).listen(8888);

    console.log('server has started');
}

exports.start = start;