// Your company MRE Tech has hired a spiritual consultant who advised on a new Balance policy: Don't take sides, don't favour, stay in the middle. This policy even applies to the software where all strings should now be centered. You are the poor soul to implement it.

// Task
// Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

// center(strng, width, fill=' ')
// If the left and right padding cannot be of equal length make the padding on the left side one character longer.

// If strng is longer than width return strng unchanged.

const center = (str, width, fill = ' ') => {};

console.log(center('a', 3));
console.log(center('a', 3, 'x'));
console.log(center('abcdefg', 3, 'x'));
console.log(center('', 3, '_'));
console.log(center('abcdefg', 2, '_'));
console.log(center('____abc___', 10, '_'));
