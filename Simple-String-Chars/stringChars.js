// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
// More examples in the test cases.

// Good luck!

const solve = (s) => {
  if (!s.trim()) return [0, 0, 0, 0];
  return [s.match(/[A-Z]/g).length, s.match(/[a-z]/g).length, s.match(/[0-9]/g).length, s.match(/\W/g).length];
};

console.log(solve("*'&ABCDabcde12345"));
console.log(solve(''));
console.log(solve('Codewars@codewars123.com'), [1, 18, 3, 2]);
console.log(solve('bgA5<1d-tOwUZTS8yQ'), [7, 6, 3, 2]);
console.log(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H'), [9, 9, 6, 9]);
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15, 8, 6, 9]);
console.log(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe'), [10, 7, 3, 6]);
console.log(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft'), [7, 13, 4, 10]);
console.log(solve('    '));
