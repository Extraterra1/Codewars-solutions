// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

function solve(arr) {
  const dupes = [];
  return arr
    .reverse()
    .filter((e) => {
      const res = !dupes.includes(e);
      dupes.push(e);
      return res;
    })
    .reverse();
}

// const arr = [1, 2, 1, 2, 1, 2, 3];
// console.log(solve(arr));

const improvedSolve = (arr) => {
  return [...new Set(arr)];
};

const arr = [1, 2, 1, 2, 1, 2, 3];
console.log(solve(arr));
console.log(solve([3, 4, 4, 3, 6, 3]));
console.log(solve([1, 2, 1, 2, 1, 2, 3]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([1, 1, 4, 5, 1, 2, 1]));
console.log(solve([1, 2, 1, 2, 1, 1, 3]));
