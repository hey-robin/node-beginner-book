function route(handle, pathName, response, postData) {
    console.log('routing a request for', pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName](response, postData);
    } else {
        console.log('No request handler found for', pathName);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 Not Found');
        response.end();
    }
}

exports.route = route;