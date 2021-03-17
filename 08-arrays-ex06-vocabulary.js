/*
  Vocabulary

  We've been given an array of vocabulary words grouped into sub-arrays by meaning. 

  This is a two-dimensional array or a nested array. 

  Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.
  let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

  // Expected output:
  // happy
  // cheerful
  // merry
  // etc...

  Hint:
  - In order to iterate through the vocabulary array and each of its sub-arrays, 
    write two nested loops.
*/

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];


// using for loops
for (let i = 0; i < vocabulary.length; i += 1) {
  for (let j = 0; j < vocabulary[i].length; j += 1) {
    console.log(vocabulary[i][j]);
  }
}

// flattening array and logging each element
vocabulary.flat().forEach(word => console.log(word));


/*
  Solution:
  let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

  for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
    let synonyms = vocabulary[vocabularyIdx];

    for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
      console.log(synonyms[synonymIdx]);
    }
  }


  Discussion:
  - Our solution uses nested for loops to iterate through each sub-array of the 
    vocabulary array. 
  - We access each inner element by its index on line 11, and output it using console.log().
*/


