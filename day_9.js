// topic ES6 + features
//activity1- templat literals
/*Template literals in JavaScript are a way to create strings that allow embedded expressions, multi-line strings, and special formatting features. They are enclosed by backticks (`) instead of single quotes (') or double quotes ("). */

//task 1
const name = "John";
const age = 30;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);

//task-2
const multiLineString = `This is a string
that spans multiple
lines using template literals.`;

console.log(multiLineString);


//activity-2-Destructuring
/*Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects into distinct variables. It simplifies the process of accessing and assigning values to variables, making the code more readable and concise. */

//task-3
const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

console.log(first);  
console.log(second); 


//task -4
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};

const { title, author } = book;

console.log(title);  
console.log(author); 

//activity- 3- spread and rest operators
/*The spread and rest operators are both represented by three dots (...) but serve different purposes in JavaScript. They are used to work with arrays, objects, and function arguments more conveniently.*/

//task-1
const originalArray = [1, 2, 3];
const additionalElements = [4, 5, 6];

const newArray = [...originalArray, ...additionalElements];

console.log(newArray); 

//task-2
function sumAll(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const result = sumAll(1, 2, 3, 4, 5);
console.log(result); 

//activity-4 -Default parameters
/*Default parameters in JavaScript allow you to specify default values for function parameters if no value or undefined is passed for those parameters. This feature helps to simplify function calls and provides a way to handle cases where some arguments might be missing. */

//task-7
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));      // 5 (5 * 1)
console.log(multiply(5, 3));   // 15 (5 * 3)


//activity - 5- Enhanced Object Literals
/*Enhanced object literals in JavaScript, introduced in ES6, provide shorthand syntax and additional features for creating and managing objects. They make object creation more concise and expressive.*/

//task-8
// Enhanced object literals
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,

  // Method definition using concise syntax
  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  },

  // Method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  },

  // Computed property name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Log the object to the console
console.log(person);


console.log(person.greet());    
console.log(person.isAdult());  
console.log(person.fullName);   


//task-9
// Variables
let key1 = 'name';
let key2 = 'age';
let value1 = 'John Doe';
let value2 = 30;

// Creating an object with computed property names
let obj = {
  [key1]: value1,
  [key2]: value2,
};

// Logging the object to the console
console.log(obj);
