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