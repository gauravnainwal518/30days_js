// activity -1 
//1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//activity -2
//1
let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i; // Add i to sum
    i++; // Increment i
}

console.log("Sum of numbers from 1 to 10 is:", sum);
//2
let j = 10;
while (j >= 1) {
    console.log(i);
    j--; // Decrement j
}

//activity -3
//1
let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 5);

//2
let number = 5; // Change this value to calculate a different factorial
let result = 1;
let k = 1;

if (number < 0) {
    console.log("Factorial is not defined for negative numbers");
} else {
    do {
        result *= k;
        k++;
    } while (k <= number);
    
    console.log(`Factorial of ${number} is ${result}`);
}

//activity -4

let rows = 5; // Number of rows

for (let i = 1; i <= rows; i++) {
    let starPattern = ''; // Initialize an empty string for stars
    for (let j = 1; j <= i; j++) {
        starPattern += '* '; // Add a star and a space
    }
    console.log(starPattern); // Print the current row
}

//activity-5
//1
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
      continue; // Skip the number 5
  }
  console.log(i);
}

//2
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
      break; // Stop the loop if the number is 7
  }
  console.log(i);
}

