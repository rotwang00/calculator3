'use strict';

// Global variables
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let formula = '';

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

// Parse input string into operands and operators
const parse = function (expression) {
  let [a, o, b] = expression.split(' ');
  a = Number(a);
  b = Number(b);
  let result = operate(a, b, o);
  display.textContent = result;
};

const buttons = document.querySelector('.calculator-functions');

buttons.addEventListener('click', event => {
  formula += event.target.value;
  console.log(formula);
});

parse('56 + 64');
