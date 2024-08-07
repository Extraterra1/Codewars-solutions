// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

const removeMinimum = (numbers) => {
  const arr = [...numbers];
  arr.splice(numbers.indexOf([...numbers].sort((a, b) => a - b)[0]), 1);
  return arr;
};

console.log(removeMinimum([5, 3, 2, 1, 4])); /* [5,3,2,4] */
console.log(removeMinimum([1, 2, 3, 4, 5])); /* [2,3,4,5] */
console.log(removeMinimum([5, 3, 2, 1, 4])); /* [2,2,2,1] */
console.log(removeMinimum([25, 30, 96, 87, 310, 371, 140, 104, 101, 259, 39, 297, 378, 216, 110, 94, 184, 51, 121]));
