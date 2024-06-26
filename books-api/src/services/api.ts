import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
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
        key: apiKey,
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
        key: apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching book:", error);
    return null;
  }
};
