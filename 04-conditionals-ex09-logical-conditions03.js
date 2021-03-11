/*
  Logical Conditions 3

  Without running the below code, determine what will be logged to the 
  console.

  let sale = true;
  let admissionPrice = !sale ? 5.25 : 3.99;

  console.log('$' + admissionPrice);
*/

/*
  Answer:
  - the code will log the string $3.99 to the console
  - console.log is called on the string '$' concatenated with the
    Number admissionPrice
  - admissionPrice is equal to the evaluated value of the ternary statement
    that uses the truthy value of !sale as the test condition
  - since sale is assigned the value true, !sale will therefore be false
  - the statement therefore evaluates and returns the second operand, the 
    value after the colon : which is 3.99
  - Javascript coerces the Number 3.99 in this case with the string '$'
    to perform concatenation and produce the string '$3.99'
  - the string '$3.99' is therefore logged to the console
*/

/*
  Solution:
  $3.99

  Discussion:
  - On line 2 of our code, admissionPrice is assigned to the value of the 
    ternary if-then-else statement. 
  - Note that sale was assigned to true on line 1, and the condition in the 
    ternary statement prepends this with the logical not operator !. 
  - The logical not operator returns false when its operand (in our case sale)
    is truthy. 
  - The condition that is checked is therefore false, and thus admissionPrice 
    assigned to the value of the second operand (3.99) of our ternary 
    statement.
*/



