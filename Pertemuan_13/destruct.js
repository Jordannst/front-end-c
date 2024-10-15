// // Destructuring Array
// let arr = [1,2,3,4,5]

// // Tanpa Destructuring
// // let a = arr[0]
// // let b = arr[1]
// // let c = arr[2]
// // let d = arr[3]
// // let e = arr[4]   

// // dengan Destructuring
// // let [a, b] = arr
// // console.log(a, b)

// // mengambil elemen tertentu dari array
// const myArr = [1,2,3,4,5]
// const [, , third, fourth] = myArr // <= mengambil elemen ketiga dan keempat dari array
// console.log(third, fourth)


// // Nested Destructuring
// const myArray = [1, [2, 3], 4];
// const [a, [b, C]] = myArray;
// console.log(b); // 2
// console.log(C); // 3




// // 2. Destructuring Object
// const myObj = {
//     name: "Jordan",
//     age: 20
// }

// // Tanpa Destructuring
// // let name = myObj.name
// // let age = myObj.age

// // dengan Destructuring
// const {name, age} = myObj
// console.log(name, age)

// const person = {
//      name: "adit",
//      age: 20,
// }
// const {name: myName, age: myAge, address = "Manado"} = person // < manado = default value
// console.log(myName, myAge, address)

// // Nested Destructuring pada Object
// const myPerson = {
//     nama: "Gren",
//     age: 19,
//     address: {
//         street: "Jl. Raya",
//         city: "Bandung",
//         province: "Jawa Barat",
//         postCode: 40123
//     }
// }

// const {nama, address: {city,street}} = myPerson
// console.log(nama, city, street)