/*
  Equality:
  Predict the output of the below code. 

  When you run the code, do you see what you expected? 

  Why or why not?

  let array1 = [2, 6, 4];
  let array2 = [2, 6, 4];

  console.log(array1 === array2);
*/

/*
  Answer:
  - the code will log false to the console
  - although array1 and array2 are both array objects that contain the same
    values, they are in fact referencing two different objects that happen
    to have the same value
*/


/*
  Solution: 
  The output of the sample code is false.

  Discussion:
  - Primitives, like strings or numbers, are compared by their value. 
  - For example, the two strings below are strictly equal:

    console.log('2, 6, 4' === '2, 6, 4'); // true

  - Arrays, however, are objects and not primitives. 
  - JavaScript compares whether two objects are strictly equal by checking 
    whether they are the same object, i.e. whether they reference the same 
    location in memory. 
  - Since we constructed two array objects, one on line 1 and one on line 2, 
    they don't have the same reference.

  - Note that if we alter our original code so that array2 references the 
    same object as array1, our comparison logs true:

    let array1 = [2, 6, 4];
    let array2 = array1;

    console.log(array1 === array2); // true
*/








