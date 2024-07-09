const axios = require("axios");

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

async function getWeather(params) {
  try {
    const response = await axios.get(BASE_URL, {
      params,
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

async function deleteWeather(params) {
  try {
    const response = await axios.delete(BASE_URL, {
      params,
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}
async function partialWeather(BASE_URL, range) {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Range: range,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

async function makeLongRequest(url) {
  try {
    const response = await axios.get(url);
    return response.status;
  } catch (error) {
    if (error.response) {
      return error.response.status;
    } else {
      console.error("Error:", error);
      return 500; // Возвращаем 500 в случае внутренней ошибки
    }
  }
}
module.exports = {
  getWeather,
  deleteWeather,
};
