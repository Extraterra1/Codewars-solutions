// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

const move10 = (str) => {
  return [...str]
    .map((e) => {
      if (e.charCodeAt() + 10 > 122) return String.fromCharCode(96 + (10 - (122 - e.charCodeAt())));
      return String.fromCharCode(e.charCodeAt() + 10);
    })
    .join('');
};

console.log(move10('testcase'));
