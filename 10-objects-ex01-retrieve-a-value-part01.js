// Launch School - JS100 - Javascript Basics - Objects

// Retrieve A Value Part 1
//  Write the code necessary to retrieve the value of the courses property of our student object.
//
//    let student = {
//      name: 'Carmen',
//      age: 14,
//      grade: 10,
//      courses: ['biology', 'algebra', 'composition', 'ceramics'],
//      gpa: 3.75,
//    };


// Answer:
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

// dot notation
let value01 = student.courses;
console.log(value01);               // logs: [ 'biology', 'algebra', 'composition', 'ceramics' ]

// bracket notation
let value02 = student['courses'];
console.log(value02);               // logs: [ 'biology', 'algebra', 'composition', 'ceramics' ]


// Solution:
//  Using dot notation:
//
//    student.courses; // ["biology", "algebra", "composition", "ceramics"]
//
//
//  Using bracket notation:
//
//    student['courses']; // ["biology", "algebra", "composition", "ceramics"]
//
// Discussion:
//  We can access the property value using either dot notation or bracket notation. 
//  JavaScript style guides typically recommend using dot notation when possible.


// Further Exploration:
//  What is returned if you attempt to access an object property that does not exist? 
//  Try it out for yourself, for example calling student.locker with the above example object. 
//  Especially notice that no exception is raised.
let value03 = student.locker;
console.log(value03);               // logs: undefined





