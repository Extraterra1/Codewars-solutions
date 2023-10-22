function pigIt(str) {
  const reverse = str.split(' ').map((e) => e.split('').reverse());
  return reverse;
}

console.log(pigIt('Pig latin is cool'));
