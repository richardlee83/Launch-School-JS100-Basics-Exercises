/*
  What's My Value? Part 4

  What will the following code log to the console and why? 

  Don't run it until you have tried to answer.
*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

/*
  Answer:
  - the code will log 1 to the console
  - variables declared in an outer scope can be accessed by any inner scope
  - in this case, the code block of the if statement has access to 
    the variable a since they both are scoped within the same function definition
  - since true will always evaluate to true, the if statement will run
    the code block console.log(a) and therefore log the value of 1 to
    the console
*/

/*
  Solution:
  - The code logs 1.


  Discussion:
  - Variables declared in an outer scope can be accessed in any inner scope. 
  - In our case, the variable a is declared in the function definition and then 
    accessed in the body of the if statement. 
  - For that reason, line 4 logs the value 1 when myFunction is invoked.
*/