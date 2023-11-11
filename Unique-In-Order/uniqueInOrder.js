const uniqueInOrder = (input) => {
  if (typeof input === 'string') input = input.split('');
  return input.filter((e, i) => input[i + 1] !== e);
};

const test = uniqueInOrder([1, 2, 2, 3, 3]);

console.log(test);
