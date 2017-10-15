const http = require('http');

// http.createServer( (req, res) =>  {
//     res.writeHead(200 , {'Content-Type': 'text/plain'});
//     res.write('Halo World');
//     res.end();
// }).listen(6969);

//^^^^ is the same as vvvvv

function onRequest(req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hi worlk');
}


http.createServer(onRequest).listen(8888);

console.log('server has started');