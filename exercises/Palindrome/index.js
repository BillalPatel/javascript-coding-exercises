/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str) {
    let status;

    const arr = str.split('');
    const reverseArr = str.split('').reverse();
    const arrLength = arr.length;

    for (let i=0; i<arrLength; i++) {
        if (arr[i] === reverseArr[i]) {
            status = true;
        } else {
            status = false;
            break;
        }
    }

    return status;
}

module.exports = palindrome;
