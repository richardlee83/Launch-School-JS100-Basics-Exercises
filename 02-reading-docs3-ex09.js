/*
  The below code raises a SyntaxError. If you run the code, you'll see 
  the following error message:

    SyntaxError: Unexpected token &&

  Find and read the documentation about this error on MDN. Then, fix the code.

  let speedLimit = 60;
  let currentSpeed = 80;

  if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
    console.log('"People are so bad at driving cars ' +
      'that computers don\'t have to be that good to be much better." ' +
      '-- Marc Andreessen');
  }
*/

/*
  Answer:
  From MDN Documentation:
  - The SyntaxError object represents an error when trying to interpret syntactically 
    invalid code. 
  - It is thrown when the JavaScript engine encounters tokens or token order that does 
    not conform to the syntax of the language when parsing code.

  - for the above code, a SyntaxError is raised because we are missing a pair of
    brackets encompassing the conditions of (currentSPeed > speedLimit) and
    ((currentSpeed - speedLimit) > 5)
  - when Javascript sees the closing bracket on the first condition, it does not
    expect to see a comparison operator such as && and therefore throws a SyntaxError
  - to fix the code we can add a pair of brackets to encompass the two test conditions
    defined in the if statement
*/
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

/*
  Solution
  - This page (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token)   
    provides information about the exact error that our code raised. 
  - The error message indicates that "a specific language construct was expected, but something
    else was provided". 
  - It even hints at typical causes, like leaving out brackets around if statements, which is 
    what happened in our code.


  Discussion:
  - The MDN reference on JavaScript errors lists many errors that you will run into as you write more code. 
  - If you're unsure why you're seeing a particular error, pause and check out the documentation.
*/