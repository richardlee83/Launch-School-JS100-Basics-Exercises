// Launch School - JS 100 - Javascript Basics - Objects

// Convert An Object To A Nested Array
//
//  Convert the person object into a nested array nestedPerson, containing the same key-value pairs.
//
//    let person = {
//      title: 'Duke',
//      name: 'Nukem',
//      age: 33
//    };
//    
//    // Expected output:
//    // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]


// Answer:
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};
// using Object.entries() method
let nestedPerson = Object.entries(person);
console.log(nestedPerson);

// using for loop
nestedPerson = [];
for (let property in person) {
  nestedPerson.push([property, person[property]]);
}
console.log(nestedPerson);


// Solution:
//
//  let nestedPerson = Object.entries(person);
//  
//  console.log(nestedPerson);
//  // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
//
//
// Discussion:
//
//  Our solution leverages the Object.entries() method, which returns an array of a given's 
//  object key/value pairs. 
//
//  You can achieve the same using a for...in loop:
//
//    let nestedPerson = [];
//    
//    for (let property in person) {
//      nestedPerson.push([property, person[property]]);
//    }


