// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

const findNeedle = (arr) => {};

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])); /* 5 */
console.log(findNeedle(['hay', 'junk', 'needle', 'hay', 'hay', 'moreJunk', 'randomJunk'])); /* 2 */
console.log(findNeedle(['needle', 'hay', 'junk', 'hay', 'hay', 'moreJunk', 'randomJunk'])); /* 0 */
console.log(findNeedle(['hay', 'needle', 'junk', 'hay', 'hay', 'moreJunk', 'randomJunk'])); /* 1 */
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'needle', 'moreJunk', 'randomJunk'])); /* 4 */
