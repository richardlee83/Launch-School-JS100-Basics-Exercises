/*
  What's My Value? Part 9

  What will the following code log to the console and why? 
  
  Don't run it until you have tried to answer.
*/

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/*
  Answer:
  - TypeError: Assignment to a constant variable
  - the code will throw an error due to the fact that the constant
    variable a is not allowed to be reassigned to another value
*/

/*
  Solution:
  TypeError: Assignment to constant variable.


  Discussion:
  - Variables declared by const are block scoped, similar to variables 
    declared by let, but their value cannot be changed through re-assignment. 
  - So when we try to re-assign a to a new value on line 4, we get an error.

  - Note that passing a as an argument to myFunction on line 7 has no effect, 
    as the function does not declare any parameters. 
  - It is an excess argument that is simply ignored in the function body.
*/

