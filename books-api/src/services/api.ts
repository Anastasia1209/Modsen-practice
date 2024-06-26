import axios from "axios";

const API_KEY = "AIzaSyAjB7Be0EgzUcY2Nsz-nTsoLCw1eXlWXXU";
const BASE_URL = "https://www.googleapis.com/books/v1";

export const searchBooks = async (
  query: string,
  category: string,
  sort: string,
  maxResults: number = 30
) => {
  try {
    const response = await axios.get(`${BASE_URL}/volumes`, {
      params: {
        q: query,
        key: API_KEY,
        subject: category,
        orderBy: sort.toLowerCase(),
        maxResults: maxResults,
      },
    });
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const getBookById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/volumes/${id}`, {
      params: {
        key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching book:", error);
    return null;
  }
};
