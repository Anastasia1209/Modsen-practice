function getNum(num) {
  let arr = ("" + num).split("").map(Number);
  let sum = arr[0] + arr[arr.length - 1];
  return sum;
}
console.log(getNum(1536));
