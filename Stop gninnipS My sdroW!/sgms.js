// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

const sgms = (str) => {
  return str
    .split(' ')
    .map((e) => (e.length >= 5 ? e.split('').reverse().join('') : e))
    .join(' ');
};

console.log(sgms('Hey fellow warriors'));
console.log(sgms('This is a test '));
console.log(sgms('This is another test'));
