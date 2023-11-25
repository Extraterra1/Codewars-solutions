// Challenge: Palindrome Checker

// Write a function that takes a string as an argument and returns true if the string is a palindrome and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.

// For example:

// isPalindrome('level') should return true.
// isPalindrome('Hello, World!') should return false.
// isPalindrome('A man, a plan, a canal, Panama!') should return true.
// Try to implement this in 10 minutes or less! Good luck!

const isPalindrome = (str) => {
  const cleanStr = str.replace(/[\s\p{P}]/gu, '').toLowerCase();
  const reverse = cleanStr.split('').reverse().join('');
  return reverse === cleanStr;
};

console.log(isPalindrome('bob!')); // true (ignoring spaces and case)
console.log(isPalindrome('Able , was I saw eLba')); // true (ignoring spaces and case)

console.log(isPalindrome('radar')); // true
console.log(isPalindrome('12321')); // true
console.log(isPalindrome('race car')); // true (ignoring spaces)
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('Was it a car or a cat I saw?')); // true (ignoring spaces and punctuation)
