// This Kata is intended as a small challenge for my students

// All Star Code Challenge #13

// Your friend Billybob has a crush on the girl next to him in class, Emily, but wants to talk with you about what he should do, but doesn't want her to overhear. Send secret messages to Billybob by translating your messages into pig latin.

// Create a function, called translate(), that takes a string argument and returns the input string into "pig latin"

// The rules to translate into pig latin are as follows:

// Valid words are 2 or more letters long
// If a word begins with a consonant (a letter NOT 'a','e','i','o', or 'u'), then that first letter is shifted to the end of the word
// Then add "ay"
// translate("billy"); // => "illybay"
// translate("emily"); // => "emilyay"
// Note:
// If the string input is less than 2 letters, the input should be returned as is

const translate = (str) => {
  if (str.length < 2) return str;
  return /[aeiou]/.test(str.at(0)) ? str + 'ay' : str.slice(1) + str.at(0) + 'ay';
};

console.log(translate('billy'));
console.log(translate('emily'));
