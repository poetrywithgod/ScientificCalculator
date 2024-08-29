// script/scripts.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace potential x with * for multiplication
        const expression = display.innerText.replace(/x/g, '*');
        // Evaluate the expression
        const result = eval(expression);
        // Check for Infinity or NaN result
        display.innerText = (result === Infinity || isNaN(result)) ? 'Error' : result;
    } catch (e) {
        display.innerText = 'Error';
    }
}
