function appendNumber(number) {
    const resultField = document.getElementById('result');
    resultField.value += number;
}

function appendOperator(operator) {
    const resultField = document.getElementById('result');
    resultField.value += operator;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}
