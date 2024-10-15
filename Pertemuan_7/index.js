// Javascript Object

// Deklarasi Object
// 1. Object Literal

// let john = {
//     firstName : "John",
//     age : 30,
//     isMarried : true,
//     grade : [80,90,100],
//     sayGreetings : function(){
//         console.log("Hello my Name is " + this.firstName);
//     },
//     address : {
//         street : "Jl. Raya",
//         city : "Bandung",
//         province : "Jawa Barat",
//         postCode : 40123
//     }
// }

// // console.log(john);

// // 2. Kata kunci new

// // let jane = new Object();
// // jane.firstName = "Jane";
// // jane.age = 20;
// // jane.isMarried = false;
// // console.log(jane);


// // Cara mengakses property object
// // 1. Dot notation
// // console.log(john.firstName) // john
// // console.log(john.age) // 30
// // john.age = 31;
// // console.log(john.age) // 31

// john.job = "Teacher" // Tambah properti baru
// // console.log(john)

// // 2. Bracket Notation
// console.log(john["isMarried"])
// john["Nationality"] = "Indonesia";
// console.log(john)

// // Object Method
// console.log(john.sayGreetings())

// // Object inside Object
// console.log(john.address.city) // Bandung

// // Delete Property dalam object
// delete john.grade;
// console.log(john)

// Javascript Conditional
// If - else
let numbers = 5;
if (numbers %2 === 0){
    console.log(" Bilangan Genap")
}
else{
    console.log("Bilangan ganjil")
}

// if - else - if
// 100 - 80 Nilai A
// 60 - 80 Nilai B
// < 60 Nilai C

let nilai = 20;
if (nilai >= 80 && nilai <= 100){
    console.log("Nilai A");
}
else if (nilai >= 60 && nilai < 80){
    console.log("Nilai B");
}
else {
    console.log("Nilai C");
}

// Switch Case
let month = 2;
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Not Found");
}
