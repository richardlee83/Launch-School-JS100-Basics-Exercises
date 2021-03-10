/*
  Yes? No? Part 1

  The code provided below will randomly initialize randomNumber to 
  either 0 or 1 each time it is executed.

  Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' 
  if randomNumber is 0.

  let randomNumber = Math.round(Math.random());
*/

/*
  From MDN Documentation:
  - Math.random()
    - The Math.random() function returns a floating-point, pseudo-random number 
      in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately 
      uniform distribution over that range — which you can then scale to your 
      desired range. 
    - The implementation selects the initial seed to the random number generation 
      algorithm; it cannot be chosen or reset by the user.
*/

let randomNumber = Math.round(Math.random());
console.log(randomNumber);

// if statement
if (randomNumber) {
  console.log('Yes');
} else {
  console.log('No');
}

// ternary operator
console.log(randomNumber === 1 ? 'Yes' : 'No')


/*
  Solution:
  let randomNumber = Math.round(Math.random());

  if (randomNumber) {
    console.log('Yes!');
  } else {
    console.log('No');
  }


  Discussion:
  - Recall that 0 is falsy in Javascript, while 1 is truthy.
  - Our if statement will execute the code on line 4 if the condition provided on 
    line 3 (randomNumber) is truthy; otherwise it will execute the code on line 6.
  - Alternatively, you could have used as conditions if (randomNumber === 0) and 
    if (randomNumber === 1). 
  - Just remember to make it a habit to use strict equality ===.
*/