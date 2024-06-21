function findUniq(str) {
  const countLet = {};
  let arrStr = str.split("");
  arrStr.forEach((element) => {
    if (countLet[element]) {
      countLet[element]++;
    } else {
      countLet[element] = 1;
    }
  });

  for (let letter of arrStr) {
    if (countLet[letter] === 1) {
      return letter;
    }
  }
  return null;
}
console.log(findUniq("hhello"));
