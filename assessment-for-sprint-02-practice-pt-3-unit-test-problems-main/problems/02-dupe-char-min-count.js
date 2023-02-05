/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	let letterEach = string.split('');
	tempArr = [];
	tempArr2 = [];
	finObj = {};
	for (let i = 0; i < letterEach.length; i++) {
		if (!tempArr.includes(letterEach[i])) {
			tempArr.push(letterEach[i]);
		}
		else {
			tempArr2.push(letterEach[i]);
		}
	}
	count = 1;
	for (let j = 0; j < tempArr2.length; j++) {
		if (finObj[tempArr2[j]] === undefined) {
			finObj[tempArr2[j]] = parseInt(2);
		}
		else {
			finObj[tempArr2[j]] = finObj[tempArr2[j]] + count;
		}
	}
	return finObj;
}

function duplicateCharMinCount(string, minCount) {
	let charCount = countCharacters(string);
	let ansArr = [];
	for (char in charCount) {
		if (charCount[char] >= minCount) {
			ansArr.push(char);
		}
	}
	console.log(ansArr);
}

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
