/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

let arrowReverseString = (str) => {
  // let strArr = str.split('');
  // let strFin = [];
  // for (let i = strArr.length - 1; i >= 0; i--) {
  //   strFin.push(strArr[i]);
  // }
  // console.log(strFin.join(''));
  let strArr = str.split('');
  let strRev = strArr.reverse();
  let finRev = strRev.join('');
  console.log(finRev);
}

let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
