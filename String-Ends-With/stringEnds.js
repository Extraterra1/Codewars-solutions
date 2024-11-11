const stringEnds = (str, end) => {
  return end ? str.slice(end.length * -1) === end : true;
};

console.log(stringEnds('abcdeee', ''));
console.log(stringEnds('abcdeee', 'ee'));
console.log(stringEnds('abc', 'bc'));
console.log(stringEnds('abc', 'd'));
