var http = require('http'); 

http.createServer(function(request, response){
    response.writeHead(200); 
    response.write("let's do this!"); 
    response.end(); 
}).listen(7000); 

