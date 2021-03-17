/*
  Add and Delete

  We are given the following array of energy sources.

  let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

  Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// remove 'fossil' from array
energy.shift();
// add 'geothermal' to end of array
energy.push('geothermal');

// all in one step; concat merges two or more arrays and returns a new array
energy = energy.slice(1).concat(['geothermal']);

console.log(energy);    // [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]


/*
  Solution:
  - Adding an element:
    energy.push('geothermal');

  - Removing an element:
    energy.shift();
    or
    energy = energy.slice(1);
    or
    energy.splice(0, 1);
*/