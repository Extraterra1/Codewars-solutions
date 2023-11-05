function squareSum(numbers) {
  return numbers.reduce((acc, val) => acc + val ** 2, 0);
}

const test = squareSum([1, 2]);
console.log(test);
