// Challenge: Sum of Multiples

// Write a function that takes two numbers, n and m, and finds the sum of all the multiples of n or m below 1000. Return the sum.

// For example:

// sumOfMultiples(3, 5) should return the sum of multiples of 3 or 5 below 1000.
// sumOfMultiples(7, 13) should return the sum of multiples of 7 or 13 below 1000.

const sumOfMultiples=(x,y) => {
    const multiples = []
    for (let i = 1; i < 1000; i++) {
        if(i%x === 0 || i%y ===0) multiples.push(i)
    }
    return multiples.reduce((acc,val) => acc+val, 0)
}
console.log(sumOfMultiples(3,5))
console.log(sumOfMultiples(7,13))