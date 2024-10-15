import { yearUntilRetirement, calculateAge, addNumber,calculateArea, area21, area7, makeAjaxRequest } from "./utility";


console.log(calculateAge(2003));

yearUntilRetirement({year: 1987, firstName: 'John'});

console.log(addNumber(1,2,3,4,5,6,7));



area21 = calculateArea({ radius: 21 });
area7 = calculateArea({ radius: 7 });

console.log(`area dengan 21 radius: ${area21}, dan area dengan 7 radius: ${area7}`);

makeAjaxRequest("google.com");

