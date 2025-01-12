/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
    let strArray = str.split('');

    for (let i=0; i<strArray.length; i++) {
        strArray[0] = strArray[0].toUpperCase();
        if (strArray[i] === ' ') {
            strArray[i+1] = strArray[i+1].toUpperCase();
        }
    }; 

    return strArray.join('')
}

module.exports = capitalize;
