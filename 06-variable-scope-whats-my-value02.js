/*
  What's My Value? Part 2

  What will the following code log to the console and why? 

  Don't run it until you have tried to answer.
*/

console.log(greeting);

let greeting = 'Hello world!';

/*
  Answer:
  - the code will throw a ReferenceError
  - variables declared with let are not hoisted and therefore
    cannot be accessed before it is initialized
*/

/*
  Solution:
  ReferenceError: Cannot access 'greeting' before initialization


  Discussion:
  - In contrast to var variables, let variables are not accessible before 
    they are declared. 
  - For that reason the above code raises an error.
*/