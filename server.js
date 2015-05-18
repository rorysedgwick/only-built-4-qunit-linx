var Hapi   = require("hapi");
var server = new Hapi.Server();
var Path   = require("path");
var index  = Path.resolve(__dirname + "/index.html");

server.connection({
  port: Number(process.env.PORT) || 4000
});

server.route([
  {
    method  : "GET",
    path    : "/",
    handler : function(request, reply) {
      reply.file(index);
    }
  },

  {
    method  : "GET",
    path    : "/{param*}",
    handler : {
      directory : {
        path : Path.resolve(__dirname + "/public/")
      }
    }
  },

  {
    method  : "GET",
    path    : "/test/{param}",
    handler : {
      directory : {
        path : Path.resolve(__dirname + "/test/")
      }
    }
  }

])


module.exports = server;
