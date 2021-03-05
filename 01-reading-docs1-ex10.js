/*
  In your JavaScript console, execute the following two lines of code to
  check whether their return values differ and if so, how. 

  Take a look at the MDN documentation on equality comparisons to read 
  about how == and === differ.

  '8' == 8;
  '8' === 8;
*/


// Answer:
// == loose/standard/abstract equality operator
// only checks for equality of values
// coerces one type to the other
console.log('8' == 8);    // true 

// === strict equality operator checks for equality of values and types
console.log('8' === 8);   // false


/*
  Solution:
  '8' == 8;  // true
  '8' === 8; // false


  Discussion:
  - ==, also known as the standard or abstract equality operator, 
    will attempt to convert its operands to the same type before making a 
    comparison.

  - ===, also known as the strict equality operator, does not perform any 
    type conversion on its operands. 
  - It will always return false if its operands are of different types. 
  - On the second line of our code example, we attempted to compare a 
    string to a number and therefore the return value was false.

  - We recommend that you always use the strict equality operator (===) 
    unless you have a specific reason not to. 
  - This will help to avoid unexpected behavior in your code. 
  - Later in the curriculum, you will learn more about JavaScript's 
    type conversions and the rules they follow.
*/