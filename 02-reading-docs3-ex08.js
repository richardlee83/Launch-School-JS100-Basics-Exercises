/*
  Find out how we can join two or more strings together.
*/

/*
  Answer 1:
  - using String.prototype.concat()
  - from MDN:
    - The concat() method concatenates the string arguments to the calling string and 
      returns a new string.
    - The concat() function concatenates the string arguments to the calling string and r
      eturns a new string. 
    - Changes to the original string or the returned string don't affect the other.

  Examples:
  const str1 = 'Hello';
  const str2 = 'World';

  console.log(str1.concat(' ', str2));
  // expected output: "Hello World"

  console.log(str2.concat(', ', str1));
  // expected output: "World, Hello"

  Parameters
  - str2 [, ...strN]
    - Strings to concatenate to str.

  Return value
  - A new string containing the combined text of the strings provided.

  Answer 2:
  - we can also use the + operator to concatenate two separate strings
*/

// using String.prototype.concat()
let string1 = `what's`;
let string2 = 'up';
let string3 = string1.concat(' ', string2);
console.log(string3);                   // what's up


// using + operator
let string4 = string1 + ' ' + string2;
console.log(string4);                   // what's up
console.log(string3 === string4);       // true

/*
  Solution:
  - Both the String.prototype.concat() method and the + operator concatenate two or more strings,
    returning a new string.

  Discussion:
  - Take a close look at the Syntax section on concat()'s documentation page:

    str.concat(string2[, string3, ..., stringN])

  - Note that str is the calling string, and the method parameters are placed within parentheses. 
  - The brackets indicate optional arguments. 
  - So, this line of the documentation indicates that we can provide any number of string arguments, 
    but we must provide at least one.

  Here is an example:

  let firstName = 'Ada';
  let lastName = 'Lovelace';

  ''.concat(firstName, ' ', lastName);
  // 'Ada Lovelace'

  - Under the "Syntax" heading, we also see the return value specified as "a new string containing 
    the combined text of the strings provided." 
  - This portion of a method's documentation is extremely useful. 
  - It demonstrates the expected syntax and provides important information about the method parameters 
    and return value.

  - Also note that the documentation says:

      It is strongly recommended that the assignment operators (+, +=) are used instead of the
      concat() method.

  - So a second (and, in fact, preferred) way to concatenate strings, is using +, for example:

  let firstName = 'Ada';
  let lastName = 'Lovelace';

  firstName + ' ' + lastName;
  // 'Ada Lovelace'
*/