/*
  Given the following tweet:

  let tweet = 'Starting to get the hang of it... #javascript #launchschool';

  What will the following statements evaluate to?

  tweet.split(' ');
  tweet.split(' ').reverse();
  tweet.split(' ').reverse().join(' ');

  Reference the documentation to learn about the return value of 
  each method.
*/

// Answer:
let tweet = 'Starting to get the hang of it... #javascript #launchschool';

tweet.split(' ');
// ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript',
//  '#launchschool']

tweet.split(' ').reverse();
// ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get',
//   'to', 'Starting']

tweet.split(' ').reverse().join(' ');
// '#launchschool #javascript it... of hang the get to Starting'


/*
  Solution:
  tweet.split(' ');
  // ["Starting", "to", "get", "the", "hang", "of", "it...", "#javascript", 
      "#launchschool"]

  tweet.split(' ').reverse();
  // ["#launchschool", "#javascript", "it...", "of", "hang", "the", "get", 
      "to", "Starting"]

  tweet.split(' ').reverse().join(' ');
  // '#launchschool #javascript it... of hang the get to Starting'


  Discussion:
  - In order to find the documentation for each method call, we need to 
    know where to look. 
  - Our initial method call, split(), is invoked on the string tweet. 
  - We can find information about this method in the String documentation.

  - Because split() returns an array, we know that reverse() is being 
    invoked on an array and can search the Array documentation to find 
    information about it.

  - Since reverse() also returns an array (with the elements of the input 
    array in reverse order), we can again look within the Array documentation 
    to find information about the return value of join().
*/




