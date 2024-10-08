// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

const noOddities = (arr) => {
  return arr.filter((e) => !(e % 2));
};

console.log(noOddities([1, 2, 3]));
console.log(noOddities([0, 1]));
console.log(noOddities([0, 1, 2, 3]));
