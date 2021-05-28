// Launch School - JS 100 - Javascript Basics - Objects

// Car Keys
//
//  Write code that stores all of the vehicle property names in an array called keys.
//
//  let vehicle = {
//    manufacturer: 'Tesla',
//    model: 'Model X',
//    year: 2015,
//    range: 295,
//    seats: 7
//  };


// Answer:
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
// using Object.keys() method
let keys = Object.keys(vehicle);
console.log(keys);    // logs: [ 'manufacturer', 'model', 'year', 'range', 'seats' ]

// using for loop
let keys2 = [];
for (let property in vehicle) {
  keys2.push(property);
}
console.log(keys2);   // logs: [ 'manufacturer, 'model', 'year', 'range', 'seats' ]


// Solution:
//
//  let keys = Object.keys(vehicle);
//  
//  console.log(keys);
//  // ['manufacturer', 'model', 'year', 'range', 'seats']//
//
//
// Discussion:
//
//  Our solution leverages the Object.keys() method, which returns an array of a given 
//  object's own properties. 
//  You can achieve the same by means of a for...in loop, pushing each object key into an array:
//
//    let keys = [];
//  
//    for (let property in vehicle) {
//      keys.push(property);
//    }

