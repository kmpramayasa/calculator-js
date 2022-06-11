// Initialize calculation variable
let prevNumber = '';
let calcOperator = '';
let currentNumber = '0';

// getting all numbers query
const numbers = document.querySelectorAll(".number");


// inputNumber function
const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

// looping numbers query when clicked
numbers.forEach((number) => {    
    number.addEventListener("click", (event)=> {
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    });
});

// Decimal query
const decimal = document.querySelector('.decimal');

// input Decimal function
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

// Adding decimal when the button clicked
decimal.addEventListener('click', (event)=> {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

// get calculatorScreen query
const calculatorScreen = document.querySelector(".calculator-screen");

// update Screen function
const updateScreen = (number) => {
    calculatorScreen.value = number;
};

// Operator Section
// Initialise new operators query
const operators = document.querySelectorAll(".operator");

// inputOperator function
const inputOperator = (operator) => {
    if(calcOperator === '') {
        prevNumber = currentNumber;
    }
    calcOperator = operator;
    currentNumber = '0';    
}

// Looping operators query when clicked
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});


// Calculation variable
// getting the equal sign query
const equalSign = document.querySelector(".equal-sign");

// calculate function
const calculate = () => {
    let result = '';
    switch(calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break
        default:
            break
    }
    currentNumber = result;
    calcOperator = '';
}

// calculate the variable when equal sign clicked
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

// Clear All Section
// getting clear button query
const clearBtn = document.querySelector('.all-clear');

// clear All function 
const clearAll = ()=> {
    prevNumber = '';
    calcOperator = '';
    currentNumber = '0';
}
// clear all value when clearBtn clicked
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});


