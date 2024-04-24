let lastCharIsOperand = false;

function appendValue(value) {
    let display = document.getElementById('display');
    let currentValue = display.value;

    // If the current value is ".", check if there's already a "." in the expression
    if (value === "." && currentValue.includes(".")) {
        return;
    }

    // If the last character is a ".", prevent adding an operand
    if (currentValue.endsWith(".") && isOperand(value)) {
        return;
    }

    // If the current value is "-" and the previous one was "-", return
    if (value === "-" && currentValue.endsWith("-")) {
        return;
    }

    // If the current value is an operand and the previous one was an operand, return
    if (isOperand(value) && lastCharIsOperand && value !== '-') {
        return;
    }

    display.value += value;
    lastCharIsOperand = isOperand(value);
}


function isOperand(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function deleteLast() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
    lastCharIsOperand = isOperand(displayValue.slice(-1));
}

function reset() {
    document.getElementById('display').value = '';
    lastCharIsOperand = false;
}

function calculate() {
    let expression = document.getElementById('display').value;

    // If the expression is empty or only contains whitespace, do nothing
    if (!expression.trim()) {
        return;
    }

    // Check for division by zero
    if (expression.includes('/0')) {
        document.getElementById('display').value = 'ERROR';
        return;
    }

    // Perform calculation
    let result = eval(expression);
    document.getElementById('display').value = result;
    lastCharIsOperand = false;
}


// Check which theme button is selected and add specific theme styling for each choice

/* The classes that contain 'T2' and 'T3' are for changing the styling based on each theme 
The first theme is the basic/standard style which 
gets overwritten on radio button click then removed when changing to another theme */

const themeOneBtn = document.getElementById('themeOne');
const themeTwoBtn = document.getElementById('themeTwo');
const themeThreeBtn = document.getElementById('themeThree');
const container = document.querySelector('.container');
const headerTitle = document.querySelector('.headerTitle');
const text = document.querySelectorAll('.text');
const themesChoices = document.querySelector('.themesChoices');
const outputArea = document.querySelector('.outputArea');
const result = document.querySelector('.result');
const buttonsArea = document.querySelector('.buttonsArea');
const btn = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.resetBtn');
const equalBtn = document.querySelector('.equalBtn');
const deleteBtn = document.querySelector('.deleteBtn');

themeOneBtn.addEventListener('click', function () {
    themeOneBtn.classList.add('active-btn');
    themeTwoBtn.classList.remove('active-btnT2');
    themeThreeBtn.classList.remove('active-btnT3');

    container.classList.remove('containerT2', 'containerT3');
    headerTitle.classList.remove('headerTitleT2', 'headerTitleT3');
    text.forEach(txt => {
        txt.classList.remove('textT2', 'textT3');
    });
    themesChoices.classList.remove('themesChoicesT2', 'themesChoicesT3');
    outputArea.classList.remove('outputAreaT2', 'outputAreaT3');
    result.classList.remove('resultT2', 'resultT3');
    buttonsArea.classList.remove('buttonsAreaT2', 'buttonsAreaT3');
    btn.forEach(button => {
        button.classList.remove('btnT2', 'btnT3');
    });
    resetBtn.classList.remove('resetBtnT2', 'resetBtnT3');
    equalBtn.classList.remove('equalBtnT2', 'equalBtnT3');
    deleteBtn.classList.remove('deleteBtnT2', 'deleteBtnT3');
});

themeTwoBtn.addEventListener('click', function () {
    themeOneBtn.classList.remove('active-btn');
    themeTwoBtn.classList.add('active-btnT2');
    themeThreeBtn.classList.remove('active-btnT3');

    container.classList.remove('containerT3');
    container.classList.add('containerT2');

    headerTitle.classList.add('headerTitleT2');
    headerTitle.classList.remove('headerTitleT3');

    text.forEach(txt => {
        txt.classList.add('textT2');
    });
    text.forEach(txt => {
        txt.classList.remove('textT3');
    });

    themesChoices.classList.add('themesChoicesT2');
    themesChoices.classList.remove('themesChoicesT3');

    outputArea.classList.add('outputAreaT2');
    outputArea.classList.remove('outputAreaT3');

    result.classList.add('resultT2');
    result.classList.remove('resultT3');

    buttonsArea.classList.add('buttonsAreaT2');
    buttonsArea.classList.remove('buttonsAreaT3');

    btn.forEach(button => {
        button.classList.add('btnT2');
    });
    btn.forEach(button => {
        button.classList.remove('btnT3');
    });

    resetBtn.classList.add('resetBtnT2');
    resetBtn.classList.remove('resetBtnT3');

    equalBtn.classList.add('equalBtnT2');
    equalBtn.classList.remove('equalBtnT3');

    deleteBtn.classList.add('deleteBtnT2');
    deleteBtn.classList.remove('deleteBtnT3');
});

themeThreeBtn.addEventListener('click', function () {
    themeOneBtn.classList.remove('active-btn');
    themeTwoBtn.classList.remove('active-btnT2');
    themeThreeBtn.classList.add('active-btnT3');

    container.classList.remove('containerT2');
    container.classList.add('containerT3');

    headerTitle.classList.add('headerTitleT3');
    headerTitle.classList.remove('headerTitleT2');

    text.forEach(txt => {
        txt.classList.add('textT3');
    });
    text.forEach(txt => {
        txt.classList.remove('textT2');
    });

    themesChoices.classList.add('themesChoicesT3');
    themesChoices.classList.remove('themesChoicesT2');

    outputArea.classList.add('outputAreaT3');
    outputArea.classList.remove('outputAreaT2');

    result.classList.add('resultT3');
    result.classList.remove('resultT2');

    buttonsArea.classList.add('buttonsAreaT3');
    buttonsArea.classList.remove('buttonsAreaT2');

    btn.forEach(button => {
        button.classList.add('btnT3');
    });
    btn.forEach(button => {
        button.classList.remove('btnT2');
    });

    resetBtn.classList.add('resetBtnT3');
    resetBtn.classList.remove('resetBtnT2');

    equalBtn.classList.add('equalBtnT3');
    equalBtn.classList.remove('equalBtnT2');

    deleteBtn.classList.add('deleteBtnT3');
    deleteBtn.classList.remove('deleteBtnT2');
});