import React, { useState } from "react";
import photo from "./assets/photo.png";
import photo2 from "./assets/photo2.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
import { Book } from "./services/types";
import DetailsBook from "./components/DetailsBook";
import { Typography } from "@mui/material";
import { searchBooks } from "./services/api";

function App() {
  const initialBooks: Book[] = [];
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [results, setResults] = useState<number>(0);

  const handleSearch = async (
    query: string,
    category: string,
    sort: string
  ) => {
    console.log(`Search query: ${query}`);

    if (query.trim() === "") {
      setBooks(initialBooks);
    } else {
      try {
        const response = await searchBooks(query, category, sort);
        console.log("------");
        console.log(response);
        setBooks(response);
        setResults(response.length);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    }
  };
  return (
    <div className="App">
      <Header books={books} setBooks={setBooks} handleSearch={handleSearch} />
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        {`Found ${results} results`}{" "}
      </Typography>
      <Routes>
        <Route path="/" element={<BookCard book={books} />} />
        {books.map((book) => (
          <Route
            key={book.id}
            path={`/book/${book.id}`}
            element={<DetailsBook book={book} />}
          />
        ))}
        {/* <Route path="/book/:id" element={<DetailsBook book={books} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
