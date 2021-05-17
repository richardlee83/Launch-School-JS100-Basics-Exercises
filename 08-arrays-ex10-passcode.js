/* Passcode */

/*
  Problem:
  We generated parts of a passcode and now want to combine them into a string. 
  Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

    let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

    // Write some code here.
    // Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
*/

/* Answer */
// Answer 1: use array method join
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let str1 = passcode.join('-');
console.log(str1);   // 11-jZ5-hQ3f*-8!7g3-p3Fs

// Answer 2: iterate through list and build string
let str2 = '';
for (let i = 0; i < passcode.length; i += 1) { 
  if (i === 0) {
    str2 = passcode[i];
  } else {
    str2 = str2 + '-' + passcode[i];
  }
}
console.log(str2);

/*
  Solution:

    passcode.join('-'); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

  The Array.prototype.join() method easily allows us to join all elements of an array into a new string, 
  with a custom separator.


  Your solution might also build the target string step by step, iterating over the passcode list like this:

    let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
    let joinedPasscode = '';

    for (let i = 0; i < passcode.length; i += 1) {
      if (i > 0) {
        joinedPasscode += '-';
      }

      joinedPasscode += passcode[i];
    }

    console.log(joinedPasscode); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

  The main difference between both solutions is that Array.prototype.join() provides a higher level of abstraction: 
  it hides the iteration and string building behind a simple method call. 
  This makes it easier to see at one glance what the solution code does with passcode.
*/

/*
  Further Exploration:
  If no separator argument is passed to join, the default separator is a comma:

    passcode.join(); // '11,jZ5,hQ3f*,8!7g3,p3Fs'

  How can you join all elements of an array with no separator character?

  Pass an empty string argument as separator, for example:

    passcode.join(''); // '11jZ5hQ3f*8!7g3p3Fs'
*/




