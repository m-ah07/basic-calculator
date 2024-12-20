let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch (error) {
        alert("Invalid Expression");
        display.value = "";
    }
}

function calculateScientific(operation) {
    let value = parseFloat(display.value);
    let result;
    if (operation === "sqrt") {
        result = Math.sqrt(value);
    } else if (operation === "pow") {
        result = Math.pow(value, 2);
    } else if (operation === "log") {
        result = Math.log10(value);
    }
    addToHistory(`${operation}(${value}) = ${result}`);
    display.value = result;
}

function addToHistory(entry) {
    let li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
}
