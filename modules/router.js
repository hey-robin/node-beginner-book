function route(handle, pathName, res) {
    console.log('routing a request for', pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName]();
    } else {
        console.log('No request handler found for', pathName);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        res.end();
    }
}

exports.route = route;