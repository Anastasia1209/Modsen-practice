import axios from "axios";
import { SearchResult, GoogleBooksResponse } from "../types/types";
import { BASE_URL } from "../constants/urls";

const apiKey = process.env.REACT_APP_API_KEY;
const START_INDEX = 0;
const MAX_RESULT = 30;
export const searchBooks = async (
  query: string,
  category: string,
  sort: string,
  startIndex: number = START_INDEX,
  maxResults: number = MAX_RESULT
): Promise<SearchResult> => {
  try {
    const params: Record<string, any> = {
      q: query || "",
      key: apiKey,
      startIndex: startIndex,
      maxResults: maxResults,
    };

    if (category && category !== "all") {
      params.q += `+subject:${category}`;
    }
    if (sort) {
      params.orderBy = sort.toLowerCase();
    }

    const response = await axios.get<GoogleBooksResponse>(
      `${BASE_URL}/volumes`,
      {
        params,
      }
    );
    const totalItems = response.data.totalItems;
    const books = response.data.items.map((item) => ({
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
