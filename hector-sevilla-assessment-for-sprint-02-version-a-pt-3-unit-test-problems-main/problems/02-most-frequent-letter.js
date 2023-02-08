/***********************************************************************
Write a function `mostFrequentLetter(string)` that takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "
***********************************************************************/

function mostFrequentLetter(string) {
  let strArr = string.split('');
  let strObj = {};
  let count = 1;
  letterCount = 0;
  letterChar = '';
  for (let i = 0; i < string.length; i++) {
    if (strObj[string[i]] === undefined) {
      strObj[string[i]] = parseInt(1);
    }
    else {
      strObj[string[i]] = strObj[string[i]] + count;
    }
  }
  for (letter in strObj) {
    if (strObj[letter] > letterCount) {
      letterCount = strObj[letter];
      letterChar = letter;
    }
  }
  return letterChar;
}

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentLetter;
} catch (e) {
  module.exports = null;
}
