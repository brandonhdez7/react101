const fs = require('fs')

fs.readFile('package.json',(error,contents)=>{
    // by default, the return value of readfile is a buffer 
    console.log(contents.toString())
})

// fs.readFileSync('package.json',(error,contents)=>{
//     // by default, the return value of readfile is a buffer 
//     console.log(contents.toString())
// })

// const contents = fs.readFile('crop.js','utf-8');
// console.log(contents)
// const contents2 = fs.readFile('package.json','utf-8');
// console.log(contents2)


let fs = {}
fs.readFile('package.json',()=>{
    
})
fs.readFile = function(fileToOpen,callBackToRun)
