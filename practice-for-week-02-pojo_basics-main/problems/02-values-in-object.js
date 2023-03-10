/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

/*function valuesInObject(obj) {
  let valuesArr = [];

  for (let keys in obj) {
    valuesArr.push(obj[keys]);
  }

  console.log(valuesArr);
}*/

function valuesInObject(obj) {
  let values = Object.values(obj);
  console.log(values);
}

let animals = { dog: "Wolfie", cat: "Jet", bison: "Bilbo" }
let foods = { apple: "tart", lemon: "sour", mango: "sweet" }
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
