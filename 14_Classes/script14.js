//topic- Classes
//Activity-1- Class definition
//task-1- Define a class 'person' with properties 'name' and 'age' and a method to return a greeting message.Create an instance of the class and log the greeting message.
// Defining the Person 
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to return a greeting message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an instance of the Person class
const person1 = new Person('Gaurav', 25);

// Logging the greeting message
console.log(person1.greet());

*/

/*
//task-2-Add a method to the 'person ' class that updates the age property and logs the updated age.
// Defining the Person2 class with an additional method to update age
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to return a greeting message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Method to update the age and log the updated age
  updateAge(newAge) {
    this.age = newAge;
    console.log(`My updated age is now ${this.age}.`);
  }
}

// Creating an instance of the Person class
const person2 = new Person2('Gaurav', 25);

// Logging the greeting message
console.log(person2.greet());

// Updating the age and logging the updated age
person2.updateAge(26);
*/

/*
//Activity-2- Class Inheritence
//task-3- Define a class 'Student' that extends the 'person' class. Add a property studentId and a method to return the student class and log the studentId.
// Defining the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to return a greeting message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Defining the Student class that extends Person
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Calling the parent class constructor
    this.studentId = studentId;
  }

  // Method to log the student class and studentId
  getStudentInfo() {
    return `I am a student. My student ID is ${this.studentId}.`;
  }
}

// Creating an instance of the Student class
const student1 = new Student('Gaurav', 25, 'S12345');

// Logging the student information
console.log(student1.getStudentInfo());
*/

/*
//task-4- Override the greeting method in the student class to include the student Id in the message. Log the overriden greeting message.
// Defining the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to return a greeting message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Defining the Student class that extends Person
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Calling the parent class constructor
    this.studentId = studentId;
  }

  // Overriding the greet method to include the student ID
  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  // Method to log the student class and studentId
  getStudentInfo() {
    return `I am a student. My student ID is ${this.studentId}.`;
  }
}

// Creating an instance of the Student class
const student1 = new Student('Gaurav', 25, 'S12345');

// Logging the overridden greeting message
console.log(student1.greet());
*/

/*
//Activity-3- Static Methods and properties
//task-5-Add a static method to the person class that returns a generic greeting message.Call the static method without creating an instance of the class and log the message.
// Defining the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method to return a greeting message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Static method to return a generic greeting message
  static genericGreeting() {
    return "Hello, welcome to the Person class!";
  }
}

// Calling the static method without creating an instance
console.log(Person.genericGreeting());
*/

/*
//task-6- Add a static property to the 'student' class to keep track of the number  of students Created. Increment this property in the constructor and log the total number of students.
// Defining the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method to return a greeting message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Static method to return a generic greeting message
  static genericGreeting() {
    return "Hello, welcome to the Person class!";
  }
}

// Defining the Student class that extends Person
class Student extends Person {
  // Static property to keep track of the number of students
  static numberOfStudents = 0;

  constructor(name, age, studentId) {
    super(name, age); // Calling the parent class constructor
    this.studentId = studentId;
    Student.numberOfStudents++; // Incrementing the static property
  }

  // Overriding the greet method to include the student ID
  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  // Method to log the student class and studentId
  getStudentInfo() {
    return `I am a student. My student ID is ${this.studentId}.`;
  }
}

// Creating instances of the Student class
const student1 = new Student('Gaurav', 25, 'S12345');
const student2 = new Student('Aarav', 22, 'S12346');

// Logging the total number of students created
console.log(`Total number of students: ${Student.numberOfStudents}`);
*/

/*
//Activity-4- Getters and Setters
//task-7- Add a getter method to the 'person' class to return the full name(assume a firstName and lastName property). Create an instance and log the full name using the getter.
// Defining the Person class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Getter method to return the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Instance method to return a greeting message
  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  // Static method to return a generic greeting message
  static genericGreeting() {
    return "Hello, welcome to the Person class!";
  }
}

// Creating an instance of the Person class
const person1 = new Person('Gaurav', 'Sharma', 25);

// Logging the full name using the getter method
console.log(`Full Name: ${person1.fullName}`);
*/

//task-8- Add a setter method to the person class to update the name properties(firstName and lastName) Update the name using setter and log the updated full name.

// Defining the Person class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Getter method to return the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter method to update the name properties
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Instance method to return a greeting message
  greet() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }

  // Static method to return a generic greeting message
  static genericGreeting() {
    return "Hello, welcome to the Person class!";
  }
}

// Creating an instance of the Person class
const person1 = new Person('Gaurav', 'Sharma', 25);

// Logging the full name using the getter method
console.log(`Full Name: ${person1.fullName}`);

// Updating the name using the setter method
person1.fullName = 'Aarav Kumar';

// Logging the updated full name using the getter method
console.log(`Updated Full Name: ${person1.fullName}`);

