// You will be given a function, isFibo, which will take three arguments: a, b and f.

// a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

// Good luck, muh fellow coding warrior.

const isFibo = (a, b, f) => {
  const sequence = [a, b];
  while (sequence.at(-1) <= f) {
    sequence.push(sequence.at(-1) + sequence.at(-2));
  }
  return sequence.includes(f);
};

console.log(isFibo(0, 1, 2));
console.log(isFibo(1, 4, 10));
console.log(isFibo(4, 5, 23));
console.log(isFibo(100, 101, 301));
console.log(isFibo(1, 3, 1));
