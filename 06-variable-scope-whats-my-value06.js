/*
  What's My Value? Part 6

  What will the following code log to the console and why? 

  Don't run it until you have tried to answer.
*/ 

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/*
  Answer:
  - the code outputs false to the console
  - the value of b that is passed into console.log is the one that is declared
    with a value of false in the global scope
  - the value of b in the if statement that is assigned true is only accessible
    within that code block and is discarded when the code block ends
*/

/*
  Solution:
  - The code logs false.


  Discussion:
  - The situation is similar to that of the previous exercise: 
    The variable b declared on line 2 and the variable b declared on line 5 in 
    the body of the if statement have the same name, but they are two different 
    variables.
  - Important to note is that the b that we reference on line 8 refers to the 
    variable declared on line 2. 
  - This is because the scope of b declared on line 5 is the body of the if
    statement, and it is not accessible in any outer scope.
*/