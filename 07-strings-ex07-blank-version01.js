/*
  Blank? Version 1

  Write a function that checks whether a string is empty or not. 
  For example:

  isBlank('mars'); // false
  isBlank('  ');   // false
  isBlank('');     // true
*/

function isBlank(str) {
  return str.length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

/*
  Solution:
  function isBlank(string) {
    return string.length === 0;
  }


  Discussion:
  - A string is empty if it does not contain any characters.
  - The easiest way to check this is to look at the length of the string.
*/