//activity1 : if-else statement
//const userInput = prompt("message from the user");
//const number = Number(userInput);
//note above code for prompt method


//readline method
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (userInput) => {
    const number = Number(userInput); // Convert input to a number

    if (number > 0) {
        console.log("The number is a positive number");
    } else if (number < 0) {
        console.log("The number is negative");
    } else {
        console.log("The number is zero");
    }

    rl.close(); // Close the interface after use
});
*/
//note - If you're seeing an error that prompt is not defined, it might be because you're running the code in a non-browser environment, like Node.js. The prompt function is available in browsers, but not in Node.js.
//To run the code in a Node.js environment, you can use the readline module to get user input).





/*
const readline = require('readline');

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r2.question('Enter a number: ', (userInput) => {
    const number = Number(userInput); // Convert input to a number

    if (number >= 18) {
        console.log("Person is eligible for voting");
    } else {
        console.log("Person is not eligible for voting");
    }

    r2.close(); // Close the interface after use
});
*/


//activity- 2
/*
const num1 = 15;
const num2 = 30;
const num3 = 25;

let largest;

if (num1 >= num2) {
    if (num1 >= num3) {
        largest = num1; // num1 is the largest
    } else {
        largest = num3; // num3 is the largest
    }
} else {
    if (num2 >= num3) {
        largest = num2; // num2 is the largest
    } else {
        largest = num3; // num3 is the largest
    }
}

console.log("The largest number is:", largest);
*/

//activity 3
/*
const dayNumber = 4; // Change this number to test different days

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");
}
*/

/*
const score = 85; // Change this score to test different grades

let grade;
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    case (score >= 50):
        grade = 'E';
        break;
    case (score < 50):
        grade = 'F';
        break;
    default:
        grade = 'Invalid score';
}

console.log(`The grade is: ${grade}`);
*/

//activity - 4
/*
const number = 7; 

const result = (number % 2 === 0) ? "Even" : "Odd";

console.log(`The number ${number} is: ${result}`);
*/


/*
const year = 2024; // Change this year to test

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (isLeapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
*/
