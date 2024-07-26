// Task 6:Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import chunk from "lodash/chunk.js"

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let chunked = chunk(array, 3)

console.log(chunked)