var http = require("http");

//第一种写法
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello world");
    response.end();
}).listen(8888);


//第二种写法
function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}
http.createServer(onRequest).listen(8888);