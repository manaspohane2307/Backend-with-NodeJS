const http  = require('http')

const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello I am Manas")
    }
    else if (req.url === "/page1") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello this is page1");
    }
    else{
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("404 Page not found");
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`)
})