const lastSurvivor = (str, coords) => {
  for (const i of coords) {
    str = str.replace(str[i], '');
  }
  return str;
};

console.log(lastSurvivor('zbk', [0, 1]));
