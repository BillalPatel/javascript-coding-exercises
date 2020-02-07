/**
 * Factorial
 *
 * Write a function that returns the factorial of a number.
 * A factorial of a number is the result of that number 
 * multiplied by the number before it, and the number 
 * before that number, and so on, until you reach 1. The 
 * factorial of 1 is just 1.
 *
 */

function factorial(num) {
    if (typeof(num) !== 'number') {
        return undefined;
    }
    
    let total = 1;
    for (let i=1; i<=num; i++) {
        total = i * total;
    };

    return total;
}

module.exports = factorial;
