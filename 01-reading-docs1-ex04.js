/*
  Locate the documentation for the Array built-in object on MDN.

  How can we access the element 'and' in the array ['fish', 'and', 'chips']?
*/

/*
  Answer:
  - we can access the elements of an array using its index position
  - arrays in Javascript are zero based indexed
  - 'and' is the second element in the array, therefore it is at index 1
  - in this example, to access the element 'and', we use bracket notation
    with the index number 1 to access the element in the array
*/

console.log(['fish', 'and', 'chips'][1]);   // and

/*
  Solution:
  ['fish', 'and', 'chips'][1];

  or

  let dinner = ['fish', 'and', 'chips'];
  dinner[1];


  Discussion:
  - We can use bracket notation to access the array element at a particular index.
  - In JavaScript, arrays have a zero-based index. 
  - This means that the first element in the array will have an index of 0, 
    the second element will have an index of 1, and so on.
*/

