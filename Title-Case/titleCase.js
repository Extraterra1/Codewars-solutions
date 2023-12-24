const titleCase = word => {
    return word.split(' ').map( e=> e.at(0).toUpperCase() + e.slice(1)).join(' ')
}

console.log(titleCase('hey whats up'))
console.log(titleCase('the quick brown fox jumps over the lazy dog'))
console.log(titleCase('javascript is a programming language but python is more popular'))
console.log(titleCase('a tale of two cities'))
console.log(titleCase('the lord of the rings: the fellowship of the ring'));