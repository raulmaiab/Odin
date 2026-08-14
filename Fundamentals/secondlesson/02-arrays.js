
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