/* Exercise 1: Naming Conventions
Given the following code snippet, try to refactor it using better variable and function names.*/

function sumTwoNumber(numberA, numberB) {
  return numberA + numberB;
}
console.log(sumTwoNumber(10, 20));

/* Exercise 2: Commenting and Documentation
Review the following code snippet and add comments to make the code's purpose and functionality clearer.*/

let p = "Hello, world!";
//the code below print the value for 'p' in reverse.
function r(s) {
  let t = s.split("");
  let u = t.reverse();
  let v = u.join("");
  return v;
}
//'t' variable receive the value for s splited and veriable 'u' put ir in reverse and the variable 'v' join the frase toghether and the funcion return 'v'.
console.log(r(p));

/* Exercise 3: Code Structure
This code snippet is correct, but messy. Improve its structure and readability by adding whitespace and organizing the code more logically.*/

function sumTwoNumber(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(sumTwoNumber(100, 200));

/* Exercise 4: Use of Constants
Review the following code and replace the magic numbers with named constants to make it more readable and understandable.*/

function calculateCircleArea(radius) {
  return 3.14 * radius * radius;
}
const PI = 3.14;
console.log(calculateCircleArea(10));

/* Exercise 5: Avoiding Global Variables
The following code uses a global variable. Refactor it to avoid using global variables, making use of function parameters or return values instead.*/

function sayHello() {
  console.log("Hello, world!");
}
sayHello();

/* Exercise 6: Use of let vs const
In the following code snippet, determine where you can use const instead of let, and refactor the code accordingly. Remember, it's a best practice to always use const for variables that won't be reassigned.*/

let x = 10;
let y = 20;
const sum = x + y;
console.log(sum);

/* Exercise 7: Avoiding the == Operator
This code snippet uses the == operator. Refactor it to use === instead, because === is more predictable as it also checks the type of the variables.*/

let x = 10;
if (x === 10) {
  console.log("x is 10");
} else {
  console.log("x is not 10");
}

/* Exercise 8: DRY Principle
This code violates the DRY (Don't Repeat Yourself) principle. Refactor it to avoid repetition.*/

function calculateAreaSquare(side) {
  return side * side;
}

function calculateAreaRectangle(length, width) {
  return length * width;
}

function calculateAreaTriangle(base, height) {
  return 0.5 * base * height;
}

/* Exercise 9: Use of Arrow Functions
Refactor this code to use arrow functions, which provide a more concise syntax for function definition.*/

const multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map(function (number) {
  return multiply(number, 2);
});

console.log(numbers);

/* Exercise 10: Naming Conventions
Rename the variable name so they make sense and describe what they're actually doing. */

function Division(parrot, brick) {
  if (brick !== 0) {
    return parrot / brick;
  }
  return "Division by 0!";
}

/* Exercise 11: DRY
These functions perform very similar tasks. Refactor them into a single, more flexible function that maintains the same functionality. */

function greet(name, timeOfDay) {
  if (timeOfDay === "morning") {
    return `Good morning, ${name}!`;
  }
  if (timeOfDay === "afternoon") {
    return `Good afternoon, ${name}!`;
  }
  if (timeOfDay === "evening") {
    return `Good evening, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

/* Exercise 12: DRY
This code has repetitive conditional checks. Refactor it to avoid the repetition.   */

const dayMessages = {
  Monday: "Start of the work week.",
  Tuesday: "Second day of the work week.",
  Wednesday: "Mid-week.",
  Thursday: "Almost the weekend.",
  Friday: "Last day of the work week.",
  Saturday: "Weekend, time to relax.",
  Sunday: "Weekend, time to prepare for the upcoming week.",
};

const day = "Wednesday";

console.log(dayMessages[day]);

/* Exercise 13: DRY
The following code loops over the same array twice. Can you refactor it to achieve the same results but only loop over the array once? */

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
console.log(sum);

/* Exercise 14: DRY
There are multiple code blocks in the function that do the same thing. Refactor the function to eliminate this duplication. */

function processArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (arr.length > 10) {
    return sum;
  } else {
    return sum * 2;
  }
}

console.log(processArray([5, 4, 6, 9, 2, 4, 5, 7, 8]));
console.log(processArray([2, 3, 5, 7, 8, 5, 4, 6, 9, 2, 4, 5, 7, 8]));

/*  Exercise 15: DRY isn't only about code logic.
In general, the DRY principle is about more than just reducing the amount of code. It's also about making your code more efficient and easier to understand.

This object has several properties that hold very similar data but share something repetitive in their naming. How can you refactor this object to be more DRY?
*/

let menu = {
  burger: 10,
  fries: 5,
  shake: 3,
  soda: 2,
  salad: 7,
};
