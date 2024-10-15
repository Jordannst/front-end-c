// let people = ["Greg", "Mary", "Devon", "James"];

// // 1. for loop
// // for (let i = 0; i < people.length; i++) {
// //     console.log(people[i])
// // }

// // // 2.forEach
// // people.forEach(function (person) {
// //     console.log(person)
// // })

// // No. 3 & 5
// people.splice(0,1,"Matt")
// console.log(people)

// // 4 & 6
// people.splice(3,1,"Jordan")
// console.log(people)

// // 7.
// for (let y = 0; y < people.length; y++) {
//     console.log(people[y])
//     if(people[y] === "Mary"){
//         break;
//     }
// }

// // 8.
// let newPeople = people.slice(1,4);
// console.log(newPeople)

// // 9.
// people.splice(2,1,"Elizabeth", "Artie");
// console.log(people)

// // 10.
// let withBob = people.concat("Bob");
// console.log(withBob)


// Object
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1.
programming.languages.push("Go")
console.log(programming.languages)

// 2.
programming["difficulty"] = 7
console.log(programming.difficulty)

// 3.
delete programming.jokes
console.log(programming)

// 4.
programming.isFun = true
console.log(programming)

// 5.
programming.languages.map(function(value,index){
    console.log(index + " - " + value)
})

console.log(programming)

