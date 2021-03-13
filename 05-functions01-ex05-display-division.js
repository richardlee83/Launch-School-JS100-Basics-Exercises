/*
  Determine the output that the following code will 
  log to the console.

  function multiplesOfThree() {
    let divisor = 1;

    for (let dividend = 3; dividend <= 30; dividend += 3) {
      console.log(dividend + ' / ' + divisor + ' = 3');
      divisor += 1;
    }
  }

  multiplesOfThree;
*/

/*
  Answer:
  - the code will not output anything to the console
  - in order to call a defined function, we need to use parentheses
    after the function name
  - in this case we need to invoke the function by writing
    multipleOfThree();
*/

/*
  Solution:
  - There will be no output, because the function multiplesOfThree 
    is not invoked.


  Discussion:
  - To invoke the function, we should append parentheses to the 
    function name on line 10, like so:

    multiplesOfThree();

    // logs:
    // 3 / 1 = 3
    // 6 / 2 = 3
    // 9 / 3 = 3
    // ...
*/

