let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let calculatorValue = "";

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClicked);
});

function handleButtonClicked(event) {
  let buttonText = event.target.innerHTML;

  if (buttonText === "=") {
    try {
      calculatorValue = eval(calculatorValue);
      inputBox.value = calculatorValue;
    } catch (error) {
      inputBox.value = "Error";
    }
  } else if (buttonText === "AC") {
    calculatorValue = "";
    inputBox.value = calculatorValue;
  } else if (buttonText === "()") {
    if (calculatorValue.includes("(") &&!calculatorValue.includes(")")) {
      calculatorValue += ")";
    } else {
      calculatorValue += "(";
    }
    inputBox.value = calculatorValue;
  } else if (buttonText === "+/-") {
    if (calculatorValue.charAt(0) === "-") {
      calculatorValue = calculatorValue.substring(1);
    } else {
      calculatorValue = "-" + calculatorValue;
    }
    inputBox.value = calculatorValue;
  } else {
    calculatorValue += buttonText;
    inputBox.value = calculatorValue;
  }
}