// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

const playingBanjo = (name) => {
  return name.match(/^r/i) ? `${name} plays banjo` : `${name} does not play banjo`;
};

console.log(playingBanjo('Adam'));
console.log(playingBanjo('Ringo'));
console.log(playingBanjo('bravo'));
console.log(playingBanjo('Paul'));
console.log(playingBanjo('robert'));
