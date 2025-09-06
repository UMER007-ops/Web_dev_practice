// data stored in a variable is either primitive type or reference type

//      PRIMITIVE TYPE
// let name = {primitive type}
    // simple atomic values        
    // stored as value to a variable

// There are six primitive types in javascript
    // undefined
    // null
    // boolean
    // number
    // string
    // symbol


//      REFERENCE TYPE
// let person = {reference type}
    // stored as reference in memory
    // consist of multiple properties

// There are three reference types in javascript
    // objects
    // arrays
    // functions


//      MUTABILITY
// something that can be changed or a new property be added to. 

let person = {
    name: "umer",
    age: 23
}
let person2 = person
console.log(person2)

person2.name= "Abdullah"

console.log(person); // the name is changed in person also
console.log(person2);  

// For the above reason the spread operator was introduced to safely create a new instance of a reference type so that the original is not changed in any case

let person3 = {...person}
person3.name = "Ahsan"

console.log(person);  // this time person.name is not changed to ahsan

console.log(person3);


//      IMMUTABILITY
// something that cannot be changed or added to. Primitive types are immutable. They can only be reassigned

let name = "umer"
let name1 = name;

console.log(name1)

name1 = "Abdullah"
console.log(name1);







