// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

function squareSum(numbers) {
  return numbers.reduce((a, e) => a + e * e, 0);
}

const arr = [-13, -18, 1, 1, -5];
console.log(squareSum(arr));
