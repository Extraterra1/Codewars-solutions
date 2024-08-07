// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = (str) => {
  return str
    .split('')
    .map((e) => {
      if (/[^a-zA-Z]+/.test(e)) return e;

      const ogCode = e.charCodeAt();
      const firstCode = e.toUpperCase() === e ? 65 : 97;

      if (ogCode >= firstCode) {
        const newCode = ogCode + 13;
        if (newCode <= firstCode + 25) return String.fromCharCode(newCode);
        return String.fromCharCode(firstCode + (newCode - (firstCode + 26)));
      }
    })
    .join('');
};

console.log(rot13('test')); /* grfg */
console.log(rot13('Test')); /* Grfg */
console.log(rot13('Ruby is cool!')); /* Ehol vf pbby! */
