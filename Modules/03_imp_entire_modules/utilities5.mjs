// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.


export const PI = 3.14159;
export const EULER = 2.71828;

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function mul(a, b) {
  return a * b;
}

export function div(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

export function calculate_circle_area(radius) {
  return PI * radius * radius;
}

export function calculate_euler_number(power) {
  return EULER ** power;
}