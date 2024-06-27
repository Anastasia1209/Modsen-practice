import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
  const [totalItems, setTotalItems] = useState<number>(0);

  const handleSearch = async (
    query: string,
    category: string,
    sort: string
  ) => {
    console.log(`Search query: ${query}`);

    if (query.trim() === "") {
      setBooks(initialBooks);
      setTotalItems(0);
    } else {
      try {
        const { books: respBooks, totalItems: respTotalItems } =
          await searchBooks(query, category, sort);
        console.log("------");
        console.log(respBooks);
        setBooks(respBooks);
        setTotalItems(respTotalItems);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    }
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="App">
      <Header books={books} setBooks={setBooks} handleSearch={handleSearch} />
      {isHomePage && (
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          {`Found ${totalItems} results`}
        </Typography>
      )}{" "}
      <Routes>
        <Route path="/" element={<BookCard book={books} />} />
        <Route path="/book/:id" element={<DetailsBook />} />
      </Routes>
    </div>
  );
}

export default App;
