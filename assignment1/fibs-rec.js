// recursive Fibonacci function (first attempt)
// input: number 'n'
// output: array containing 'n' number of nums from Fibonacci Sequence
function fibsRec(n) {
  // base case: if n less than 1, inform user of error
  if (n < 1) return 'Error: input must be greater than 0';
  // base case: if n is 1, return [0]
  if (n === 1) return [0];
  // base case: if n is 2, return [0, 1]
  if (n === 2) return [0, 1];

  // recursive step: fibsRec(n - 1)
  const arr = fibsRec(n - 1);

  // return arr concat'd with sum of last 2 nums
  return arr.concat(arr[n - 3] + arr[n - 2]);
}

console.log(fibsRec(-1)); // 'Error: argument must be greater than 0'
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(3)); // [0, 1, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]