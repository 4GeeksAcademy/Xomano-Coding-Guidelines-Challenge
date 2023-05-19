/* Exercise 1: Syntax Error
There's a syntax error in this code. Find and fix it.*/

function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

/* Exercise 2: Reference Error
This code has a reference error. Try to solve it.*/

const greeting = "Hello, world!";
console.log(greeting);

/* Exercise 3: Type Error
The following code throws a TypeError. Determine why it's happening and how to fix it.*/

let num = "123";
num.split("");

/* Exercise 4: Logical Error
This code has a logical error, which means it runs without throwing errors, but it doesn't produce the expected result. Find and fix the logical error. */

function findEvenNumbers(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* Exercise 5: Scoping Issue
The following code has a scoping issue. Find and fix the problem. */

function increment(count) {
  count++;
  return count;
}
console.log(increment());

/* Exercise 6: Syntax Error
Identify the syntax error in this code and correct it. */

for (i = 0; i < 10; i++) {
  console.log(i);
}

/* Exercise 7: Type Error
The following code throws a TypeError. Determine why it's happening and how to fix it. */

let myObject = "undefined";
console.log(myObject.property);

/* Exercise 8: Scoping Issue
This code has a scoping issue. Try to figure out what's wrong and how to correct it.*/

function doSomething() {
  innerVar = "I'm an inner variable";
  return innerVar;
}

doSomething();
console.log(innerVar);

/* Exercise 9: Infinite Loop 
Infinite loop, fix it! */

const myArray = [5, 30, 25, 10, 7];
let j = 0;
while (j < myArray.length) {
  console.log("printing!", myArray[j]);
  j++;
}

/* Exercise 10: Property Access
In this code, a programmer is trying to access the name of the user, but there's an error. Can you spot it and correct the code? */

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
};

console.log(user.name);

/* Exercise 11: Adding a Property
This code attempts to add a property to an object, but there's an error. Fix the error in the code.*/

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

car.color = "red";

/* Exercise 12: Object Methods
In the code below, the programmer is trying to define a method within an object, but there's a mistake. Can you identify and correct the error?*/

const dog = {
  name: "Max",
  breed: "Golden Retriever",
  speak: function () {
    console.log("Woof! My name is " + dog.name);
  },
};

dog.speak();

/* Exercise 13: Nested Objects
This code attempts to access a property in a nested object, but it has an error. Fix it. */

let student = {
  name: "Jane Doe",
  age: 20,
  grades: {
    math: "A",
    science: "B",
    english: "A",
    history: "A",
  },
};

console.log(student.grades.history);
