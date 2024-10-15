
// 1.
// Sebelum Destructuring
// const calculateAge = ((birthYear) => 2019 - birthYear);
// console.log(calculateAge(2003));

// const yearUntilRetirement = (object) => {
// 	let age = calculateAge(object.year);
// 	let retirement = 60 - age;

// 	console.log( retirement > 0 ? `${object.firstName} retires in ${retirement} years` : `${object.firstName} is already retired.`);

// }
// yearUntilRetirement({year: 1987, firstName: 'John'});



// Setelah Destructuring
const calculateAge = ((birthYear) => 2019 - birthYear);
console.log(calculateAge(2003));

const yearUntilRetirement = ({year, firstName}) => {
	let age = calculateAge(year);
	let retirement = 60 - age;

	console.log( retirement > 0 ? `${firstName} retires in ${retirement} years` : `${firstName} is already retired.`);

}
yearUntilRetirement({year: 1987, firstName: 'John'});



// 3.
const phi = 3.14;
let power = 2;
let radius = 0;

let calculateArea = (({ radius, power = 2 }) => phi * Math.pow(radius, power)); //  <-- Mengubah menjadi Destructuring

let area21 = calculateArea({radius: 21});
let area7 = calculateArea({radius: 7});

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);



// 4.
// Sebeulum Destructuring
// const makeAjaxRequest = (url, method = 'GET') => {
//     console.log(url, method);
// }
// makeAjaxRequest("google.com");


// setelah Destructuring
const makeAjaxRequest = ({url, method = 'GET'}) => {
    console.log(url, method);
}
makeAjaxRequest({url:"google.com"})
