// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

const check32 = (arr) => {};

console.log(check32(['a', 'a', 'a', 'b', 'b']));
console.log(check32(['b', 'b', 'b', 'c', 'c']));
console.log(check32(['b', 'b', 'c', 'c', 'c']));
console.log(check32(['a', 'b', 'c', 'b', 'c']));
console.log(check32(['a', 'a', 'a', 'a', 'a']));
