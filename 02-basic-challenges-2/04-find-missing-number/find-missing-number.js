function findMissingNumber(arr) {
  if (arr.length === 0) {
    return 1;
  }
  const n = arr.length + 1;
  //   sum of n natural numbers = n * (n + 1) / 2
  const sum = (n * (n + 1)) / 2;
  //   // sum of array elements
  //   const arrSum = arr.reduce((acc, curr) => acc + curr);
  // missing number = sum of n natural numbers - sum of array elements

  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return sum - arrSum;
}

module.exports = findMissingNumber;
