// First method
// function formatPhoneNumber(numbers) {
//   const areaCode = numbers.slice(0, 3).join('');
//   const prefix = numbers.slice(3, 6).join('');
//   const lineNumber = numbers.slice(6).join('');
//   return `(${areaCode}) ${prefix}-${lineNumber}`;
// }

//Second method
// function formatPhoneNumber(numbers) {
//   const formattedNumbers = numbers.join('');
//   return `(${formattedNumbers.substring(
//     0,
//     3
//   )}) ${formattedNumbers.substring(
//     3,
//     6
//   )}-${formattedNumbers.substring(6)}`;
// }

//Third method
const formatPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join('')}) ${numbers
    .slice(3, 6)
    .join('')}-${numbers.slice(6).join('')}`;

module.exports = formatPhoneNumber;
