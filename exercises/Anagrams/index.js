/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    let status;

    const strA = stringA.toLowerCase().replace(/[\"\'~`!@#$%^&()_={}[\]:;,.<>+\/?-]+|\d+|^\s+$/g, '').replace(/\s+/ig, ' ').split('');
    const strB = stringB.toLowerCase().replace(/[\"\'~`!@#$%^&()_={}[\]:;,.<>+\/?-]+|\d+|^\s+$/g, '').replace(/\s+/ig, ' ').split('');

    if (strA.length !== strB.length) {
        status = false;
    } else {
        for(let i=0; i<strA.length; i++) {
            if(strB.includes(strA[i])) {
                status = true;
            } else {
                status = false;
                break;
            };
        }
    };

    return status;
}

module.exports = anagrams;
