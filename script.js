'use strict';

// Global variables
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let buttonPressed = '';
let formula = '';
let isEmpty = true;
let isInMidstOfAAA = false;
let operatorJustAdded = false;
let isInMidstOfBBB = false;
let calculationComplete = false;

// DOM variables
let display = document.querySelector('.calculator-display');

// Operations
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

// Use the correct operation
const operate = function (a, b, o) {
  switch (o) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
};

// Handle button presses
const processButton = function (event) {
  let value = event.target.value;
  let buttonType = event.target.className;
  // console.log(value, buttonType);

  if (isEmpty == true && buttonType == 'btn-number') {
    isEmpty = false;
    isInMidstOfAAA = true;
    formula += value;
    return formula;
  }

  if (isInMidstOfAAA == true && buttonType == 'btn-number') {
    formula += value;
    return formula;
  }

  if (isInMidstOfAAA == true && value == '=') {
    return formula;
  }

  if (isInMidstOfAAA == true) {
    isInMidstOfAAA = false;
    operatorJustAdded = true;
    formula += ` ${value} `;
  }

  if (operatorJustAdded == true && buttonType == 'btn-number') {
    operatorJustAdded = false;
    isInMidstOfBBB = true;
    formula += value;
  }

  if (operatorJustAdded == true) {
    return formula;
  }

  if (isInMidstOfAAA == true && buttonType == 'btn-number') {
    formula += value;
    return formula;
  }

  if (isInMidstOfBBB == true && value == '=') {
    calculationComplete = true;
  }
};

// Parse formula string into operands and operators
const parse = function (expression) {
  console.log('here');
  console.log(formula);
  let [a, o, b] = expression.split(' ');
  a = Number(a);
  b = Number(b);
  let result = operate(a, b, o);
  console.log(result);
  display.textContent = result;
};

const buttons = document.querySelector('.calculator-functions');

buttons.addEventListener('click', event => {
  // buttonPressed = event.target.value;
  processButton(event);
  console.log(formula);
  display.textContent = formula;
  if (calculationComplete == true) {
    parse(formula);
  }
});

parse('56 + 64');

// 'use strict';

// // Global variables
// let firstNumber = 0;
// let secondNumber = 0;
// let operator = '';
// let buttonPressed = ''
// let formula = '';
// let isEmpty = true;
// let isInMidstOfAAA = false;
// let operatorJustAdded = false;
// let isInMidstOfBBB = false;

// // DOM variables
// let display = document.querySelector('.calculator-display');

// // Operations
// const add = function (a, b) {
//   return a + b;
// };

// const subtract = function (a, b) {
//   return a - b;
// };

// const multiply = function (a, b) {
//   return a * b;
// };

// const divide = function (a, b) {
//   return a / b;
// };

// // Use the correct operation
// const operate = function (a, b, o) {
//   switch (o) {
//     case '+':
//       return add(a, b);
//     case '-':
//       return subtract(a, b);
//     case '*':
//       return multiply(a, b);
//     case '/':
//       return divide(a, b);
//   }
// };

// // Handle button presses
// const processButton = function(buttonPressed) {
//   if (isEmpty )
// }

// // Parse formula string into operands and operators
// const parse = function (expression) {
//   let [a, o, b] = expression.split(' ');
//   a = Number(a);
//   b = Number(b);
//   let result = operate(a, b, o);
//   display.textContent = result;
// };

// const buttons = document.querySelector('.calculator-functions');

// buttons.addEventListener('click', event => {
//   buttonPressed = event.target.value;
//   processButton(buttonPressed);
//   console.log(formula);
// });

// parse('56 + 64');
