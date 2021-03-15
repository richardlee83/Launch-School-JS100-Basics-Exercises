/*
  What's My Value? Part 1

  What will the following code log to the console and why? 

  Don't run it until you have tried to answer.
*/

console.log(greeting);

var greeting = 'Hello world!';

/*
  Answer:
  - the code will log undefined to the console
  - variables declared with the keyword var are hoisted, which means they
    are virtually moved to the beginning of the scope
  - when we call the variable greeting before it is assigned a value, the
    variable is initialized with the value of undefined
*/

/*
  Solution:
  - The code logs undefined.


  Discussion:
  - All variables in JavaScript declared with var are hoisted, meaning they 
    are virtually moved to the beginning of the scope. 
  - This means that our code snippet above behaves like the following one:

    var greeting;

    console.log(greeting);

    greeting = 'Hello world!'

  - When a var variable is declared but not assigned a value, like on line 1, 
    it is initialized to the value undefined. 
  - For that reason, the code logs undefined to the console.
*/
