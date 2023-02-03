/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

function recVolume(height) {
  let width, length;
  return function (num) {
    if (width === undefined) {
      return width = num;

    }
    else if (length === undefined) {
      return length = num;

    }
    else {
      return height * width * length;
    }
  }
}

const rectangle = recVolume(5) // returns a function
console.log(rectangle(5)) // returns a function
console.log(rectangle(5)) // 125
// any call after this should still return 125
console.log(rectangle(20)) // 125
console.log(rectangle(12)) // 125

const rectangle2 = recVolume(2) // returns a function
console.log(rectangle2(3)) // returns a function
console.log(rectangle2(1)) // 6
// any call after this should still return 6
console.log(rectangle2(100)) // 6
console.log(rectangle2(10)) // 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
