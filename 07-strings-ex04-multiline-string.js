/*
  Multiline String

  Take the following rhyme:

  A pirate I was meant to be!
  Trim the sails and roam the sea!

  How can you assign this string to a single variable, preserving the 
  line break?
*/

let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!';
console.log(rhyme);
// A pirate I was meant to be!
// Trim the sail and roam the sea!


/*
  Solution:
  let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

  console.log(rhyme);
  // A pirate I was meant to be!
  // Trim the sails and roam the sea!


  Discussion:
  - Special characters can be encoded in a string via escape notation. 
  - For example, quotes can be included in strings as \' and \":

  'I\'m a mighty pirate!'
  "\"It'll be fun\", they said."

  - Tabs can be written as \t, and \n is the newline character.
*/