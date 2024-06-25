const urlsApi = [
  "https://randomuser.me/api",
  "https://jsonplaceholder.typicode.com/posts/1",
];

function getDataPromise(urlsApi) {
  return new Promise(function (resolve, reject) {
    const promises = urlsApi.map((url) =>
      fetch(url).then((response) => response.json())
    );
    Promise.all(promises)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
getDataPromise(urlsApi)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
