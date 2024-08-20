// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

const descOrder = (n) => {
  return (
    `${n}`
      .split('')
      .sort((a, b) => b - a)
      .join('') * 1
  );
};

console.log(descOrder(42145));
console.log(descOrder(31234124));
console.log(descOrder(65437352));
console.log(descOrder(123));
console.log(descOrder(5765484));
console.log(descOrder(213125));
console.log(descOrder(4564578));
console.log(descOrder(4378971));
console.log(descOrder(946341));
