const querystring = require('querystring'),
    fs = require('fs');

function start(res, postData) {
    console.log('request handler "start" was called');

    const body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function upload(res, postData) {
    console.log('request handler "upload" was called');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('you posted ' + querystring.parse(postData).text);
    res.end();
}

function show(res){
    console.log('request handler "show" was called');
    res.writeHead(200, {'Content-Type': 'image/png'});
    fs.createReadStream('tmp/test.png').pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;