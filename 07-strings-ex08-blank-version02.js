/*
  Blank? Version 2

  - Change your isBlank function from the previous exercise to return 
    true if the string is empty or only contains whitespace. 
    For example:

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
*/

function isBlank(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ' || str[i] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(isBlank('mars'));            // false
console.log(isBlank('  '));              // true
console.log(isBlank(''));                // true
console.log(isBlank('Hello World!'));    // false

/*
  Solution:
  function isBlank(string) {
    return string.trim().length === 0;
  }

  - The String.prototype.trim() method removes whitespaces from both 
    ends of a string. 
  - Once we removed those whitespaces, we can use the same strategy as 
    in the previous exercise.
*/