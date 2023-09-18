function sumOfEvenSquares(numbers) {
  const evenNums = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
  return evenNums;
}

module.exports = sumOfEvenSquares;
