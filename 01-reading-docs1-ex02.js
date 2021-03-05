/*
  Find out whether JavaScript has a method to lowercase a string, for example 
  converting 'Aloha, World!' into 'aloha, world!.
*/

/*
  Answer:
  - we can use the instance method String.prototype.toLowerCase()
  - this method returns the calling string value converted to lower case
  - since strings are immutable data types in Javascript, the original string
    is not modified
*/

// example
let string = 'Aloha, World!';
string.toLowerCase();
console.log(string);            // Aloha, World!
string = string.toLowerCase();  // reassign the original string to a lowercase version
console.log(string);            // aloha, world!

/*
  Solution:
  - The method String.prototype.toLowerCase() converts a string into lowercase.

  'Aloha, World!'.toLowerCase(); // 'aloha, world!'

  Discussion:
  - You might notice that there is an additional method 
    String.prototype.toLocalLowerCase(), which is relevant for alphabets in 
    which the case mapping is not as straightforward as in English. 
  - But as long as we don't work with a language where this is the case, toLowerCase() 
    is the straightforward choice.
*/


