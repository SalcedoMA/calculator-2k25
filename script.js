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


const display = document.querySelector('.input');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear')
const numButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let previousValue;
    let lastValue;
    let operatorOnFocus;
    let lastOperator;
    let count;
    let opClicked;

function reset() {
    previousValue = 0;
    lastValue = 0;
    operatorOnFocus = false;
    lastOperator;
    count = 0;
}

reset();

function saveInputs() {
    previousValue = lastValue;
    lastValue = parseFloat(display.innerText);
}
 

equal.addEventListener('click', event => {

})

clear.addEventListener('click', event => {
    reset();
})

// function getValue(event) {
//     if (event.target.matches('button')) {
//         return event.target.value;
//     }
// }

//GET BUTTON VALUES
//NUMBER EVENTS
for (let number of numButtons) {
    let btnClicked;
    number.addEventListener('click', event => {
        if (event.target.matches('button')) {
            btnClicked = event.target.value;
        }
        if (operatorOnFocus) {
            display.innerText = "";
            operatorOnFocus = false;
        }
        display.innerText += btnClicked;

    })
    
}
//OPERATOR EVENTS
for (let operator of operators) {
    operator.addEventListener('click', event => {
        if (event.target.matches('button')) {
            let operatorClicked = event.target.value;
        }

        if (!operatorOnFocus) {
            saveInputs();
        }
        
        operatorOnFocus = true;
        console.log(previousValue, lastValue);
    })
}  