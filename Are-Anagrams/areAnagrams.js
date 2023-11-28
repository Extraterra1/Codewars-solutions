// Challenge: Anagram Checker

// Write a function that takes two strings as arguments and returns true if the strings are anagrams of each other, and false otherwise.
// Anagrams are words or phrases that contain the same characters, with the same or different order.

// For example:

// areAnagrams('listen', 'silent') should return true.
// areAnagrams('hello', 'world') should return false.
// areAnagrams('The Morse Code!', 'Here come dots') should return true (ignoring spaces and case).

const areAnagrams = (str1, str2) => {
  const cleanStr1 = str1
    .replace(/[^\w]|_/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const cleanStr2 = str2
    .replace(/[^\w]|_/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return cleanStr1 === cleanStr2;
};

console.log(areAnagrams('listen', 'silent'));

console.log(areAnagrams('evil', 'vile')); // true
console.log(areAnagrams('astronomer', 'moon starer')); // true
console.log(areAnagrams('school master', 'the classroom')); // true
console.log(areAnagrams('Debit card', 'Bad credit')); // true (ignoring spaces and case)
console.log(areAnagrams('test', 'best')); // false
console.log(areAnagrams('funeral', 'real fun')); // false
