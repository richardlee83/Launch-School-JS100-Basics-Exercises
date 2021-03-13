/*
  Write a function that accepts a single argument, a number, 
  and returns the result of multiplying its argument by an exponent 
  of 2 (also known as squaring the number).
*/

function squared(num) {
  return num ** 2;
}

console.log(squared(2));    // 4
console.log(squared(3));    // 9
console.log(squared(4));    // 16
console.log(squared(5));    // 25

/*
  Solution:

  function squaredNumber(num) {
    return num ** 2;
  }

  Discussion:
  - Our solution uses the exponentiation operator (**) to multiply 
    our parameter num by the power of 2. 
  - Because squaring a number is the equivalent of multiplying the 
    number by itself, the below solution would also be valid:

    function squaredNumber(num) {
      return num * num;
    }

  - Note that in order to return the squared number from our function 
    we must use an explicit return statement. 
  - Otherwise, the return value of our function squaredNumber would 
    be undefined.
*/





