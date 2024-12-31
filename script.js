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

function addToHistory(entry) {
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// استعادة الوضع الداكن عند التحميل
window.onload = function () {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
};
