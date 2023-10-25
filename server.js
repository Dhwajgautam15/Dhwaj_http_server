const http = require("http");
const fs = require("fs");
const uuid = require("uuid"); // Import the uuid module

const server = http.createServer((req, res) => {
    if (req.url == "/html") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url == "/json") {
        fs.readFile("index.json", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(data);
            }
        });
    }
    else if (req.url == "/uuid") {
        // Generate a UUID4 and send it as a JSON response
        const generatedUUID = uuid.v4();
        const jsonResponse = JSON.stringify({ uuid: generatedUUID });
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonResponse);
    }
    else if (req.url.startsWith('/status/')) {
        const statusCode = parseInt(req.url.split('/').pop());
        res.statusCode = statusCode;
        res.end(`Response with status code ${statusCode}`);
      } 
      else if (req.url.startsWith('/delay/')) {
        const delaySeconds = parseInt(req.url.split('/').pop());
        setTimeout(() => {
          res.end('Response after delay');
        }, delaySeconds * 1000);
      } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 error :: Page not found</h1>");
    }
});

server.listen(8453, "127.0.0.1", () => {
    console.log("Listening to port 8453");
});
