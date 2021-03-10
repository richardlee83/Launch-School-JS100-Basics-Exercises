/*
  Do...While

  What is the difference between the following two code snippets? 

  Check the MDN documentation on while and do...while.

  Snippet 1:
  let counter = 0;

  while (counter > 0) {
    console.log('Woooot!');
    counter -= 1;
  }

  Snippet 2:
  let counter = 0;

  do {
    console.log('Woooot!');
    counter -= 1;
  } while (counter > 0);
*/

/*
  Answer:
  From MDN Documentation:
  - while loop
    - The while statement creates a loop that executes a specified statement as 
      long as the test condition evaluates to true. 
    - The condition is evaluated before executing the statement.
  - do...while loop
    - The do...while statement creates a loop that executes a specified statement 
      until the test condition evaluates to false. 
    - The condition is evaluated after executing the statement, resulting in the 
      specified statement executing at least once.

  - from the description of the while and do...while loop from MDN documentation, 
    we can see that the test condition for while loops is evaluated before executing
    the code block, whereas the test condition for do...while loops is evaluated
    after the code block is run at least once
  - for the above example, the code block in Snippet 1 will not run since the test 
    condition, counter > 0, is false
  - for Snippet 2, the test condition is also false, however since the condition
    is evaluated after the code block, the code within the block is executed
    at least once and will output 'Woooot!' to the console
*/


/*
  Solution:
  - Both statements execute the given block as long as the condition evaluates to true. 
  - The difference is that the condition in a while statement is checked before 
    executing the block, while the condition in a do...while statement is checked after
    the block has been executed. 
  - So the block in a do...while statement will always be executed at least once, even 
    if the condition is not satisfied.
  - Therefore the second code snippet logs 'Woooot!' once, while the first code snippet 
    does not log anything.
*/