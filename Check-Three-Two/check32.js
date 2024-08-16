// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

const check32 = (arr) => {
  const a = arr.filter((e) => e === 'a').length;
  const b = arr.filter((e) => e === 'b').length;
  const c = arr.filter((e) => e === 'c').length;

  return (a > 2 && (b > 1 || c > 1)) || (b > 2 && (a > 1 || c > 1)) || (c > 2 && (a > 1 || b > 1));
};

console.log(check32(['a', 'a', 'a', 'b', 'b']));
console.log(check32(['b', 'b', 'b', 'c', 'c']));
console.log(check32(['b', 'b', 'c', 'c', 'c']));
console.log(check32(['a', 'b', 'c', 'b', 'c']));
console.log(check32(['a', 'a', 'a', 'a', 'a']));
