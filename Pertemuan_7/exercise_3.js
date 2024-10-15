
// Exercise 3
let jordan = {
    firstName: "Jordan",
    age: 20,
    weight: 70,
    height: 172,
    calculateBMI: function() {
        let tinggiMeter = this.height / 100; 
        this.bmi = this.weight / (tinggiMeter * tinggiMeter);  // Gunakan tinggi dalam meter
        
        console.log(`BMI: ${this.bmi}`);

        if (this.bmi < 16.0) {
            console.log("Severely Underweight");
        } else if (this.bmi > 16.0 && this.bmi < 18.5) {
            console.log("Underweight");
        } else if (this.bmi >= 18.5 && this.bmi < 25.0) {
            console.log("Normal");
        } else if (this.bmi >= 25.0 && this.bmi < 30.0) {
            console.log("Overweight");
        } else if (this.bmi >= 30.0 && this.bmi < 35.0) {
            console.log("Moderately Obese");
        } else if (this.bmi >= 35.0 && this.bmi < 40.0) {
            console.log("Severely Obese");

        } else {
            console.log("Morbidly Obese");
        }
        return this.bmi;  
    }
};

console.log(`Name: ${jordan.firstName}`);
console.log(`Weight: ${jordan.weight}`);
console.log(`Height: ${jordan.height}`);
jordan.calculateBMI();

