const http = require('http');
// fs = file system
const fs = require('fs')


// req = what the broswer is asking for
// res= the thing we use to talk back to the browser
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        console.log("some requested the page", req.url)
        // res.end('<h1>sanity check</h1>');
        res.writeHead(200,{'content-type': 'text/html'})
        const homePageHtml = fs.readFileSync('app.html')
        res.end (homePageHtml);
    }else if(req.url === '/scripts.js'){
        res.writeHead(200,{'content-type': 'text/javascript'})
        const scriptFile = fs.readFileSync('scripts.js')
        res.end (scriptFile);
    }else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.end("sorry page not found")
    }
})

server.listen(30000)