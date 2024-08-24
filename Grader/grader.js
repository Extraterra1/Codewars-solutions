// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

const grader = (num) => {
  return num > 1 ? 'F' : num >= 0.9 ? 'A' : num >= 0.8 ? 'B' : num >= 0.7 ? 'C' : num >= 0.6 ? 'D' : 'F';
};

// console.log(grader(0));
// console.log(grader(1.1));
// console.log(grader(0.9));
// console.log(grader(0.8));
// console.log(grader(0.7));
// console.log(grader(0.6));

console.log(grader(0.8));
