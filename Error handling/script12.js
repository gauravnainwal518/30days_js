//topic- Error handling
//Activity-1- Basic Error Handling with Try-Catch
//task1- Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwErrorFunction() {
  throw new Error('This is an intentional error!');
}

try {
  throwErrorFunction();
} catch (error) {
  console.error('An error occurred:', error.message);
}


//task-2- Create a function that divides two numbers and throws an error if the denominator is Zero. Use a try-catch block to handle this error.
function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return numerator / denominator;
}

try {
  const result = divideNumbers(10, 0); // Change the second argument to test different cases
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}

//activity-2- finally block
//task-3- write a script that includes a try-catch block and a finally block. Log messages in the try,catch, and finally blocks to observe the execution flow
function riskyOperation() {
  console.log('Inside riskyOperation: Starting the operation.');
  
  // Simulate an error
  throw new Error('An unexpected error occurred during the operation.');

  // Code below the error will not execute
  console.log('Inside riskyOperation: This line will not run.');
}

try {
  console.log('In the try block: About to call riskyOperation.');
  riskyOperation();
  console.log('In the try block: Operation completed successfully.');
} catch (error) {
  console.log('In the catch block: Caught an error.');
  console.error('Error:', error.message);
} finally {
  console.log('In the finally block: This will always execute.');
}

console.log('Outside of try-catch-finally: Script execution continues.');

//activity-3- Custom Error Objects
//task-4- Create a custom error class that extends the built-in-error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// Define a custom error class
class CustomError extends Error {
  constructor(message) {
    super(message); // Pass the message to the base class constructor
    this.name = 'CustomError'; // Set the error name
  }
}

// Function that throws a CustomError
function riskyOperation() {
  console.log('Inside riskyOperation: Starting the operation.');

  // Simulate an error
  throw new CustomError('Something went wrong in riskyOperation.');

  // Code below the error will not execute
  console.log('Inside riskyOperation: This line will not run.');
}

try {
  console.log('In the try block: About to call riskyOperation.');
  riskyOperation();
  console.log('In the try block: Operation completed successfully.');
} catch (error) {
  if (error instanceof CustomError) {
    console.log('In the catch block: Caught a CustomError.');
    console.error('CustomError:', error.message);
  } else {
    console.log('In the catch block: Caught an unknown error.');
    console.error('Error:', error);
  }
} finally {
  console.log('In the finally block: This will always execute.');
}

console.log('Outside of try-catch-finally: Script execution continues.');

//task-5- write a function that validates user input (e.g. Checking if a string is not empty) and throws a custom error if the validation fails.Handle the custom error using a try-catch block.
// Define a custom error class for validation errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Function to validate user input
function validateInput(input) {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new ValidationError('Input must be a non-empty string.');
  }
  return true;
}

// Example usage
try {
  const userInput = ''; // Change this to test different inputs
  console.log('In the try block: Validating input.');
  validateInput(userInput);
  console.log('In the try block: Input is valid.');
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('In the catch block: Caught a ValidationError.');
    console.error('ValidationError:', error.message);
  } else {
    console.log('In the catch block: Caught an unknown error.');
    console.error('Error:', error);
  }
} finally {
  console.log('In the finally block: This will always execute.');
}

console.log('Outside of try-catch-finally: Script execution continues.');


//Activity-4- Error Handling in promises
//task-6- Create a promis that randomly resolves or rejects use .catch() to handle the rejection and log an appropriate message to the console.
// Function to create a promise that randomly resolves or rejects
function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomValue = Math.random(); // Generate a random number between 0 and 1
    if (randomValue < 0.5) {
      resolve('Promise resolved successfully!');
    } else {
      reject(new Error('Promise rejected due to a random failure.'));
    }
  });
}

// Use the promise
randomPromise()
  .then((message) => {
    console.log('Success:', message);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

console.log('Promise is pending...');

//task-7- use try-catch within async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
// Function to create a promise that randomly resolves or rejects
function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomValue = Math.random(); // Generate a random number between 0 and 1
    if (randomValue < 0.5) {
      resolve('Promise resolved successfully!');
    } else {
      reject(new Error('Promise rejected due to a random failure.'));
    }
  });
}

// Async function that uses try-catch to handle promise errors
async function handleRandomPromise() {
  try {
    console.log('In try block: Awaiting randomPromise...');
    const message = await randomPromise();
    console.log('Success:', message);
  } catch (error) {
    console.log('In catch block: Caught an error.');
    console.error('Error:', error.message);
  }
}

// Call the async function
handleRandomPromise();

//activity-5- Graceful Error Handling in Fetch
//task-8- Use the fetch API to request data from an invalid URL and handle the error using .Catch(). Log an appropriate error messsage to the console.
// URL for a non-existent resource
const invalidUrl = 'https://jsonplaceholder.typicode.com/nonexistentEndpoint';

// Function to fetch data from the invalid URL
function fetchData() {
  fetch(invalidUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error.message);
    });
}

// Call the function
fetchData();


//task-9- Use the fetch API to request data from and invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
// URL for a non-existent resource
const invalidUrl = 'https://jsonplaceholder.typicode.com/nonexistentEndpoint';

// Async function to fetch data from the invalid URL
async function fetchData() {
  try {
    console.log('Attempting to fetch data from the URL...');
    const response = await fetch(invalidUrl);

    if (!response.ok) {
      // If the response is not OK, throw an error with status text
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    // Handle any errors that occurred during the fetch or JSON parsing
    console.error('There was a problem with the fetch operation:', error.message);
  }
}

// Call the async function
fetchData();
