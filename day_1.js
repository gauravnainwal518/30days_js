// chapter - variables  and  data types
//activity 1 - variable declaration

var a = 89;
console.log(a);


let my_str = "gaurav";
console.log(my_str );

//activity 2 - constant declaration
const item = true;
console.log(item);

//activity 3 - data types
var numberVar = 42;
console.log( typeof numberVar);

var stringVar = "Hello, World!";
console.log( typeof stringVar);

var booleanVar = true;
console.log( typeof booleanVar);


var arrayVar = [1, 2, 3, 4, 5];
console.log( typeof arrayVar);

var objectVar = { name: "Rahul", age: 30 };
console.log( typeof objectVar);


//activity 4 - reassigning variables
/*let my_place = "delhi"
console.log(my_place);
let my_place ="kolkata";
console.log(my_place);
*/
//cannot redeclare blocked scope variable! in activity 4
//let can be updated but not redeclared because its blocked scope



//activity 5 - understanding const
const num = 10;
console.log(num);

 num = 10;
console.log(num);

//const can neither be updated nor be re-declared const is also block scoped!


