// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

const doubleOther = (arr) => {
  return arr.map((e, i) => (i % 2 !== 0 ? e * 2 : e));
};

console.log(doubleOther([1, 2, 3, 4]));
console.log(doubleOther([3, 6, 9, 12]));
console.log(doubleOther([100, 123, 213, 453]));
