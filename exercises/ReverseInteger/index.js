/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int) {
  const intToArray = int.toString().split('').reverse().join('');
  const reversedInt = parseInt(intToArray);

  return reversedInt;
}

module.exports = reverse;
