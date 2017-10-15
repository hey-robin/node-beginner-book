const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        const pathName = url.parse(req.url).pathname;
        console.log('request received for', pathName, 'from', req.url);

        route(handle, pathName, res);
    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}

exports.start = start;