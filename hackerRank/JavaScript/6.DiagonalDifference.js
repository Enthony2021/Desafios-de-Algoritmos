function diagonalDifference(arr) {
  let sum1 = 0, sum2 = 0, diff = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        sum1 += arr[i][j];
        sum2 += arr[i][j];
      }

      if (i === 0 && j === 2) {
        sum2 += arr[i][j];
      } else if (i === 2 && j === 0) {
        sum2 += arr[i][j];
      }
    }
  }
  console.log(sum1);
  console.log(sum2);

  diff = sum1 - sum2;

  return diff < 0 ? diff * -1 : diff;
}

const result = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
console.log(result);

// Status: ***Unsolved***