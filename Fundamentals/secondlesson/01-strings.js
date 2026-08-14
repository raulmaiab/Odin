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