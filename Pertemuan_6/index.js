// Array & Object
// 1. Array
// Deklarasi variable array
// Cara 1. Array literal

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// Cara 2. Kata kunci New
// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2)




// Tipe Data Dalam Array
// let numbers = [1, 2, 3, 4, 5]; // numbers
// let students = ["Jordan", "Jane", "Michael"]; // string
// let jordan = ["Jordan", 20, true, [80, 90, 100]]; // campuran
// console.log(jordan)

// // Array Length
// // console.log(numbers.length)
// // console.log(students.length)
// // console.log(jordan.length)

// // Mengakses element dalam array
// // Melalui index (index selalu mulai dari 0)
// console.log(numbers[2]); // 3
// console.log(students[1]); // Jane
// console.log(jordan[3]); // [80, 90, 100]
// console.log(jordan[3][1]); // 90


// Mengakses element terakhir dalam array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers[numbers.length - 1]);


// Array Method
// let array = [1, 2, 3, "Hallo", false, true];
// console.log(array);

// // 1. toString()
// console.log(array.toString());

// // join()
// console.log(array.join("  ")); // pemisah/limiter
// console.log(array.join(" - "));

// // 3. pop() delete nilai paling belakang
// array.pop();
// console.log(array);

// // 4. push() tambah nilai paling belakang
// array.push("Selamat Pagi")
// console.log(array);

// // 5. shift() hapus nilai paling depan
// array.shift();
// console.log(array);

// // 6. unshift() tambah nilai paling depan
// array.unshift("Selamat Pagi")
// console.log(array);

// // 7. Splice()
// array.splice(3, 0, 4, 5)
// console.log(array);

// // 8. concat() menggabungkan array
let buah = ["Pisang", "Apel", "Jeruk"];
let sayur = ["tomat", "bayam", "wortel"]
let biji = ["kedelai", "kacang tanah", "kacang polong"]

let makanan = buah.concat(sayur, biji);
console.log(makanan);

// // 9. slice()
let sayuran = makanan.slice(3,6); // (start,stop) mengambil nilai di tengah atau lainnya
console.log(sayuran);


