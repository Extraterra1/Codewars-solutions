// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

const doubleChar = (str) => {
  return str.split('').reduce((acc, val) => acc + val + val, '');
};

console.log(doubleChar('String'));
console.log(doubleChar('abcd'));
console.log(doubleChar('Adidas'));
console.log(doubleChar('1337'));
console.log(doubleChar('illuminati'));
console.log(doubleChar('123456'));
console.log(doubleChar('%^&*('));
