// function isPalindrome(string) {
//   const formatString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const reverseString = formatString.split('').reverse().join('');
//   return formatString === reverseString;
// }

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert the string to lowercase
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());
  // Reverse the string
  const reversedStr = reverseString(formattedStr);
  // Return whether the formatted string is equal to the reversed string
  return formattedStr === reversedStr;
}

function removeNonAlphanumeric(str) {
  let formattedStr = '';
  //loop through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    //if the current character is alphanumeric, add it to the formatted string
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  //if character code is between 48 and 57 (0-9) or between 97 and 122 (a-z)
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(str) {
  let reversed = '';
  //loop through the string backwards
  for (let i = str.length - 1; i >= 0; i--) {
    //add each character to the reversed string
    reversed += str[i];
  }
  return reversed;
}

module.exports = isPalindrome;
