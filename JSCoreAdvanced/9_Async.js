const urlsApi = [
  "https://randomuser.me/api",
  "https://jsonplaceholder.typicode.com/posts/1",
];

async function getData(urlsApi) {
  const promises = urlsApi.map((url) =>
    fetch(url).then((response) => response.json())
  );

  const result = await Promise.all(promises);
  return result;
}

getData(urlsApi)
  .then((result) => console.log("Result: ", result))
  .catch((error) => console.log("Error: ", error));
