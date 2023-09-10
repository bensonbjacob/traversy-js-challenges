// function removeDuplicates(array) {
//   // create a new array to store unique values
//   const uniqueArray = [];
//   // loop through the array
//   for (let i = 0; i < array.length; i++) {
//     // if the unique array does not include the current value
//     if (!uniqueArray.includes(array[i])) {
//       // push the value to the unique array
//       uniqueArray.push(array[i]);
//     }
//   }
//   // return the unique array
//   return uniqueArray;
// }

function removeDuplicates(array) {
  return Array.from(new Set(array));
}

module.exports = removeDuplicates;
