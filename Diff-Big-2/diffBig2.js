// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);
// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.

const diffBig2 = (arr) => {
  const sorted = arr.sort((a, b) => b - a);
  return sorted[0] - sorted[1];
};

console.log(diffBig2([5, 10, 2]));
console.log(diffBig2([31, 2, 4]));
console.log(diffBig2([312, 53, 122]));
