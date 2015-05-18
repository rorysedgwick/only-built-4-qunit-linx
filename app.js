var server = require('./server');

server.start(function(){
    console.log('Server running at port:', server.info.port);
});
