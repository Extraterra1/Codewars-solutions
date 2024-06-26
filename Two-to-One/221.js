// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const twoToOne = (s1, s2) => {
  return [...new Set((s1 + s2).split(''))].sort().join('');
};

console.log(twoToOne('xyaabbbccccdefww', 'xxxxyyyyabklmopq')); /* abcdefklmopqwxy */
console.log(twoToOne('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz')); /* abcdefghijklmnopqrstuvwxyz */
console.log(twoToOne('codingisfun', 'challengeaccepted')); /* acdefghilnopt */
console.log(twoToOne('supercalifragilisticexpialidocious', 'pseudopseudohypoparathyroidism')); /* acdefghijklmnoprstuy */
