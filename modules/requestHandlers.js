
function start(res) {
    console.log('request handler "start" was called');

    const body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(body);
    res.end();

}

function upload(res) {
    console.log('request handler "upload" was called');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hi upload');
    res.end();
}

exports.start = start;
exports.upload = upload;