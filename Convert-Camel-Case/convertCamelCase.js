// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let camelCase = [];
  const arr = str.replaceAll('_', '-').split('-');
  for (const e of arr.slice(1)) {
    camelCase.push(e[0].toUpperCase() + e.slice(1));
  }
  return arr[0] + camelCase.join('');
}

const str = 'the_stealth_warrior';
console.log(toCamelCase(str));

const toCamelCaseUpgrade = (str) => {
  if (!str) return str;
  return str.split(/[-_]/).reduce((acc, val, i) => {
    if (!i && val.at(0).toLowerCase() === val.at(0)) return acc + val;
    return acc + `${val.at(0).toUpperCase() + val.slice(1)}`;
  }, '');
};

console.log(toCamelCaseUpgrade('the_stealth_warrior'));
console.log(toCamelCaseUpgrade('The_Stealth_Warrior'));
console.log(toCamelCaseUpgrade('The_Stealth-Warrior'));
console.log(toCamelCaseUpgrade(''));
