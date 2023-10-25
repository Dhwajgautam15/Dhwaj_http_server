const http = require("http");

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url == "/"){
        res.end("hello from the home sides");
    }
    else if(req.url == "/about"){
        res.end("hello from the about sides");
    }
    else if(req.url == "/contact"){
        res.end("hello from the contactUs sides");
    }
    else {
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("<h1>404 error :: page not found</h1>");
    }
    

});

server.listen(8151,"127.0.0.1",()=>{
    console.log("listening to the port no 8151");
    
});
