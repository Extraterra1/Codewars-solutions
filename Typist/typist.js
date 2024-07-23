// John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.

// Given a string s. Your task is to count how many times the keyboard has been tapped by John.

// You can assume that, at the beginning the Caps Lock light is not lit.

// Input/Output
// [input] string s

// A non-empty string. It contains only English letters(uppercase or lowercase).

// 1 ≤ s.length ≤ 10000

// [output] an integer

// The number of times John tapped the keyboard.

// Example
// For s = "a", the output should be 1.

// John hit button a.

// For s = "aa", the output should be 2.

// John hit button a, a.

// For s = "A", the output should be 2.

// John hit button Caps Lock, A.

// For s = "Aa", the output should be 4.

// John hit button Caps Lock, A, Caps Lock, a.

const typist = (str) => {
  return str.split('').reduce((acc, val, i) => {
    const prevUppercase = i > 0 && str[i - 1].toUpperCase() === str[i - 1];
    const curUppercase = val.toUpperCase() === val;
    if ((prevUppercase && curUppercase) || (!prevUppercase && !curUppercase)) return acc + 1;
    return acc + 2;
  }, 0);
};

console.log(typist('a'));
console.log(typist('aa'));
console.log(typist('A'));
console.log(typist('AA'));
console.log(typist('aA'));
console.log(typist('Aa'));
console.log(typist('BeiJingDaXueDongMen'));
console.log(typist('AAAaaaBBBbbbABAB'));
console.log(typist('AmericanRAILWAY'));
console.log(typist('AaAaAa'));
console.log(typist('DFjfkdaB'));
