
// IIFE
let bmi = (function(berat,tinggi){
    let tinggiMeter = tinggi / 100
    let bmi = berat / (tinggiMeter * tinggiMeter)
    console.log("Tinggi: " + tinggiMeter + "m");
    console.log("Berat: " + berat + "kg");
    return bmi
})(70,172)
console.log("bmi = "+ " " +bmi);

// Callback
// function bmi(berat,tinggi,callback){
    
//     let tinggiMeter = tinggi / 100
//     let bmi = berat / (tinggiMeter * tinggiMeter)
//     callback(tinggiMeter , berat)
//     return bmi

// }

//  let output = bmi(60,170,function(tinggiMeter,berat){
//     console.log("Tinggi: " + tinggiMeter + "m");
//     console.log("Berat: " + berat + "kg");
// })
// console.log("bmi: "+ " " +output);



