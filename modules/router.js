function route(handle, pathName, response, request) {
    console.log('routing a request for', pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName](response, request);
    } else {
        console.log('No request handler found for', pathName);
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('404 Not Found');
        response.end();
    }
}

exports.route = route;