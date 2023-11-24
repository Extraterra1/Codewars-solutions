// Write a function that takes a number as an argument and returns an array containing numbers from 1 to the given number.
// But for multiples of 3, replace the number with "Fizz," for multiples of 5, replace with "Buzz," and for numbers which are multiples of both 3 and 5, replace with "FizzBuzz."

// For example, if the input is 15, the output should be:
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'];

const fizzBuzz = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    i % 3 === 0 && i % 5 === 0 ? arr.push('FizzBuzz') : i % 3 === 0 ? arr.push('Fizz') : i % 5 === 0 ? arr.push('Buzz') : arr.push(i);
  }
  return arr;
};

console.log(fizzBuzz(15));
