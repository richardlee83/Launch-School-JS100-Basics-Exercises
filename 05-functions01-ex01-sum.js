/*
  Examine the example function invocation below. 

    sum(22, 10); // 32
  
  Write the function sum, such that it accepts two arguments and returns 
  the sum of its arguments. 

  You may assume that the function arguments will always be numbers.
*/

function sum(a, b) {
  return a + b;
}

console.log(sum(22, 10));   // 32

/*
  Solution:

  function sum(num1, num2) {
    return num1 + num2;
  }

  Discussion:
  - Our solution is straightforward: Within the function sum, we add 
    both arguments.
  - Depending on how you run your code snippets, you might see the return 
   value of sum(22, 10) in the console or not. 
  - If not, you can always invoke console.log to check it, e.g. by executing 
    console.log(sum(22, 10)).
*/



