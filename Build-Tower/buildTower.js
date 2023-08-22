// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
// "  *  ",
// " *** "
// "*****"
// ];

function towerBuilder(nFloors) {
  const tower = [];
  for (let index = nFloors; index > 0; index--) {
    let floor = [];
    const blocks = index + (index - 1);
    for (let index = 0; index < blocks; index++) {
      floor.push("*");
    }
    floor = floor.join("");
    let str = [];
    if (floor.length < nFloors + (nFloors - 1)) {
      const spaces = nFloors - index;
      for (let index = 0; index < spaces; index++) {
        str.push(" ");
      }
      str = str.join("");
    }
    tower.push(str + floor + str);
  }
  return tower.reverse();
}

console.log(towerBuilder(27));
