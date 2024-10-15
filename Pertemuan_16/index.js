// Asynchronous JS

// Synchronous -> single thread -> blocking
// console.log("Proses 1")

// Asynchronous => multi thread
// 1. Parallel
// setTimeout(() => {
//     console.log("Proses 1")
// }, 5000)

// console.log("Proses 2")

// setTimeout(() => {
//     console.log("Proses 3")
// }, 3000)

// console.log("Proses 4")


// 2. Concurent
// setTimeout(() => {
//     console.log("Proses 1") // ES5

//     setTimeout(() => {
//         console.log("Proses 2")

//         setTimeout(() => {
//             console.log("Proses 3")

//             setTimeout(() => {
//                 console.log("Proses 4")

//             },3000)
//         }, 3000)
//     }, 3000)
// }, 3000)

// Promise
// let condition = false;
// let newPromise = new Promise((resolve, reject) => {
//     if (condition){
//         resolve("Berhasil")
//     }
//     else{
//         reject("Gagal")
//     }
// });

//  Pakai Promise
// 1. Then - Catch
// newPromise
// .then((result) => result)
// .then((result2) => console.log(result2))
// .catch((error) => console.log(error))

// 2. Async - await
// Harus dibuat didalam fungsi 

// const consumePromise = async() => {
//     try{
//         let result =  await newPromise
//          console.log(result);
//     }
//     catch (error){
//         console.log(error)
//     }
    
// }
// consumePromise()



// Pakai Promise yang sudah ada
// 1. Fetch

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((json) => console.log(json))

// (async () => {
//     let response =  await fetch("https://jsonplaceholder.typicode.com/users")
//     let json = await response.json()
//     console.log(json)
// })()


// 2. Axios
axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then ((result) => console.log(result));

(async () => {
    let result = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    result.data.forEach ((user) => console.log(user.username));
    
})()



