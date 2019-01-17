const http =require('http')
// console.log(http)

// createServer tskes 1 argument 
// a function to run when someone makes 
// an https connection to this program 
const server = http.createServer((req, res)=>{
    console.log('someone hit our http server')
    res.end(`<h1>1 went to monday night garage</h1>`)
});

server.listen(50000)

// // const http = {}
// http.createServer = function(callback){
//     // handle the http traffic 
//     // do a bunch of networking stuff
//     // now im done and i have a req object
//     // 

//     callback(req, res)
// }