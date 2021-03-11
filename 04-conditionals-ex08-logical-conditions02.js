/*
  Logical Conditions 2

  Predict the output of the following code:

  if (true && false) {
    console.log('Yes!');
  } else {
    console.log('No...');
  }
*/

/*
  Answer:
  - the code will output 'No...' to the console
  - the conditon in the if statement uses the logical and operator &&
  - the && operator must have both operands evaluate to true for
    the entire statement to evaluate to true
  - since false is one of the operands, the statement evaluates to false
  - the code block in the if statement therefore doesn't run
  - the else statement runs instead runs instead
  - therefore the string 'No...' is logged to the console
*/

/*
  Solution:
  - The output will always be 'No...'.


  Discussion:
  - The condition provided to our if statement uses the logical and operator 
    &&. 
  - Therefore the condition will return a truthy value only if both of its 
    operands are truthy. 
  - Since false is not truthy, neither will be our condition.
*/



