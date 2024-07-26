// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import *as all from "./utilities.mjs"

console.log(all.add(1,10))
console.log(all.sub(1,10))
console.log(all.mul(1,10))
console.log(all.div(1,10))
console.log(all.PI)
console.log(all.EULER)
console.log(all.calculate_circle_area(10))
console.log(all.calculate_euler_number(10))