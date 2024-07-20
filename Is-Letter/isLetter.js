// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

const isLetter = (char) => {
  return /[a-zA-Z]/.test(char);
};

console.log(isLetter('a'));
console.log(isLetter('2'));
console.log(isLetter(''));
console.log(isLetter('A'));
