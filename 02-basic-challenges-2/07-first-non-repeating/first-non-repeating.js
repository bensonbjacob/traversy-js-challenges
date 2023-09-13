function findFirstNonRepeatingCharacter(str) {
  const charMap = {};
  // create a map of characters and their count
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    // charMap[char] = (charMap[char] || 0) + 1;
  }
  //
  for (let char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
