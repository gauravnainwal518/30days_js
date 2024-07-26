// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
import {add} from  './utilities1.mjs';

const num1 = 5;
const num2 = 7;
const sum = add(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${sum}`);