// IIFE & Callback

//1. IIFE (Immediately Invoked Function Expression)

// No parameter & args
// (function (){
//     console.log("Hello Wolrd");
// })();

// // With parameter & args & return value
// let output = (function (nama){
//     return "Hello" + nama  
//     })("Jordan")
// console.log(output);


// Callback Function

// No params & args & return value
function sayHello(callback){
    callback()
}

function greetings(){
    console.log("Hello Callback function");
}

sayHello(greetings)

atau
function sayHello(callback){
    callback()
}


sayHello(function (){
    console.log("Hello Callback Function");
});


// With params & args & return value
function sayHello(callback){
    let output = callback("Jordan")
    return output
}


let output = sayHello(function (fullname){
    return "Hello" + " " + fullname;
});

console.log(output);