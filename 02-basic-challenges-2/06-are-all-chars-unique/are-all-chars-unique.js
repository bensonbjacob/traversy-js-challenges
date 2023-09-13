function areAllCharactersUnique(str) {
  const count = new Set();
  for (let i = 0; i < str.length; i++) {
    if (count.has(str[i])) {
      return false;
    }
    count.add(str[i]);
  }
  return true;
}

module.exports = areAllCharactersUnique;
