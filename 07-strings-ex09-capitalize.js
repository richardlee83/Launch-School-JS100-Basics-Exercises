/*
  Capitalize Words
  Write code that capitalizes the words in the string 'launch school tech & talk',
  so that you get the string 'Launch School Tech & Talk'.
*/

let string = 'launch school tech & talk';
let strCap = string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
console.log(strCap);    // Launch School Tech & Talk

/*
  Solution:
  let string = 'launch school tech & talk';
  let words = string.split(' ');
  let capitalizedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }

  capitalizedWords.join(' '); // 'Launch School Tech & Talk'


  Discussion:
  - In our solution, we capitalize one word after the other. 
  - We use string.split(' ') to split the input string into words, then iterate over 
    these words, collecting their capitalized version in the array capitalizedWords, 
    and finally join the capitalized words into the final string.
*/



