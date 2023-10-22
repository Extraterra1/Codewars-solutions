function pigIt(str) {
  const regex = /^[A-Za-z]/;
  const reverse = str
    .split(' ')
    .map((e) => (regex.test(e) ? e.split('').slice(1).concat([e[0], 'a', 'y']).join('') : e))
    .join(' ');

  return reverse;
}

console.log(pigIt('Hello World !'));
