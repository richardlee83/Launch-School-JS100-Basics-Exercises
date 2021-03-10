/*
  Truthy vs Falsy

  Without looking at your notes or MDN, try to recall all values that count
  as falsy in JavaScript.
*/

/*
  Answer:
  Falsy values in Javascript (8 values):
  - '' or ""        Empty String
  - 0               Number Zero
  - -0              Number negative Zero
  - 0n              Number BigInt Zero
  - NaN             Number NaN
  - false           Boolean Zero
  - null            null
  - undefined       undefined
*/


/*
  Discussion:
  - In JavaScript, there are only eight values that are falsy. They are:

    false
    null
    undefined
    0
    NaN
    '' or ""
    -0 (negative zero)
    0n (BigInt zero)
  
  - The last two items on this list are not discussed in this course, so don't 
    worry if you didn't know those.
  - All other values are truthy.
*/