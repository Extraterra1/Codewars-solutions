// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeroes = (arr) => {
  return arr.reduce((acc, val) => {
    if (val === 0) return [...acc, val];
    const idx = acc.indexOf(0);
    return idx !== -1 ? [...acc.slice(0, idx >= 0 ? idx : acc.length), val, ...acc.slice(idx)] : [...acc, val];
  }, []);
};

console.log(moveZeroes([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
console.log(moveZeroes([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
