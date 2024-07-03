import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import Header from "./Header";
import BookCard from "./BookCard";
import { Book } from "../services/types";
import { searchBooks } from "../services/api";
import "../App.css";

const Main: React.FC = () => {
  const initialBooks: Book[] = [];
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [currentQuery, setCurrentQuery] = useState<string>("");
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [currentSort, setCurrentSort] = useState<string>("relevance");
  const maxResPage = 30;

  const handleSearch = async (
    query: string,
    category: string,
    sort: string
  ) => {
    console.log(`Search query: ${query}, category: ${category}, sort: ${sort}`);

    if (query.trim() === "") {
      setBooks(initialBooks);
      setTotalItems(0);
      setStartIndex(0);
    } else {
      try {
        const { books: respBooks, totalItems: respTotalItems } =
          await searchBooks(query, category, sort, 0, maxResPage);

        console.log("------");
        console.log(respBooks);

        setBooks(respBooks);
        setTotalItems(respTotalItems);
        setStartIndex(maxResPage);
        setCurrentQuery(query);
        setCurrentCategory(category);
        setCurrentSort(sort);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    }
  };

  const loadMoreBooks = async () => {
    try {
      const { books: moreBooks } = await searchBooks(
        currentQuery,
        currentCategory,
        currentSort,
        startIndex,
        maxResPage
      );

      setBooks([...books, ...moreBooks]);
      setStartIndex(startIndex + maxResPage);
    } catch (error) {
      console.error("Error loading more books: ", error);
    }
  };

  useEffect(() => {
    handleSearch("", "all", "relevance");
  }, []);

  return (
    <div className="App">
      <Header books={books} setBooks={setBooks} handleSearch={handleSearch} />
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        {`Found ${totalItems} results`}
      </Typography>
      <BookCard book={books} />
      {books.length < totalItems && (
        <Button
          variant="contained"
          onClick={loadMoreBooks}
          sx={{ margin: "20px" }}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default Main;
