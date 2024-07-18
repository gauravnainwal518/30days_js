
//activity 1- function declaration
//task 1
function checkEvenOdd (number) {
  if (number % 2 ==0){
    console.log("even num");
  } else {
    console.log("odd num");
  }
}

checkEvenOdd(4);
checkEvenOdd(7);

//task 2
function squreofanum(num){
  console.log(num*num);
}

squreofanum(5);

//activity 2- function expression
//A function expression in JavaScript is a way to define a function within an expression, typically assigned to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined.
//task 1

const maxnum = function(num1,num2){
if(num1 >= num2){
  console.log("num1 is maximum")
} else 
{
  console.log("num2 is maximum");
}
}

maxnum(4,5);

//2nd method
const findMax = function(num1, num2) {
  return (num1 > num2) ? num1 : num2;
};


let number1 = 10;
let number2 = 20;

let maxNumber = findMax(number1, number2);
console.log("The maximum number is: " + maxNumber); 


//task 2
//String concatenation in JavaScript is the process of joining two or more strings together to form a single string. This can be done using the + operator or the concat() method.

const concatenateStrings = function(string1, string2) {
  return string1 + string2;
};


let result = concatenateStrings("Hello, ", "world!");
console.log(result); 

//activity 3- arrow function
//syntax
const functionName = (parameters) => {
  // function body
  return expression;
};
//example
const greet = () => {
  return "Hello, world!";
};

console.log(greet()); 

//task 1
const sum = (num1, num2) => num1 + num2;

// Example usage:
let num1 = 5;
let num2 = 7;

let ans = sum(number1, number2);
console.log("The sum is: " + ans); 

//task-2
const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("Hello, world!", "o")); 
console.log(containsCharacter("Hello, world!", "z")); 

//activity 4-function parameter and default values
//In JavaScript, we can set default values for function parameters by assigning them within the function's parameter list. Here's how you can do it:


const greet1 = (name = 'Guest', greeting = 'Hello') => {
    return `${greeting}, ${name}!`;
};

// Example usage:
console.log(greet1()); 
console.log(greet1('Alice')); 
console.log(greet1('Bob', 'Hi')); 
/*
The greet1 function takes two parameters, name and greeting.
name defaults to 'Guest' if no value is provided.
greeting defaults to 'Hello' if no value is provided.
If both parameters are provided, their values are used in the function.
This allows for flexible function calls with optional parameters.
*/

//task-1
let number = (num1, num2=5) =>{
  return num1*num2;
}

//example usage:
console.log(number(8));
//this take default value 5 and num1 is 8


//task-2
const greetPerson = (name, age = 18) => {
  return `Hello, ${name}! You are ${age} years old.`;
};

// Example usage:
console.log(greetPerson('Gaurav')); 

//activity 5-Higher-order function
/*A higher-order function in JavaScript is a function that either:

Takes one or more functions as arguments, or
Returns a function as its result.
Higher-order functions are a powerful feature of JavaScript that enable functional programming techniques. Here are a few examples of higher-order functions: */

//task -1
const repeatFunction = (fn, times) => {
  for (let i = 0; i < times; i++) {
      fn();
  }
};

// Example usage:
const sayHello = () => {
  console.log("Hello!");
};

repeatFunction(sayHello, 5); 
/*
repeatFunction is the higher-order function.
fn is the function to be called repeatedly.
times is the number of times to call fn.
A for loop is used to call fn the specified number of times.
*/

//task-2
function applyFunctions(func1, func2, value) {
  return func2(func1(value));
}

// Example usage:
function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

const result1 = applyFunctions(double, square, 3);
console.log(result);  
/* 
applyFunctions is the higher-order function that takes func1, func2, and value.
It first applies func1 to value and then applies func2 to the result of func1(value).
The double function doubles the input value.
The square function squares the input value.
When applyFunctions is called with double, square, and 3, it first doubles 3 to get 6, and then squares 6 to get 36.
*/
