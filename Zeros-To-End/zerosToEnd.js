const moveZeros = (arr) => {
  const zeroArr = [];
  const numArr = arr.filter((e) => {
    if (e === 0) {
      zeroArr.push(e);
      return false;
    }
    return true;
  });
  return numArr.concat(zeroArr);
};

const test = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);

console.log(test);
