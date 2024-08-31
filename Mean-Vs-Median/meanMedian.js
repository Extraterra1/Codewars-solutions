// Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

// 'mean' - in case mean value is larger than median value
// 'median' - in case median value is larger than mean value
// 'same' - in case both mean and median share the same value
// Reminder: Median

// Array will always be valid (odd-length >= 3)

const meanMedian = (arr) => {
  const mid = Math.floor(arr.length / 2);
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  const median = arr.length % 2 ? arr[mid] : (arr[mid] + arr[mid - 1]) / 2;

  return median > mean ? 'median' : median === mean ? 'same' : 'mean';
};

console.log(meanMedian([1, 1, 1]));
console.log(meanMedian([1, 2, 27]));
console.log(meanMedian([7, 14, -70]));
console.log(meanMedian([32, 1344, 7120]));
console.log(meanMedian([743, 124, 23]));
console.log(meanMedian([17, 24, 34]));
console.log(meanMedian([71, 142, -30]));
