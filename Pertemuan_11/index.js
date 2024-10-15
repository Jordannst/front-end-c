// String Literals, Default Parameter & Arrow Function

// 1. String Literals >> Let, Const
let fullName = "Jordan";
let age = 20;
let address = "Manado";

// let kalimat = "Halo nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address
// console.log(kalimat)

// let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal dimanado ${address}`

// 2. Arrow Function
// function sayGreetings(fullName){
//     return `Hello ${fullName}`
// }
// console.log(sayGreetings("John Doe"))

// const sayGreetings2 = (fullName) => { //  << Arrow Function
//     return `Hello ${fullName}`;
// }
// console.log(sayGreetings2("Jane Doe"))


// Implicit return value
// const sayGreetings2 = (fullName) => `Hello ${fullName}`
// console.log(sayGreetings2("Jane Doe"))

// //  Arrow Function Pada IIFE
// let output1 = (() => "Hello World")() //  << IIFE With Arrow Function
// console.log(output1)

// Arrow Function Pada Callback
let numbers = [1,2,3,4,5];
let output2 = numbers.map((item) => item ) 

// 3. Default Parameter
// const sayGreetings3 = (fullName,age) => {
//     if (fullName === undefined){
//         fullName = "John Doe"
//     }
//     if (age === undefined){
//         age = 20;
//     }
//     console.log(`Halo nama saya ${fullName} umur saya {age} tahun`)
// };
// sayGreetings3();

// const sayGreetings4 = (fullName = "John Doe",age = 20, address = "Manado") => { // << ES6 Default Parameter
    
//     console.log(`Halo nama saya ${fullName} umur saya ${age} tahun dan saya tinggal di ${address}`)
// };


