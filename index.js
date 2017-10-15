const server = require('./modules/server');
const router = require('./modules/router');

server.start(router.route);