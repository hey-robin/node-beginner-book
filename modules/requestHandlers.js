const exec = require('child_process').exec;

function start(res) {
    console.log('request handler "start" was called');
    var content = 'empty';

    exec('ls -lah', function(error, stdout, stderr) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(stdout);
        res.end();
    });
}

function upload(res) {
    console.log('request handler "upload" was called');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(stdout);
    res.end();
}

exports.start = start;
exports.upload = upload;