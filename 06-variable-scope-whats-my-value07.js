/*
  What's My Value? Part 7

  What will the following code log to the console and why? 

  Don't run it until you have tried to answer.
*/

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

/*
  Answer:
  - the code will log the number 1 to the console
  - the variable a is declared and assigned a value of the number 1
    with the let keyword
  - this variable is accessible within the body of the function definition
    since the variable was declared at the top level of the code and is
    accessible within the inner scope of the function definition
  - when we call myFunction(), the function logs the value of variable a
    (the number 1) to the console
*/

/*
  Solution:
  The code logs 1.


  Discussion:
  - The variable a declared in the let statement on line 1 is declared at 
    the very top level of our code, so it is accessible from everywhere 
    in the code, including from within the body of myFunction.
*/



