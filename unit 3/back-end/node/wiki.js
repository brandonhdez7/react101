const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        console.log("some requested the page", req.url)
        res.writeHead(200,{'content-type': 'text/html'})
        const homePageHtml = fs.readFileSync('wiki.html')
        res.end (homePageHtml);
    }else if(req.url === '/'){
        const image = fs.readFileSync('/desktop/mockup5.jpg', function(err, image){
            res.writeHead(200,{'content-type': 'image/jpg'})
            res.end(image);
        })
    }else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.end("sorry page not found")
    }
})





server.listen(5000)