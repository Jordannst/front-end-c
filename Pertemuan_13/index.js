// Rest Parameter & Spread Operator

// 1. Rest Parameter

//  Tanpa Rest Parameter
const func1 = (param1, param2, param3, param4, param5) => {
    console.log(param1,param2, param3, param4, param5)
}
func1("A", "B", "C", "D", "E");


// Dengan Rest Parameter
const func2 = (...params) => { // <-- Rest Parameter
    console.log(params)
}
func2("A", "B", "C", "D", "E")


// Rest Parameter harus berada di terakhir dalam paramteter list
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2, params)
}
func3("A", "B", "C", "D", "E")


// Mini Exercise
const func4 = (...number) => {
    let sum = 0
    number.forEach((i) => sum += i)
    return sum

}
console.log(func4(1, 2, 3, 4, 5, 6));



// 2. Spread Operator
let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers);

//  Fungsi Spread Operator
// Array
// 1. Duplikasi Array
let numbers2 = [...numbers]
numbers.push(6)
console.log(numbers2)

// 2. Menggabungkan Array
let arr1 = [1,2,3,]
let arr2 = [4,5,6]
let arr3 = [7,8,9,]

let numbers3 =arr1.concat(arr2,arr3) // ES5
let numbers4 = [...arr1, ...arr2, ...arr3] // ES6


// Object
// 1. Duplikasi Object
const john = {
    fullName: "John Doe",
    age: 30,
}
const john2 = {...john, address: "Manado"}

// 2. Menggabungkan Object
let obj1 = {a:1, b:2}
let obj2 = {c:3, d:4}
let obj3 = {e:5, f:6}

let combine = {...obj1, ...obj2, ...obj3}
console.log(combine)

let output = (() => "Hello WORl")();
console.log(output);

