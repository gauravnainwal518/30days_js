

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from "axios"

axios("https://api.github.com/users/hiteshchoudhary")
.then(function(response){
  return response.data
})
.then(function(data){
  console.log(data)
})
.catch(function(error){
  console.log(error.message)
})