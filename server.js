var Hapi   = require("hapi");
var server = new Hapi.Server;
var Path   = require("path");
var index  = Path.resolve(__dirname + "/public/index.html");

server.connection({
  port: process.env.PORT || 4000
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
      directory : { path : Path.resolve(__dirname + "public")
      }
    }
  }

])


module.exports = server;
