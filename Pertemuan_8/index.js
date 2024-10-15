// Javascript loop & Array build-in method

//  Javascript loop
// 1. For Loop
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// 2. While Loop
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// 3. Do While Loop
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i <= 20);

// Array built-in Method
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers)

// Menampilkan elemen Array satu per satu
// for (let i = 0 ; i < numbers.length; i++){
//     console.log(numbers[i]);

// }


// Array Object
let students = [
    {   
        id: 1,
        firstName : "Jordan",
        isActive: true,
        grade: 70

    },

    {
        id: 2,
        firstName : "Jane",
        isActive: false,
        grade: 88
    },

    {
        id: 3,
        firstName : "Michael",
        isActive: true,
        grade: 90
    }
]

// 1.forEach()
// students.forEach(function(item,index){
//     console.log(index)
//     console.log(item.firstName)
    
// })

// 2.map()
// let output = students.map(function (item) {
//     return item
// })
// console.log(output)

// 3.filter() 
// let filteredStudent = students.filter(function(item){
//     return item.grade > 80;
    
// })
// console.log(filteredStudent)


// 4.find()
let findStudent = students.find(function(item){
    return item.grade > 80;
    
})
console.log(findStudent)


// 5.findIndex()
let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// Cari index dari negeara "Togo"
let findIndex = countries.findIndex(function(item){
    return item === "Togo";
})
console.log(findIndex)

// Cari negara yang berakhiran "sia"
let find = countries.filter(function(item){
    return item.slice(-3) === "sia";
})  

console.log(find)

let find2 = countries.filter(function(item){
    return item.slice(-4) === "land";
})

console.log(find2)