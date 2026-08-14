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