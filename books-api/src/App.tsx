import React, { useState } from "react";
import photo from "./assets/photo.png";
import photo2 from "./assets/photo2.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
import { Book } from "./services/types";
import DetailsBook from "./components/DetailsBook";

function App() {
  const initialBooks = [
    {
      id: "1",
      title: "Book Title 1",
      genre: ["Fiction"],
      authors: ["Author 1", "Author 2"],
      image: photo,
      description: "sssssssssssssssssssssss",
      date: "2023-01-01",
    },
    {
      id: "2",
      title: "Book Title 2",
      genre: ["Fantasy"],
      authors: ["Author 3"],
      image: photo,
      description: "sssssssssssssssssssssss",
      date: "2022-01-01",
    },
    {
      id: "3",
      title: "Book Title 3",
      genre: ["Science", "Fiction"],
      authors: ["Author 4", "Auth4"],
      image: photo2,
      description: "sssssssssssssssssssssss",
      date: "2023-01-01",
    },
    {
      id: "4",
      title: "Book Title 2",
      genre: ["Fantasy"],
      authors: ["Author 3"],
      image: "/path/to/image2.jpg",
      description: "sssssssssssssssssssssss",
      date: "2021-01-01",
    },
    {
      id: "5",
      title: "Book Title 3",
      genre: ["Science Fiction"],
      authors: ["Author 4"],
      image: "/path/to/image3.jpg",
      description: "sssssssssssssssssssssss",
      date: "2021-01-01",
    },
  ];
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleSearch = (query: string) => {
    console.log(`Search query: ${query}`);

    if (query.trim() === "") {
      setBooks(initialBooks);
    } else {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );

      setBooks(filteredBooks);
    }
  };
  return (
    <div className="App">
      <Header books={books} setBooks={setBooks} handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<BookCard book={books} />} />
        <Route path="/book/:id" element={<DetailsBook books={books} />} />
      </Routes>
      {/* <BookCard book={books} /> */}
      {/* <DetailsBook book={books[2]}></DetailsBook> */}
    </div>
  );
}

export default App;
