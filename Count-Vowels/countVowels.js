// Challenge: Counting Vowels

// Write a function that takes a string as an argument and returns the count of vowels (a, e, i, o, u) in the string.
// The function should be case-insensitive, meaning it should count both uppercase and lowercase vowels.

// For example:

// countVowels('Hello World') should return 3 (o, o, e).
// countVowels('Programming is Fun!') should return 5 (o, a, i, i, u).

const countVowels = (str) => {
  return str.split('').reduce((acc, val) => (val.match(/[aeiouAEIOU]/g) ? acc + 1 : acc), 0);
};

console.log(countVowels('Hello World'));
console.log(countVowels('Programming is Fun!'));
console.log(countVowels('JavaScript')); // 3 (a, a, e)
console.log(countVowels('Elephant')); // 3 (e, e, a)
console.log(countVowels('Quick brown fox jumps over the lazy dog')); // 10
console.log(countVowels('OpenAI GPT')); // 4 (o, e, A, I)
console.log(countVowels('aeiouAEIOU')); // 10 (all vowels in both cases)
console.log(countVowels('12345')); // 0 (no vowels)
console.log(countVowels('!@#$%^&*()')); // 0 (no vowels)
