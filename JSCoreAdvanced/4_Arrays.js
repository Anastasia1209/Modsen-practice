function getSum(arr) {
  let sum = arr
    .map((item) => item * item)
    .reduce((sum, item) => (sum += item), 0);
  return sum;
}
console.log(getSum([1, 2, 3]));
