// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import {obj} from "./utilities2.mjs"

let use_obj = {...obj} 

const {first_name , sur_name, greet} = use_obj
let bound_user = greet.bind(use_obj)
console.log(first_name)
console.log(sur_name)
bound_user()