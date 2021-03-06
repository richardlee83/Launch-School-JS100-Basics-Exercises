/*
  Using the documentation, determine how we can find the largest numeric 
  value that can be represented in JavaScript. 

  Write a line of code that returns this value.
*/

// Answer:
let largestNumericValue = Number.MAX_VALUE;
console.log(largestNumericValue);           // 1.7976931348623157e+308

/*
  Solution:
  Number.MAX_VALUE; // 1.7976931348623157e+308


  Discussion:
  - MAX_VALUE is a property of Number. 
  - Any value larger than MAX_VALUE should be processed as Infinity.

  - The value 1.79...e+308 uses exponential notation and can be read as 1.79... * 10^308 
    (1.79... times 10 to the power of 308), which is short-hand for a really large number.

  - In ES6, another value was introduced: MAX_SAFE_INTEGER. 
  - It has a value of 9007199254740991 and is the largest number that can be processed and 
    compared with precision.

  - However, it is unlikely you will need those values soon.
*/
