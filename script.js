// Get elements
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const calculateBtn = document.getElementById("calculate");
const decimalBtn = document.getElementById("decimal");

const numberButtons = document.querySelectorAll(
  ".btn:not(#clear):not(#backspace):not(#divide):not(#multiply):not(#subtract):not(#add):not(#calculate):not(#decimal)"
);

let currentInput = "0";
let previousInput = "";
let operator = "";

function updateDisplay() {
  display.textContent = currentInput;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput === "0" || currentInput === "Error") {
      currentInput = button.textContent;
    } else {
      currentInput += button.textContent;
    }
    updateDisplay();
  });
});

divideBtn.addEventListener("click", () => {
  operator = "/";
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
});

multiplyBtn.addEventListener("click", () => {
  operator = "*";
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
});

subtractBtn.addEventListener("click", () => {
  operator = "-";
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
});

addBtn.addEventListener("click", () => {
  operator = "+";
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
});

clearBtn.addEventListener("click", () => {
  currentInput = "0";
  previousInput = "";
  operator = "";
  updateDisplay();
});

backspaceBtn.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  updateDisplay();
});

decimalBtn.addEventListener("click", () => {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
});

calculateBtn.addEventListener("click", () => {
  if (operator && previousInput && currentInput) {
    const result = eval(previousInput + operator + currentInput);
    currentInput = result.toString();
    previousInput = "";
    operator = "";
    updateDisplay();
  } else {
    currentInput = "Error";
    updateDisplay();
  }
});
