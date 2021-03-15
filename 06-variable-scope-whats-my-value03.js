/*
  What's My Value? Part 3

  What will the following code log to the console and why? 

  Don't run it until you have tried to answer.
*/

if (true) {
  let myValue = 20;
}

console.log(myValue);

/*
  Answer:
  - the code will throw a ReferenceError: myValue is not defined
  - variables declared by keyword let are block scoped
  - these variables are only accessible within the code block that they
    are declared in
  - in this case, the variable myValue is not accessible outside of the code
    block of the if statement
  - therefore when we try calling the value of myValue outside of this codeblock
    we get a ReferenceError
*/


/*
  Solution:
  ReferenceError: myValue is not defined


  Discussion:
   - Variables declared with let are block scoped. 
  - This means that when we declare the variable myValue within a block on 
    line 2, that variable is not accessible outside of the block on line 5, 
    and a ReferenceError is raised.
*/