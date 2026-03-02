function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height === "" || weight === "") {
        document.getElementById("result").innerHTML = "Please enter valid values";
        return;
    }

    height = height / 100; // convert cm to meters
    let bmi = (weight / (height * height)).toFixed(2);

    let category = "";

    if (bmi < 18.5)
        category = "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9)
        category = "Normal weight";
    else if (bmi >= 25 && bmi < 29.9)
        category = "Overweight";
    else
        category = "Obese";

    document.getElementById("result").innerHTML = 
        `Your BMI is ${bmi} (${category})`;
}