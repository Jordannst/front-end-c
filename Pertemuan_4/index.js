// JavaScript Function
// Cara 1.
// Tanpa input/parameter dan output
// function greetings1(){
//     console.log("Hello Wolrd");
// }

// // Cara 2.
// let greetings2 = function(){
//     console.log("Hello World");
// }

// greetings1(); // Call function
// greetings2(); // Call function


// Parameter dan Argument
// Dengan (input/parameter) dan (output/return value)

// Cara 1
//                  Parameter
// function greetings1(fullName){
//     return "Hello" +" "+ fullName
// }
// //                      Argument
// let output = greetings1("Jordan");
// console.log(output)

// // Cara 2
// let greetings2 = function(fullName) {
//     return "Hello" +" "+ fullName
// }
// let output2 = greetings2("Jordannn");
// console.log(output2); 


// GLobal, Local & Block Scope

let x = 10; // Global
function foo(){
    let y = 20 // Lokal (Function)
    let z = 30;
    if (z > x){
        let a = 40 // Block (Function)
        console.log(a);
    }

    console.log(x);
    console.log(y);

    // console.log(a); // Error
}

// console.log(y); // > Error
foo();
