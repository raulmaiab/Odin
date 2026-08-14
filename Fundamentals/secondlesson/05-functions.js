//Functions
// function declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// anonymous function expression
(function () {
  alert("hello");
}); // how does it work? it is a function that is called immediately after it is defined. It is also known as an IIFE (Immediately Invoked Function Expression).

// arrow function expression
const greet = (name) => {
  console.log(`Hello, ${name}!`);
}
// return basics