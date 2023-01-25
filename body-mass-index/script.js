function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var bmi = weight / (height/100 * height/100);
  document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
}
