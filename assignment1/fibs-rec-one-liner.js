// recursive Fibonacci function (one-liner)
// input: number 'n'
// output: array containing 'n' number of nums from Fibonacci Sequence
function fibsRec(n) {
  return n < 1
    ? 'Error: input must be greater than 0'
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 3] + fibsRec(n - 1)[n - 2]];
}

console.log(fibsRec(-1)); // 'Error: argument must be greater than 0'
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(3)); // [0, 1, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]