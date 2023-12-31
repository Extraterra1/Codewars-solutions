// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const even = array.map((e, i) => {
    if (e % 2 == 0) return { index: i, num: e };
  });
  const odd = array.filter((e) => e % 2 != 0).sort((a, b) => a - b);
  for (const [i, e] of even.entries()) {
    if (e) {
      odd.splice(e.index, 0, e.num);
    }
  }
  return odd;
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(sortArray(arr));
