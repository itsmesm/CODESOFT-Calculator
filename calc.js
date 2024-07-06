
let screen = document.getElementById('screen');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    screen.value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    screen.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        screen.value = currentInput;
    } catch {
        screen.value = 'Error';
    }
}

function clearScreen() {
    currentInput = '';
    screen.value = '';
}

