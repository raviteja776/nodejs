const http = require("node:http");

const server = http.createServer(function(req,res){
    if(req.url === '/getData') {
        res.end("Get Info Data");    
    }
    res.end("Hello World with new server");
});

server.listen(7777);
