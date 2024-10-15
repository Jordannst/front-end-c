const calculateAge = ((birthYear) => 2019 - birthYear);

const yearUntilRetirement = (object) => {
	let age = calculateAge(object.year);
	let retirement = 60 - age;

	console.log( retirement > 0 ? `${object.firstName} retires in ${retirement} years` : `${object.firstName} is already retired.`);

}

const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
   //Change to map function
    numbers.map((i) => sum += i);
   
    return sum;
}

const phi = 3.14;
let power = 2;
let radius = 0;

let calculateArea = (({ radius, power = 2 }) => phi * Math.pow(radius, power));

 export let area21 = calculateArea({radius: 21});
export let area7 = calculateArea({radius: 7});

const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
}


export { 
    calculateAge,
    yearUntilRetirement,
    addNumber,
    phi,
    power,
    radius,
    calculateArea,
    makeAjaxRequest
}