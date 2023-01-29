/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (string) {
    let letterArr = string.split('');
    let word = [];
    let word2 = [];
    let bool = '';
    letterArr.forEach((letter) => {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        if (vowels.includes(letter)) {
            word.push(letter);
        }

        for (let i = 0; i < word.length; i++) {
            if (!(word2.includes(word[i]))) {
                word2.push(word[i]);
            }
        }

        if (word2.length >= 3) {
            bool = true;
        }
        else {
            bool = false;
        }
    })
    return bool;
};

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
