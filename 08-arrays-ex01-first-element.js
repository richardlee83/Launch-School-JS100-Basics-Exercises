/*
  First Element

  Write a function that returns the first element of an input array. 

  For example:

  first(['Earth', 'Moon', 'Mars']); // 'Earth'

  What would you return if the input array was empty?

*/

function first(arr) {
  return arr[0];
}

console.log(first(['Earth', 'Moon', 'Mars']));   // 'Earth'
console.log(first([]));   // undefined

/*
  Solution:
  function first(array) {
    return array[0];
  }

  - With this implementation, first returns undefined if the input array is empty.
  - It is the same behavior you get for trying to access an index that is outside 
    the bounds of the array.


  Discussion:
  - The first element of an array is at index position 0, and we access it using 
    bracket notation.
*/

