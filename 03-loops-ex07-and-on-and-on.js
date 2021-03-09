/*
  And on and on and on 

  The following code keeps looping forever. 
  (You can hit Ctrl-C to stop it.)

  Why is that? 

  Also modify it so that it stops after the first iteration.

  for (let i = 0; ; i += 1) {
    console.log("and on");
  }
*/

/*
  Answer:
  - the code is missing the condition defintion that evaluates whether
    or not the code block should be executed
  - in this case Javascript will treat the condition as true by default
  - we can stop the code after the first iteration by adding a break
    statement after we run console.log("and on")
  - we can also stop the code after the first iteration by defining the
    condition in which the code block executes (i.e. while i === 0);
*/

// with break statement
for (let i = 0; ; i += 1) {
  console.log('and on');
  break;
}

// with defined condition
for (let i = 0; i === 0; i += 1) {
  console.log('and on');
}

/*
  Solution:
  - The above code never terminates, because the condition of the for loop was 
    left empty. 
  - In this case, JavaScript treats it as true.
  - One way to terminate the loop from within the body is to use the break 
    statement:

    for (let i = 0; ; i += 1) {
      console.log("and on");
      break;
    }


  Discussion:
  - Note that continue does not help here, as it would simply forward us to the 
    next iteration.
*/