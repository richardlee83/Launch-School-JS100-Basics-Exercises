// Launch School - JS 100 - Javascript Basics - Objects

// ...and vice versa
//  Write code that does the reverse, starting from a nested array of pairs and 
//  building an object.
//
//    let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
//    
//    // Expected output:
//    // { title: 'Duke', name: 'Nukem', age: 33 }

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];


// Answer:
let newObject = {};
for (let i = 0; i < nestedArray.length; i += 1) {
  newObject[nestedArray[i][0]] = nestedArray[i][1];
}
console.log(newObject);   // logs: { title: 'Duke', name: 'Nuken', age: 33 } 


// Solution:
//
//  let person = {};
//  
//  for (let i = 0; i < nestedArray.length; i++) {
//    let pair = nestedArray[i];
//  
//    person[pair[0]] = pair[1];
//  }
//  
//  console.log(person);
//  // { title: 'Duke', name: 'Nukem', age: 33 }
//
//
// Discussion:
//  Our solution simply iterates over the array and adds each two-element array to the object, 
//  using the first element as property name and the second element as value.


