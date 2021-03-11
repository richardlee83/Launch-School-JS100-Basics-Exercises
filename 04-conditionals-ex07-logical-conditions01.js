/*
  Logical Conditions 1

  Predict the output of the following code:

  if (false || true) {
    console.log('Yes!');
  } else {
    console.log('No...');
  }
*/

/*
  Answer:
  - the code will log 'Yes!' to the console
  - the condition in the if statement uses an or comparator
  - for such a comparator, only one of the operands have evaluate to
    true for the entire statement to evaluate true
  - since true is one of the operands, the statement evaluates
    to true and the code block in the if statement runs
  - therefore the string 'Yes!' is logged to the console
*/


/*
  Solution:
  - The output will always be 'Yes!'.


  Discussion:
  - The condition provided to our if statement uses the logical or operator 
    ||. 
  - Therefore the condition will evaluate to a truthy value if either one 
    of its operands is truthy. 
  - Since true is truthy, the condition will always be truthy as well.
*/

