//Topic - Promises and Async/Await

/*In JavaScript, Promises and Async/Await are used for handling asynchronous operations. They provide a way to work with asynchronous code more efficiently, especially when dealing with tasks like fetching data from an API, reading files, or interacting with a database. */

/*A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of these states:

Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure. */

/*Async/Await is a syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code. It helps write cleaner and more readable asynchronous code.

async: This keyword is used before a function to indicate that the function will return a Promise. The function itself can contain await expressions.
await: This keyword is used to wait for a Promise to resolve or reject. It can only be used inside async functions */

//Activity-1- Understanding Promises
//task-1- Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
/*
let myPromise = new Promise ((resolve, reject) =>{
  setTimeout(()=>{
    resolve("promise resolve after 2 seconds!");
  },2000);
});

//Handle the promise
myPromise.then((message) =>{
  console.log(message);
});
*/


//task-2 create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
/*

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds!"));
  }, 2000);
});

// Handle the rejected promise
myPromise
  .then((message) => {
    // This block will not be executed because the promise is rejected
    console.log(message);
  })
  .catch((error) => {
    // This block will handle the error
    console.error(error.message); // Output: "Promise rejected after 2 seconds!"
  });
  */

  //activity-2-Changing promises
  /*"Chaining promises" refers to the practice of handling multiple asynchronous operations in a sequence using Promises. In JavaScript, you can chain promises using the .then() and .catch() methods, which allow you to perform operations in a specified order and handle errors at each step.

When you chain promises, the result of one promise is passed to the next .then() or .catch() block, creating a smooth flow of asynchronous operations. This is especially useful when you have to perform several operations that depend on each other, like fetching data, processing it, and then updating the UI. */

  //task-3- Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
  // Function to simulate server connection
function connectToServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Connected to server.");
      resolve("Server connected");
    }, 1000); // Simulate 1 second delay
  });
}

// Function to simulate fetching user data
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched user data.");
      resolve("User data fetched");
    }, 1000); // Simulate 1 second delay
  });
}

// Function to simulate fetching additional details
function fetchAdditionalDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched additional details.");
      resolve("Additional details fetched");
    }, 1000); // Simulate 1 second delay
  });
}

// Chain the promises to execute in order
connectToServer()
  .then((message) => {
    console.log(message);
    return fetchUserData();
  })
  .then((message) => {
    console.log(message);
    return fetchAdditionalDetails();
  })
  .then((message) => {
    console.log(message);
    console.log("All data fetching complete.");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });



  //activity-3- Using Async/Await
  //task-4- Write a async function that waits for a promise to resolve and then log the resolved value.
// Function that returns a promise resolving after a delay
function resolveAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after delay!");
    }, 2000); // Simulate a 2-second delay
  });
}

// Async function that waits for the promise to resolve
async function asyncFunction() {
  try {
    const result = await resolveAfterDelay();
    console.log(result); // Output: "Promise resolved after delay!"
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
// Call the async function
asyncFunction();



  //task-5- Write a async function that handles a rejected promise using try-catch and logs the error message. 
// Function that returns a promise which rejects after a delay
function rejectAfterDelay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected after delay!"));
    }, 2000); // 
  });
}

// Async function to handle the rejected promise
async function handleRejection() {
  try {
    const result = await rejectAfterDelay();
    console.log(result); // This line will not be executed if the promise is rejected
  } catch (error) {
    console.error("Caught an error:", error.message); 
  }
}
// Call the async function
handleRejection();

//activity-4- fetching data from an API
//task-6- use the 'fetch' API to get data from a public API and log the response data to the console using promises.
// URL of the public API
const apiUrl = 'https://randomuser.me/api/';

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Log the response data to the console
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

//task-7- Use  the 'fetch' API to get data from a public API and log the response data to the console using async/await.
// URL of the public API
const apiUrl2 = 'https://randomuser.me/api/';

// Async function to fetch data
async function fetchData() {
  try {
    // Await the fetch response
    const response = await fetch(apiUrl);

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Await parsing the response as JSON
    const data = await response.json();

    // Log the response data to the console
    console.log(data);
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  }
}

// Call the async function
fetchData();

//activity-5- Concurrent promises
/*In JavaScript, you can handle multiple asynchronous operations concurrently using promises. This is often done when you want to start several asynchronous tasks at once and wait for all of them to complete. There are several methods for managing concurrent promises, with Promise.all(), Promise.allSettled(), and Promise.race() being the most common. */
//task-1- Use 'promise.all' to wait for multilple promises to resolve and then log all their values.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('First promise resolved!'), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Second promise resolved!'), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Third promise resolved!'), 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // ["First promise resolved!", "Second promise resolved!", "Third promise resolved!"]
  })
  .catch((error) => {
    console.error(error);
  });



//task-2- Use 'promise.race' to log the value of the first promises that resolves among multiple promises.
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('First promise resolved!'), 3000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Second promise resolved!'), 1000);
});

const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Third promise rejected!'), 2000);
});

Promise.race([promise5, promise6, promise7])
  .then((value) => {
    console.log(value); 
  })
  .catch((error) => {
    console.error(error);
  });
