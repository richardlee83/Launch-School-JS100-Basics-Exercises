/*
  What's My Value? Part 10

  What will the following code log to the console and why? 

  Don't run it until you have tried to answer.
*/

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/*
  Answer:
  - the code will log { firstName: 'Jane', lastName: 'Doe' }
  - the code block in myFunction has access to the constant variable a since
    the variable was declared in the highest level of the code
  - although we cannot reassign the value of constants, in this case we 
    are only changing the property of the object that is referenced by the 
    constant a, which is allowed
  - when we invoke myFunction(), the property firstName of the object is reassigned
    from the string value 'John' to the string value 'Jane'
  - therefore when we log the object referenced by a, the property firstName
    will now be 'Jane'
*/


/*
  Solution:
  { firstName: 'Jane', lastName: 'Doe' }


  Discussion:
  - The fact that const variables cannot be re-assigned does not mean that the value 
    they hold is immutable. 
  - As we see in the example above, objects that are assigned to const variables can be mutated.
*/

