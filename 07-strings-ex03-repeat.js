/*
  Repeat

  Implement a function repeat that repeats an input string a given 
  number of times, as shown in the example below; without using the pre-defined 
  string method String.prototype.repeat().

  repeat(3, 'ha'); // 'hahaha'
*/

function repeat(num, str) {
  let result = '';
  while (num >= 1) {
    result += str;
    num -= 1;
  }
  return result;
}

console.log(repeat(3, 'ha')); // 'hahaha'


/*
  Solution:
  function repeat(n, string) {
    let repetitions = '';

    while (n > 0) {
      repetitions += string;
      n -= 1;
    }

    return repetitions;
  }
*/