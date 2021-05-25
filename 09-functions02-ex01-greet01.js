// Launch School - JS100 - Javascript Basics Exercises

// Greet 1
//  How can we alter the function definition of greet so that the parameter greeting is 
//  assigned a default value of 'Hello' when no argument is passed to the function 
//  invocation?
//
//    function greet(greeting) {
//      console.log(greeting + ', world!');
//    }
//
//    greet('Salutations'); // logs: Salutations, world!
//  
//    greet();              // logs: undefined, world!
//                          // should log: Hello, world!


// Answer
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations');     // logs:  Salutations, world!
greet();                  // logs:  Hello, world!


// Solution
//
//  function greet(greeting = 'Hello') {
//    console.log(greeting + ', world!');
//  }


// Discussion
//  Default parameters are a great way to assign a default value to a parameter. 
//  This default value is used in case the parameter is undefined, which is the case if 
//  greet is called without an argument.


// Further Exploration
//  What happens when we call greet(undefined)?


// Answer
greet(undefined);         // logs:  Hello, world! 


// Discussion
//  - undefined is the absence of a value; since we are not passing anything into the function when
//    we call greet, the function returns the default paramater value 


