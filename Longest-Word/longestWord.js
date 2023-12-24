// Write a function that takes a sentence (string) as an argument and returns the longest word in the sentence.
// If there are multiple words with the same maximum length, return the first one.

// For example:

// longestWord('This is an example sentence') should return 'example'.
// longestWord('Web development is fun!') should return 'development'.
// longestWord('Hello world') should return 'world'.

const longestWord = (word) => {
  return word.split(' ').reduce((acc, val) => (val.length > acc.length ? val : acc));
};

console.log(longestWord('The quick brown fox jumps over the lazy dog')); // 'quick'
console.log(longestWord('A journey of a thousand miles begins with a single step')); // 'thousand'
console.log(longestWord('Programming is an art')); // 'Programming'
console.log(longestWord('Python, JavaScript, and Ruby are programming languages')); // 'JavaScript' (first occurrence of the longest word)
console.log(longestWord('The longest word in the English language is pneumonoultramicroscopicsilicovolcanoconiosis')); // 'pneumonoultramicroscopicsilicovolcanoconiosis'
console.log(longestWord('')); // '' (empty string)
