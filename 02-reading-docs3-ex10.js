/*
  Run the following code.

    let tweet = 'Woohoo! :-)';

    if (tweet.length() > 140) {
      console.log('Tweet is too long!');
    }

  You'll see that it raises an error:

    TypeError: tweet.length is not a function

  Check the documentation of both TypeError and length, in order to find out 
  what causes the error.
*/

/*
  From MDN Docs:
  - TypeError:
    - The TypeError object represents an error when an operation could not be performed, 
      typically (but not exclusively) when a value is not of the expected type.
  - A TypeError may be thrown when:
    - an operand or argument passed to a function is incompatible with the type expected by 
      that operator or function; or
    - when attempting to modify a value that cannot be changed; or
    - when attempting to use a value in an inappropriate way.

  From MDN Docs:
  - String length:
    - The length property of a String object contains the length of the string, in UTF-16 code units. 
    - length is a read-only data property of string instances.

  - from the MDN documentation we can see that length is a property of a String, not a function
  - in our if statement, tweet.length() is calling the function length on the variable tweet (which
    is a string)
  - however, since length is not a string function, Javascript throws a TypeError: tweet.length is not 
    a function
  - when we call properties on data types, we can do so without the parentheses after the property
  - i.e. we can call the length property on the string tweet above as tweet.length and the code should
    behave was we intended
*/

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
} else {
  console.log('Tweet is just right!');
}
// 'Tweet is just right!'

/*
  Solution
  - The syntax section of the MDN page on length demonstrates that length is called without parentheses. 
  - This is because it is a string property, not a string method.

  - Why does our code raise a TypeError? 
  - According to the documentation of length, it returns a number. 
  - So tweet.length is expected to be a number. Instead, we try to invoke it as a function when we write 
    tweet.length(). 
  - So when the JavaScript engine encounters tweet.length(), there is a type mismatch: tweet.length is 
    expected to be a number, but we use it as a function.

  Discussion
  - You might also recall length from the Property vs Method exercise. 
  - We will talk about properties and methods in more detail in a later course.
*/




