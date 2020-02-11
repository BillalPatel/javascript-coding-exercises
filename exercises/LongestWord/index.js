/**
* Longest Word
*
* Write a function that returns the longest word in the passed sentence.
* If there are two or more words that are the same length, return
* the first word from the string with that length. Ignore punctuation
* and assume sentence will not be empty.
*
* Examples:
* longestWord("Hello there") === "Hello"
* longestWord("My name is Adam") === "name"
* longestWord("fun&!! time") === "time"
*/

function longestWord(sen) {
    let biggestLength = 0;
    let longestWord = '';

    const arrOfWords = sen
        .replace(/[\"\'~`!@#$%^&()_={}[\]:;,.<>+\/?-]+|\d+|^\s+$/g, '')
        .replace(/\s+/ig, ' ')
        .split(' ');

    for (let i=0; i<arrOfWords.length; i++) {
        if (arrOfWords[i].length > longestWord.length) {
            longestWord = arrOfWords[i];
        }
    }

    return longestWord;
}

module.exports = longestWord;
