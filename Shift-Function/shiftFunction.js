// Been a while, but here's part 2!

// You are given a string of lowercase letters and spaces that you need to type out. In the string there is a special function: [shift]. Once you encounter a [shift] , you capitalise the character right after it, as if you're actually holding the key. Return the final string .

// e.g. [shift]john [shift]green return John Green (capitalise the j and g)

// Walkthrough:

// [shift]
// J capitalise the j
// Jo
// Joh
// John
// John[space]
// John G capitalise the g
// John Gr
// John Gre
// John Gree
// John Green

// John Green

// e.g. [shift]n[shift]o[shift]o[shift]o return NOOO (capitalise all the letters)

// Walkthrough:

// [shift]
// N capitalise the n
// NO capitalise the O
// NOO capitalise the O
// NOOO capitalise the O

// NOOO

const typeOut = (str) => {
  return str
    .replace(/\[holdshift\](.*?)\[unshift\]/g, (_, m) => m.toUpperCase())
    .replace(/\[shift\]\[unshift\]/g, '')
    .replace(/\[shift\](.)/g, (_, m) => m.toUpperCase());
};

console.log(typeOut('[shift]john [shift]green'));
console.log(typeOut('[shift][unshift]dont shi[shift][unshift]ft th[shift][unshift]is'));
console.log(typeOut('[holdshift]holdshift[unshift] [shift]shift'));
console.log(typeOut('[holdshift]abcd[unshift][shift]e[shift]f[holdshift]ghijklmnop[unshift]'));
console.log(typeOut('[shift]banana and [holdshift]apple[unshift] equals to [shift]orange'));
