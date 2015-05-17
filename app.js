var server = require("./server.js")

console.log(server.info.uri);

server.start(function(){
  console.log("Server running at port: ", + server.info.uri);
})
