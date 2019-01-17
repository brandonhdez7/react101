// 1. Write a function that takes a callback (function) as a parameter. Run that function inside of your function.

// 2. Add an arguement "n" to your callback. Print off the value of n inside of the function.

// 3. Write a function that takes a parameter. Check to see what datatype the parameter is. 
// If it's a function, run it. If it's an object, print off it's properties. If it's an array, print off the [0] element. 
// If it's something else, just print it.

function functionOne(callback){
    let greeting = “hello”;
    // console.log(“Mr.Christopher”);
    return callback(greeting);
 }
 function functionTwo(n){
    console.log(n + “Jim”);
 }
 function functionThree(n){
    console.log(n + “Nancy”);
 }
 
 functionOne(functionTwo);
 functionOne(functionThree);