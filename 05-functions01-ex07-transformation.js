/*
  Use JavaScript's string methods on the string 'Captain Ruby' to produce 
  the string 'Captain JavaScript'.
*/

// String.prototype.replace() method
let string = 'Captain Ruby';
console.log(string.replace('Ruby', 'Javascript'));

// split string into array
console.log(`${string.split(' ')[0]} Javascript`);

// slice string
console.log(`${string.slice(0, 7)} Javascript`);

/*
  Solution:
  'Captain Ruby'.replace('Ruby', 'JavaScript');

  Discussion:
  - There is more than one way to achieve this. 
  - Arguably the most straightforward one is to use the 
    String.prototype.replace() method. 
  - Another possibility is to extract the first part of the input string, 
    'Captain', and concatenate it with 'JavaScript'. 

  For example:

  'Captain Ruby'.substring(0, 8) + 'JavaScript';

  or

  'Captain Ruby'.split(' ')[0] + ' JavaScript';

  - It is often the case that there is more than one way to achieve some result. 
  - Exploring different ways makes you more familiar with the language and can 
    give you insights into possible trade-offs. 
  - Ultimately, we advise you to choose the solution that is easiest to understand.
*/

