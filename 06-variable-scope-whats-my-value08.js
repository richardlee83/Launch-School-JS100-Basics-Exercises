/*
  What's My Value? Part 8

  What will the following code log to the console and why?

  Don't run it until you have tried to answer.
*/

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/*
  Answer:
  - the code will log th number 2 to the console
  - when we call myFunction() and pass in the value of the variable b, 
    we are passing that value as the parameter a within the myFunction() 
    definition
  - the value of a in the function definition shadows the value of a
    that was defined outside of the function
  - since the value of b is the number 2, the function will log this value
    to the console
*/

/*
  Solution:
  The code logs 2.


  Discussion:
  - This is another example of variable shadowing: The parameter a of 
    myFunction shadows the variable a declared on line 1. 
  - The a we reference within the function body, on line 4, therefore 
    refers to whatever argument is passed to the function, in our case the 
    value of b, which is then logged.
*/
