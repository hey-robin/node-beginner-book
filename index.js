const http = require('http');

http.createServer( (req, res) =>  {
    res.writeHead(200 , {'Content-Type': 'text/plain'});
    res.write('Halo World');
    res.end();
}).listen(6969);