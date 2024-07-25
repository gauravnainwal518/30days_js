//topic - array
//activity1 - array creation and access
//task-1
//an array of numbers
const numbers =[1,2,3,4,5]
console.log(numbers);

// an array of string type
const fruits = ["mango","banana","orange","guava"]
console.log(fruits);

//an array of mixed data types
const mixedarray = ["mango" ,1, null, true]
console.log(mixedarray);
4

//task -2
//accessing first and last  element by indexing
const num = [1,2,3,4,5]
console.log(num[0]);
console.log(num[4]);

//checking length using length property
console.log(num.length);

//activity 2-array methods basic
//push, pop, shift and unshift
//push method use for adding new element in end of an array!
const num2 = [3,4,5,6,7]
num2.push(9);
console.log(num2);

//pop-remove last element of an array
const num3 = [5,6,7,8]
num3.pop();
console.log(num3);

// shift and unshift methods in JavaScript are used to manipulate arrays by adding or removing elements from the beginning of the array.

//The shift method removes the first element from an array and returns that removed element. This method changes the length of the array.

num3.shift();
console.log(num3);

//The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.

num2.unshift(4);
console.log(num2);

//activity 3- array methods intermediate
// map, filter, reduce

// map-The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(x => x * 2);

console.log(doubled); 

//filter- The filter method creates a new array with all elements that pass the test implemented by the provided function.

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(x => x % 2 === 0);

console.log(evenNumbers); 

//reduce-The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 


//activity 4- array Iteration
//using for loop
const numbers4 = [3,5,7,8,9]

for (let i=0; i < numbers.length; i++){
  console.log(numbers4[i]);
}


//using forEach -The forEach method is a higher-order function available on arrays in JavaScript. It executes a provided function once for each array element.

const numbers5 = [1, 2, 3, 4, 5];

numbers5.forEach(function(number) {
    console.log(number);
});

/*function(number) is the callback function provided to forEach, which takes number as the current element of the array.
Inside the function, you can perform operations on each element of the array.*/

/*Differences and Considerations
1-Control Flow: The for loop provides more control over the iteration process, such as skipping iterations or breaking out of the loop early using break or continue.
2-Readability and Conciseness: The forEach method is more concise and readable for simple iterations over arrays, especially when you don't need to control the loop flow manually.
3-Compatibility: forEach is available in ECMAScript 5 and later versions, while the for loop is universally supported across all JavaScript versions */

//activity 5 -Multi-dimensonal array
// Creating a 2D array (2x4 matrix) with initial values
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
];

// Logging the entire matrix to the console
console.log(matrix);

// Accessing and logging a specific element
console.log(matrix[1][2]);  
