/*
  Similar to the previous exercise, now write a function that 
  extracts the region code from a locale. 

  For example:

  extractRegion('en_US.UTF-8');  // 'US'
  extractRegion('en_GB.UTF-8');  // 'GB'
  extractRegion('ko_KR.UTF-16'); // 'KR'
*/

// using string slice() method
function extractRegion(locale) {
  return locale.slice(3, 5);
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'


// using string split method
function extractRegion2(locale) {
  return locale.split('.')[0].split('_')[1];
}

console.log(extractRegion2('en_US.UTF-8'));  // 'US'
console.log(extractRegion2('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion2('ko_KR.UTF-16')); // 'KR'

/*
  Solution:
  function extractRegion(locale) {
    return locale.split('.')[0]
                .split('_')[1];
  }

  // Examples:
  console.log(extractRegion('en_US.UTF-8'));
  console.log(extractRegion('en_GB.UTF-8'));
  console.log(extractRegion('ko_KR.UTF-16'));


  Discussion:
  - We use the same approach as in our previous solution, splitting the 
    input string into its parts. 
  - We first split at the '.' character and take the first part, in order to 
    get the language and region substring (e.g. 'en_GB'), and then we split 
    that part again at the '_' character, this time returning the second part.
*/

