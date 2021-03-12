/*
  Are We Moving?

  Determine what the following code snippet logs. 

  First solve it in your head or on paper, and only then run it in your 
  JavaScript console to check the result.

  let speed = 0;
  let acceleration = 24;
  let brakingForce = 19;

  let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

  console.log(isMoving);


  Bonus question: Do we need the parentheses in the boolean expression or 
  could we also have written the following?

  let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
*/

/*
  Answer:
  - the code will log true to the console
  - the && operator takes in two operands on each side
  - the left side brakingForce < acceleration evaluates to true
  - the right side also evalutes to true
    - speed > 0 || acceleration > 0 uses an or || operator
      which takes in two operands
    - the left operand speed > 0 evalutes to false
    - the right operand acceleration > 0 evalutes to true
    - only one operand has to evaluate to true for the || comparison
      to evaluate to true, as in this case
  - since both operands used with the logical && operator evaluate to
    to true, the entire expression evalutes to true as well

  - bonus question:
    - yes we need the parentheses since the and && operator has precedence
      over the or || operator
*/


/*
  Solution:
  - The code outputs true.

  Bonus question: 
  - Yes, we do need the parentheses, because && has a higher operator 
    precedence than ||, so:

    brakingForce < acceleration && speed > 0 || acceleration > 0

  is equivalent to:

    (brakingForce < acceleration && speed > 0) || acceleration > 0


  Discussion:
  - The provided code uses the logical or operator ||, which checks whether
    at least one of its operands is truthy, and the logical and operator &&,
    which checks whether both its operands are truthy.
  - In the above code, the operands are comparisons with the following 
    values:

    brakingForce < acceleration // true
    speed > 0                   // false
    acceleration > 0            // true

  - Therefore, our logical expression breaks down to true && (false || true). 
  -  Since false || true evaluates to true and true && true evaluates to 
     true as well, the value of isMoving is true.
*/




