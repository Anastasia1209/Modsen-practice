const express = require("express");
const service = require("./service");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(express.json());

const city = "Minsk";

app.get("/200", async (req, res) => {
  try {
    const data = await service.getWeather({
      q: city,
      appid: process.env.API_KEY,
    });
    res.json(data);
  } catch (error) {
    res.status(error.status).send(error.data);
  }
});

app.get("/400", async (req, res) => {
  try {
    const data = await service.getWeather({
      appid: process.env.API_KEY,
    });
    res.json(data);
  } catch (error) {
    res.status(error.status).send(error.data);
  }
});

app.get("/401", async (req, res) => {
  try {
    const data = await service.getWeather({
      q: city,
    });
    res.json(data);
  } catch (error) {
    res.status(error.status).send(error.data);
  }
});

app.get("/404", async (req, res) => {
  try {
    const data = await service.getWeather({
      q: city + "!",
      appid: process.env.API_KEY,
    });
    res.json(data);
  } catch (error) {
    res.status(error.status).send(error.data);
  }
});

app.delete("/405", async (req, res) => {
  const city = req.query.city;
  try {
    const result = await service.deleteWeather({
      q: city,
      appid: process.env.API_KEY,
    });
    res.json(result);
  } catch (error) {
    res.status(error.status).send(error.data);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
