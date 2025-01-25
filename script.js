//BASIC MATH FUNCTIONS
function add(value1, value2) {
    return value1 + value2;
}

function substract(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

function divide(value1, value2) {
    return value1 / value2;
}

function operate(value1, value2, operator) {
    switch (operator) {
        case "+": 
            return add(value1, value2);
            break;
        case "-": 
            return substract(value1, value2);
            break;
        case "*": 
            return multiply(value1, value2);
            break;
        case "/": 
            return divide(value1, value2);
            break;
    }
}

//GET ELEMENTS FROM DOM
const display = document.querySelector('.input');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear')
const numButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

//INITIALIZE NECESSARY VARIABLES
let previousValue;
let lastValue;
let operatorOnFocus;
let lastOperator;
let count;
let operatorClicked;
let btnClicked;

//ACTION FUNCTIONS
function reset() { //RESET ALL VARIABLES TO THE DEFAULT/START VALUES;
    previousValue = 0;
    lastValue = 0;
    operatorOnFocus = true;
    operatorClicked = '+';
    lastOperator = '+';
    count = 0;
    display.innerText = "";
}

function saveInputs() { //SAVE THE NUMBER TO VE OPERATED
    previousValue = lastValue;
    lastValue = parseFloat(display.innerText);
}

function onScreen() { //ADD CHARACTERS ON SCREEN OR CLEAR IT
    if (operatorOnFocus) {
        display.innerText = "";
        operatorOnFocus = false;
        // count++
    }
    display.innerText += btnClicked; //CHECK CASE > WHEN ZERO IS FIRST VALUE
}
 
//CLEAR AND EQUAL BUTTONS EVENTS
equal.addEventListener('click', event => {

})

clear.addEventListener('click', event => {
    reset();
})

reset();

//NUMBER EVENTS
for (let number of numButtons) {
    number.addEventListener('click', event => {
        if (event.target.matches('button')) {
            btnClicked = event.target.value;
        }
        onScreen();
        lastOperator = operatorClicked;
        // console.log(previousValue, lastValue, lastOperator);
    })
    
}
//OPERATOR EVENTS
for (let operator of operators) {
    operator.addEventListener('click', event => {
        if (event.target.matches('button')) {
            operatorClicked = event.target.value;
        }
        if (!operatorOnFocus) {
            saveInputs();
            lastValue = operate(previousValue, lastValue, lastOperator);
            display.innerText = lastValue;
        }

        operatorOnFocus = true;
        
        // console.log(previousValue, lastValue);
        // console.log(lastOperator)
    })
}  