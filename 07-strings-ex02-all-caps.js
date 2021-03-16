/*
  ALL CAPS

  Take the string 'confetti floating everywhere' and transform 
  it to upper case.
*/

let string = 'confetti floating everywhere'
let allCapsString = string.toUpperCase()
console.log(allCapsString);   // CONFETTI FLOATING EVERYWHERE
console.log(string);          // confetti floating everywhere

/*
  Solution:
  let string = 'confetti floating everywhere';

  string.toUpperCase(); // CONFETTI FLOATING EVERYWHERE


  Discussion:
  - Our solution leverages the String.prototype.toUpperCase() method. 
  - This method returns a new string, with the calling string's 
    characters converted to uppercase. 
  - To see that this method returns a new string rather than mutating 
    the original one, log string to the console after line 3.
*/
