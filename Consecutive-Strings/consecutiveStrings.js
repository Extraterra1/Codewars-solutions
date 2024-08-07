// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

const longestConsec = (arr, k) => {
  if (k <= 0 || k > arr.length) return '';
  return arr.reduce((acc, val, idx) => {
    for (let i = 1; i < k; i++) {
      if (arr[idx + i]) val += arr[idx + i];
    }
    return val.length > acc.length ? val : acc;
  }, '');
};

console.log(longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2));
// console.log(longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 3));
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2));
console.log(longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1));
console.log(longestConsec([], 3));
console.log(longestConsec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2));
console.log(longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2));
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0));
