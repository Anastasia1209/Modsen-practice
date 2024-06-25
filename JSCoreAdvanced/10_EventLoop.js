function generateNums() {
  return new Promise(function (resolve, reject) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (randomNumber > 5) resolve(`Успешно, число: ${randomNumber}`);
      else reject(`Ошибка, число: ${randomNumber}`);
    });
  });
}
generateNums()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
