//String 
const string = "The revolution will not be televised.";
console.log(string);

// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//Concatenation
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

//Concatenation application
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

// if button is clicked, run greet function
button.addEventListener("click", greet);

// Another form with '+'
const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); // "Hello, Bob"

// As multiple lines are respected in the output as it is in the code
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline); // outputs:
// One day you finally knew
// what you had to do, and began,

//Quotes inside strings
const quote = "He said, 'Hello there!'";
//or
const quote3 = `He said, "Hello there!"`;
//or with bar
const quote4 = "He said, \"Hello there!\"";

//Number + String?
//It uses the number as a string and concatenates it with the other string
// Number() Function 
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// String() Function
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);

//String Methods
const browserType = "Mozilla";
console.log(browserType.length); // 7
console.log(browserType[0]); // "M"
console.log(browserType[browserType.length - 1]); // "a"

// finding if a string contains a substring
if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//find if starts or ends with a substring
if (browserType.startsWith("Mo")) {
  console.log("Starts with Mo!");
} else {
  console.log("Does not start with Mo!");
}
if (browserType.endsWith("zilla")) {
  console.log("Ends with zilla!");
} else {
  console.log("Does not end with zilla!");
}

//finding the index position of a substring with characters including whitespace
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
console.log(tagline.indexOf("x")); // -1

//more than one occurrence of a substring
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

//Extracting a substring
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
// if you omit the second parameter, slice() extracts to the end of the string
browserType.slice(2); // "zilla"

// Case conversion
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());// "my name is mud"
console.log(radData.toUpperCase()); //"MY NAME IS MUD"

// Updating a string
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"

// if you want to update the original string
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"

// If you want to change all occurrences
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"

//Arrays
//Creating an array
const myArray = ["one", "two", "three"];
console.log(myArray); // ["one", "two", "three"]

//Types in an array
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]]; // Any type of data can be stored in the same array

// Methods 
console.log(myArray.length); // 3
console.log(myArray[0]); // "one"
// Modifying an array
myArray[1] = "new value";   
console.log(myArray); // ["one", "new value", "three"]
// Multidimensional arrays
random[2][2] = 3;
console.log(random); // ["tree", 795, [0, 1, 3]]
//indexOf() method
console.log(myArray.indexOf("three")); // 2
console.log(myArray.indexOf("four")); // -1
// adding elements to an array
myArray.push("four"); // adds to the end
console.log(myArray); // ["one", "new value", "three", "four"]
myArray.push("five", "six"); // adds multiple elements to the end
console.log(myArray); // ["one", "new value", "three", "four", "five", "six"]
const newLength = myArray.push("seven"); // adds to the beginning
console.log(myArray); // ["one", "new value", "three", "four", "five", "six", "seven"]
console.log(newLength); // 7 //why? because the push() method returns the new length of the array after adding the new element(s)

myArray.unshift("zero"); // adds to the beginning
console.log(myArray); // ["zero", "one", "new value", "three", "four", "five", "six", "seven"]
//removing elements from an array
myArray.pop(); // removes from the end
console.log(myArray); // ["zero", "one", "new value", "three", "four", "five", "six"]
removeElement = myArray.pop(); // removes from the end and returns the removed element
console.log(removeElement); // "six"
myArray.shift(); // removes from the beginning
console.log(myArray); // ["one", "new value", "three", "four", "five"]

//splice() method
const index = myArray.indexOf("new value");
if (index !== -1) {
    myArray.splice(index, 1); // removes 1 element at index
}
console.log(myArray); // ["one", "three", "four", "five"]
//removing multiple elements
const index2 = myArray.indexOf("three");
if (index2 !== -1) {
    myArray.splice(index2, 2); // removes 2 elements at index2
}
console.log(myArray); // ["one", "five"]

//Acessing array elements
for (const element of myArray) {
    console.log(element); // "one" "five"
}

//Using map for array transformation
function double(num) {
    return num * 2;
}
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(double);
console.log(doubled); // [2, 4, 6, 8, 10]

//Using filter for array filtering
function isEven(num) {
    return num % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // [2, 4]

//Converting an array to a string
const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "apple, banana, cherry"
// Opposite of join() is split()
const fruitsArray = fruitsString.split(", ");
console.log(fruitsArray); // ["apple", "banana", "cherry"]
//toString() method
const fruitsString2 = fruits.toString();
console.log(fruitsString2); // "apple,banana,cherry"
/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */
//Conditionals
// if else basics
// comparison operators
// === and !== with three signs.
// AND = sould be && as OR = should be ||
// switch case valid with break and with default case
// Ternary operator
condition ? expressionIfTrue : expressionIfFalse
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
// if false, output: "Good morning Mrs. Smith."
// if true, output: "Happy birthday Mrs. Smith — we hope you have a great day!"
/*----------------------------------------------------------------------------------------------------------------------*/ 

//Loops
//for basic
// for of in array
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat); // "Leopard" "Serval" "Jaguar" "Tiger" "Caracal" "Lion"
}
// basic break and continue
// basic while and do while
// difference between while and do while is that do while will run at least once even if the condition is false
/*----------------------------------------------------------------------------------------------------------------------*/ 
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

// Events 
// Methods for adding and removing event listeners
button.addEventListener("click", greet);
button.removeEventListener("dblclick", greet);
button.releasePointerCapture("mouseout", greet);
button.onclick = () => {
    console.log("Button clicked!");
}; // You can add a function to an event listener using the onclick property of the button element. This is a simpler way to add an event listener, but it can only be used for one event at a time. If you want to add multiple event listeners to the same element, you should use addEventListener() instead.

// Event object
button.addEventListener("click", (event) => {
  console.log(event);
}); // Quickly explaining, the event object contains event details and properties for handling events in JavaScript.

// Event bubbling and capturing
const parent = document.querySelector("#parent");
const child = document.querySelector("#child"); 
// Assuming you have a parent element with an id of "parent" and a child element with an id of "child" in your HTML, you can add event listeners to both elements to demonstrate event bubbling and capturing.
parent.addEventListener("click", (event) => {
  console.log("Parent clicked!");
}, true); // why bubbling? because the third parameter is set to true, which means the event will be captured during the capturing phase. If it were set to false or omitted, it would default to bubbling phase.

// capture is parent to child, bubbling is child to parent. The event will first be captured by the parent element and then bubble up to the child element. If you click on the child element, the event will first be captured by the parent element and then bubble up to the child element. If you click on the parent element, the event will first be captured by the parent element and then bubble up to the child element.

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/ 

//Objects

const person = {};
// [object Object]
// Object {}
// { }
// those above are all the same, they are all empty objects. The first one is the default string representation of an object, the second one is the literal notation of an object, and the third one is the shorthand notation of an object.

// Filling an object with properties and values
const person = {
  firstName: "John",
  age: 30,
  bio: function() {
    console.log(`${this.firstName} is ${this.age} years old.`);
  },
  introduceSelf: function() {
    console.log(`Hi, my name is ${this.firstName}.`);
  },
};

// Accessing object properties
person.firstName; // "John"
person["age"]; // 30    
person.bio(); // "John is 30 years old."
person.age; // 30

//Updating object properties
person.age = 31;
person["firstName"] = "Jane";

// Objects as objects properties
const person = {
  Name: ["John", "Doe"],
}
const person = {
    name: {
        first: "John",
        last: "Doe"
    }
}

person.name.first; // "John"
name[1]; // "Doe"
name.first; // "John"

// Setting Object Properties
person.age = 45;
person["name"]["first"] = "Justin"
person["eyes"] = "hazel"
person.farewell = function () {
    console.log("bye");
}

person.farewell; // bye

// const myDataName = nameInput.value;
// const myDataValue = valueInput.value;

const myDataName = "height";
const myDataValue = "1.75";

person[myDataName] = myDataValue;
person.height; // 1.75

// THIS

const person1 = {
    name: "Chris",
    introduceSelf() {
        console.log(`Hi, I'm ${this.name}.`);
    },
};

const person2 = {
    name: "Deepti",
    introduceSelf(){
        console.log(`Hi, I'm ${this.name}.`); 
    },
};

person1.introduceSelf(); //Hi, I'm Chris
person2.introduceSelf(); //Hi, I'm Deepti

// CONSTRUCTORS

function createPerson(name){
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi, I'm ${this.name}.`);
    };
    return obj;
}

// with this createPerson is possible to create the same structure for n objects with just a call.
const salva = createPerson("Salva");
salva.introduceSelf(); //Hi I'm Salva

const frank = createPerson("Frank")
frank.introduceSelf(); //Hi I'm Frank

// Calling a constructor
function Person(name){
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi, I'm ${this.name}.`);
    };
}

const salva = new Person("Salva");
salva.introduceSelf(); //Hi I'm Salva
// using this instead of obj.

// DOM (JS with HTML elements) - ./secondlesson.html

//

//Assignment

