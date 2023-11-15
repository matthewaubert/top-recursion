// iterative Fibonacci function
// input: number 'n'
// output: array containing 'n' number of nums from Fibonacci Sequence
function fibs(n) {
  // if n less than 1, inform user of error
  if (n < 1) return 'Error: input must be greater than 0';
  // if n is 1, return [0]
  if (n === 1) return [0];

  const arr = [0, 1];
  // do this n - 2 times
  for (let i = 0; i < n - 2; i++) {
    // push to arr sum of 2 last nums in arr
    arr.push(arr[i] + arr[i + 1]);
  }

  return arr;
}

console.log(fibs(-1)); // 'Error: argument must be greater than 0'
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(5)); // [0, 1, 1, 2, 3]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]