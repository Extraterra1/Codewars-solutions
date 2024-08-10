// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

const isSorted = (arr) => {
  const descArr = [...arr].sort((a, b) => b - a);
  const ascArr = [...arr].sort((a, b) => a - b);
  return arr.every((val, i) => val === descArr[i]) ? 'yes, descending' : arr.every((val, i) => val === ascArr[i]) ? 'yes, ascending' : 'no';
};

console.log(isSorted([1, 2]));
console.log(isSorted([15, 7, 3, -8]));
console.log(isSorted([4, 2, 30]));
