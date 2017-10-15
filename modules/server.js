const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        let postData = '';
        const pathName = url.parse(req.url).pathname;
        console.log('request received for', pathName, 'from', req.url);

        req.setEncoding('utf8');

        req.addListener('data', function(postDataChunk){
            postData += postDataChunk;
            console.log('received POST data chunk "', postDataChunk, '".');
        });

        route(handle, pathName, res);
    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}

exports.start = start;