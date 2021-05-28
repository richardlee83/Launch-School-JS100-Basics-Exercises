// Launch School - JS 100 - Javascript Basics - Objects

// Is It True?
//
//  We are experimenting with some code to get more comfortable working with objects. 
//  Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// Answer:
//
//  - the if statement in the for loop is checking if any property is equal
//    to the boolean true
//  - none of the properties in the object equal to the boolean true since all object
//    properties in Javascript are of type string
//  - therefore the code block in the if statemtn is never run and "It's true" is never
//    logged to the consoel


// Solution:
//
//  The condition of our if statement on line 11 returns false for all properties, 
//  because property names are always strings, while the body of our for loop looks 
//  for the Boolean value true. 
//
//
// Discussion:
//
//  Object property names are always strings. 
//  When we omit quotes around our property names, JavaScript implicitly converts the 
//  name to a string. 
//  So true is not a property defined on obj, but 'true' is. 
//  You can check this for example as follows:
//
//    for (let prop in obj) {
//      console.log(`${prop} (${typeof prop})`);
//    }
//    
//    // logs:
//    // num (string)
//    // property name (string)
//    // true (string)
//    // fun (string)
//
//  In order for our code to log "It's true!", we need to compare obj's properties to 'true':
//
//    for (let prop in obj) {
//      if (prop === 'true') {
//        console.log("It's true!");
//      }
//    }


