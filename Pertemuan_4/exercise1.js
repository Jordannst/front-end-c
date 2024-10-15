function bmi (berat,tinggi){

    let tinggiMeter = tinggi / 100
    let bmi = berat / (tinggiMeter * tinggiMeter)

    console.log("Tinggi: " + tinggiMeter + "m");
    console.log("Berat: " + berat + "kg");
    return bmi
    
      
}

console.log("BMI: " + bmi(50,170));