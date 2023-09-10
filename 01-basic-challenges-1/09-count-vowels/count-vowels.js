//use regex to determine if a character is a vowel
// add all vowel characters to an array
// return length of that array

// function countVowels(str) {
//   // make string lowercase
//   const formatStr = str.toLowerCase();
//   //   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const vowels = str.match(/[aeiou]/gi);

//   return vowels ? vowels.length : 0;
// }

//using a for loop
function countVowels(str) {
  // make string lowercase
  const formatStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < formatStr.length; i++) {
    if (formatStr[i].match(/[aeiou]/gi)) {
      count += 1;
    }
  }
  return count;
}

module.exports = countVowels;
