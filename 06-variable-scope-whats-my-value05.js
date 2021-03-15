/*
  What's My Value? Part 5

  What will the following code log to the console and why?

  Don't run it until you have tried to answer.
*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/*
  Answer:
  - the code will throw a ReferenceError
  - the variable a declared in the if statement code block shadows
    the value of the variable a declared outside of the code block
    but within the function definition
  - within the code block of the if statement, a has a value of 2
  - however, when we call console.log on the variable a in this code block
    before we delcare it with the keyword let, a ReferenceError is thrown
    since a has not been initialized yet with a value, not even undefined
    (as is the case with variables declared with var)
*/

/*
  Solution:
  ReferenceError: Cannot access 'a' before initialization


  Discussion:
  - Your initial hunch might have been that this code should output 
    the numbers 1 (on line 5) and 2 (on line 7). 
  - The reason that doesn't happen is that variables declared by let aren't 
    available until the code runs. 
  - Therefore, the let statement on line 6 creates a new variable a that 
    isn't available on line 5. 
  - Since we try to log a before assigning it a value, a ReferenceError is raised.

  - Technically, the scope of a is the entire block. 
  - JavaScript does hoist the variables defined by let, but, when it does, 
    it creates a "temporal dead zone" in which the variable exists but doesn't 
    have a value -- not even a value of undefined. 
  - We talk more about the temporal dead zone in a later course.

  - Note that the variable a defined on line 6 shadows the variable a defined 
    on line 2.
*/