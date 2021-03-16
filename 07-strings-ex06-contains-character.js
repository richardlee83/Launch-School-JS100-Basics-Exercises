/*
  Contains Character

  Write code that checks whether the string byteSequence contains the 
  character x.

  let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
*/

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
let result = false;
for (let i = 0; i < byteSequence.length; i += 1) {
  if (byteSequence[i] === 'x') {
    result = true;
    break;
  }
}
console.log(result);    // true

/*
  Solution:
  byteSequence.includes('x'); // true


  Further Exploration:
  It's a great exercise to try to implement the functionality of 
  String.prototype.includes() yourself.

*/