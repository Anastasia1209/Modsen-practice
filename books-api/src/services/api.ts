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
    const totalItems = response.data.totalItems;
    const books = response.data.items.map((item: any) => ({
      id: item.id,
      title: item.volumeInfo.title,
      genre: item.volumeInfo.categories || [],
      authors: item.volumeInfo.authors || [],
      image: item.volumeInfo.imageLinks
        ? item.volumeInfo.imageLinks.thumbnail
        : "",
      description: item.volumeInfo.description || "",
      date: item.volumeInfo.publishedDate || "",
    }));

    return { books, totalItems };
  } catch (error) {
    console.error("Error fetching books:", error);
    return { books: [], totalItems: 0 };
  }
};

export const getBookById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/volumes/${id}`, {
      params: {
        key: apiKey,
      },
    });

    const item = response.data;
    return {
      id: item.id,
      title: item.volumeInfo.title,
      genre: item.volumeInfo.categories || [],
      authors: item.volumeInfo.authors || [],
      image: item.volumeInfo.imageLinks
        ? item.volumeInfo.imageLinks.thumbnail
        : "",
      description: item.volumeInfo.description || "",
      date: item.volumeInfo.publishedDate || "",
    };
  } catch (error) {
    console.error("Error fetching book:", error);
    return null;
  }
};

export const formatText = (textTag: string) => {
  const parser = new DOMParser();
  const text = parser.parseFromString(textTag, "text/html");
  return text.body.innerHTML;
};
