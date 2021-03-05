/*
  Is there a method to capitalize a string, for example turning 'mountain' into 
  'Mountain'?
*/

/*
  Answer:
  - no there is no method in Javascipt to capitalize the first letter of a string
*/

/*
  Solution:
  - There is no built-in method for capitalizing a string. 
  - If we wanted to have such a method, we would have to implement it ourselves.

  Discussion:
  - Searching MDN for capitalize does not yield any string methods as results. 
  - In order to be sure that there really is no method, being called and described 
    differently, you can check the MDN reference page for String: it lists all methods 
    that are available for strings.
*/

// implementing the code ourselves
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalize('mountain'));    // Mountain



