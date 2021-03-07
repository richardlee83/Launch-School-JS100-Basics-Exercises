/*
  How many arguments does the Array.prototype.join() method expect? 

  What happens if you call it with less or more arguments?
*/

/*
  From MDN Documentation:
  - The join() method creates and returns a new string by concatenating all of the elements 
    in an array (or an array-like object), separated by commas or a specified separator string. 
  - If the array has only one item, then that item will be returned without using the separator.

  Answer:
  - the Array.prototype.join() method expects one argument, a separator
    string, which is optional
  - if no separator argument is given, then the array elements are separated
    with a comma ","
  - if the separate is an empty string, all elements are joined with no characters
    in between them
  - if additional arguments are given, they are ignored
*/

let array = ['One', 'Two', 'Three', 'Four', 'Five'];

console.log(array.join('-'));          // One-Two-Three-Four-FIve
console.log(array.join(', '));         // One, Two, Three, Four, Five
console.log(array.join());             // One,Two,Three,Four,Five
console.log(array.join(''));           // OneTwoThreeFourFive 
console.log(array.join(', ', '! '));   // One, Two, Three, Four, Five

/*
  Solution:
  - The array method join() concatenates all elements of an array into a string. 
  - It expects a single, optional argument: a string that will be used as separator. 
  - If the argument is omitted, the separator defaults to ','. 
  - Any excess arguments passed to the method upon invocation are ignored.


  Discussion:
  For example:
  let array = ['Bob', 'Kevin', 'Stuart'];

  // separator argument omitted
  array.join();                  // 'Bob,Kevin,Stuart'

  // single separator argument
  array.join(', ');              // 'Bob, Kevin, Stuart'

  // excess argument passed in
  array.join(' and ', 'also');   // 'Bob and Kevin and Stuart'
*/
