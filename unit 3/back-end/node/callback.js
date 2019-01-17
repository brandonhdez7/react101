// a callback is a function for some other function to run .
// a function to be called after by another function 

// in js function are first-class objects 
// that means.. you can almost do anything with 
// a function that you can do with any object 
// - pass them around 
// - assign it to a variable 
// - overwrite it
function x(){}
console.log(typeof(x))

const myFunction = function(n){
    console.log(n);
}
// console.log(myFunction)

function myOtherFunction(callback){
    callback(5)
}
myOtherFunction(myFunction)

$.getJSON(url,(data)=>{

})

window = {};
$.getJSON = function(url,callback){
    callback(myData)
}  