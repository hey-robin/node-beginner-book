const http = require('http');

console.log('server module'); 

function start() {
    function onRequest(req, res) {
        console.log('request received from,', req.url);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('hi worlk');
    }


    http.createServer(onRequest).listen(8888);

    console.log('server has started');
}
exports.start = start;