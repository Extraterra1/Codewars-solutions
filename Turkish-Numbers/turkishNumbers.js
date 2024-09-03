// Your Task
// Complete the function to convert an integer into a string of the Turkish name.

// input will always be an integer 0-99;
// output should always be lower case.
// Background
// Forming the Turkish names for the numbers 0-99 is very straightforward:

// units (0-9) and tens (10, 20, 30, etc.) each have their own unique name;
// all other numbers are simply [tens] + [unit], like twenty one in English.
// Unlike English, Turkish does not have "teen"-suffixed numbers; e.g. 13 would be directly translated as "ten three" rather than "thirteen" in English.

const digits = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
const tens = ['on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];

const turkishNumbers = (n) => {};

console.log(turkishNumbers(1));
console.log(turkishNumbers(32));
console.log(turkishNumbers(30));
console.log(turkishNumbers(70));
