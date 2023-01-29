/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
  let keysArr = [];

  for (let keys in obj) {
    keysArr.push(keys);
  }

  console.log(keysArr);
}

/*function keysInObject(obj) {
  let keys = Object.keys(obj);
  console.log(keys);
}*/

let animals = { dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo' };
let foods = { apple: 'tart', lemon: 'sour', mango: 'sweet' };
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
