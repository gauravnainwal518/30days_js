// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

export const obj = {
  first_name: "gaurav",
  sur_name: "nainwal",
  greet: function () {
    console.log(this.first_name , this.sur_name)
  }
}

