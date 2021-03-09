/*
  Continue

  Take a moment to read the MDN documentation on the continue statement.

  Then write a for loop that loops over the elements of the array cities and logs
  the length of each string to the console. 

  If the element is null, skip forward to the next iteration without logging 
  anything to the console.

  let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 
                'London', 'Beijing', null];
*/

/*
  From MDN Documentation:
  continue
  - The continue statement terminates execution of the statements in the current 
    iteration of the current or labeled loop, and continues execution of the 
    loop with the next iteration.
*/

// Answer:
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 
              'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i].length);
}


/*
  Solution:
  let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 
                'London', 'Beijing', null];

  for (let i = 0; i < cities.length; i += 1) {
    if (cities[i] === null) {
      continue;
    }

    console.log(cities[i].length);
  }


  Discussion:
  - continue terminates the current iteration and continues with execution of the 
    next iteration. 
  - This allows us to skip each element that is equal to null
*/