/*

Write a function, `helloWorld`, that will return the string of 'Hello World!'

*/


function helloWorld() {
  console.log('Hello World!');
}

helloWorld();

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = helloWorld;
} catch (e) {
  module.exports = null;
}
