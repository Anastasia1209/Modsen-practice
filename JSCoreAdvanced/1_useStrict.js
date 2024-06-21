"use strict";

function findVowels(str) {
  let matchVowels = str.match(/[aeioyu]/gi);
  const sum = matchVowels.length;
  return sum;
}
console.log(findVowels("Hello, World! It's me Anastasiya"));
