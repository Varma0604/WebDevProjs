function bmicalc(){
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  

  let bmi = weight / (height * height);
  bmi = Math.ceil(bmi);
  result.textContent = `Your BMI is ${bmi}`;
}