// Entry point
const Server = require('./app/server');
const port = require('./package.json').server_props.port;

Server.start(port);