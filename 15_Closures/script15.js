//Topic-Closures
/*In JavaScript, a closure is a feature where an inner function has access to the outer (enclosing) function's variables—scope chain, even after the outer function has finished executing. This is possible because JavaScript functions form closures. The closure has three scope chains:

Its own scope: variables defined between its curly braces.
The outer function's variables: variables defined in the function containing it.
Global variables: variables defined outside any function. */


//Activity-1- Understanding Closures
//task-1- Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. call the inner function and log the result.
function createMultiplier(multiplier) {
  return function (number) {
      return number * multiplier;
  };
}

const double = createMultiplier(2); // Creates a function that doubles the input
const result = double(5); // Calls the inner function with the argument 5

console.log(result); 

//task-2- Create a closures  that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
  let count = 0; // Ensure the variable name is unique

  return {
      increment: function () {
          count++;
      },
      getValue: function () {
          return count;
      }
  };
}

const counter = createCounter(); // Create a counter instance

counter.increment(); // Increment the counter
counter.increment(); // Increment the counter again

console.log(counter.getValue()); 


//Activity-2- Practical closures
//task-3- Write a function that generates unique IDs. Use a clousre to keep track of the last generated ID and increment with each call.
function createIDGenerator() {
  let lastID = 0; // Private variable to keep track of the last ID

  return function () {
      lastID++; // Increment the last ID
      return lastID; // Return the new unique ID
  };
}

const generateID = createIDGenerator(); // Create an ID generator instance

console.log(generateID()); 
console.log(generateID()); 
console.log(generateID()); 

//task-4- Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeting(name) {
  return function () {
      return `Hello, ${name}!`;
  };
}

const greetJohn = createGreeting('John'); // Create a greeting function for 'John'
const greetJane = createGreeting('Jane'); // Create a greeting function for 'Jane'

console.log(greetJohn()); 
console.log(greetJane()); 

//Activity-3- Closures on loop
//task-5- Write a loop that creates an array of functions. Each function should log its index when called.Use a closure to ensure each function logs the correct index.
const functions = [];

for (let i = 0; i < 5; i++) {
    functions.push((function(index) {
        return function() {
            console.log(index);
        };
    })(i));
}

// Testing the functions
functions[0](); 
functions[1](); 
functions[2](); 
functions[3](); 
functions[4](); 

//activity-4-Module pattern
//task-6- Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemManager() {
  let items = []; // Private array to store items

  return {
      addItem: function(item) {
          items.push(item);
          console.log(`${item} added.`);
      },
      removeItem: function(item) {
          const index = items.indexOf(item);
          if (index !== -1) {
              items.splice(index, 1);
              console.log(`${item} removed.`);
          } else {
              console.log(`${item} not found.`);
          }
      },
      listItems: function() {
          if (items.length === 0) {
              console.log('No items in the collection.');
          } else {
              console.log('Items in the collection:');
              items.forEach((item, index) => {
                  console.log(`${index + 1}. ${item}`);
              });
          }
      }
  };
}

const itemManager = createItemManager();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.listItems(); // Lists all items

itemManager.removeItem('Apple');
itemManager.listItems(); // Lists remaining items

//Activity-5- Memoization
//task-7- Write a function that memoizes the result of another function. Use a closure to store the result of previous computations.
function memoize(fn) {
  const cache = {}; // Object to store results of previous computations

  return function(...args) {
      const key = JSON.stringify(args); // Use JSON.stringify to create a unique key based on arguments
      if (cache[key]) {
          console.log('Returning cached result for', args);
          return cache[key]; // Return cached result if it exists
      }
      const result = fn(...args); // Compute the result if not cached
      cache[key] = result; // Store the result in the cache
      return result;
  };
}

// Example function to memoize
function slowFunction(num) {
  console.log('Computing result for', num);
  return num * num;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); 
console.log(memoizedSlowFunction(5)); 
console.log(memoizedSlowFunction(6)); 
console.log(memoizedSlowFunction(6)); 


//task-8- Create a memorized version of a function that calculate the factorial of number.
function memoizeFactorial() {
  const cache = {}; // Object to store cached factorial results

  function factorial(n) {
      if (n < 0) return undefined; // Factorial is not defined for negative numbers
      if (n === 0 || n === 1) return 1; // Base cases
      if (cache[n]) {
          console.log(`Returning cached result for ${n}!`);
          return cache[n]; // Return cached result if it exists
      }
      console.log(`Computing result for ${n}!`);
      cache[n] = n * factorial(n - 1); // Compute and cache the result
      return cache[n];
  }

  return factorial;
}

const memoizedFactorial = memoizeFactorial();

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(6)); 
