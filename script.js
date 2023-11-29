let currentInput = "";

function appendToScreen(value) {
  currentInput += value;
  document.getElementById("screen").value = currentInput;
}

function clearScreen() {
  currentInput = "";
  document.getElementById("screen").value = "";
}

function calculate() {
  try {
    let result = eval(currentInput);
    document.getElementById("screen").value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("screen").value = "Error";
    currentInput = "";
  }
}
