import React from "react";

import "./App.css";
//import Main from "./components/Main";
import Header from "./components/Header";
//import SearchForm from "./components/SearchForm";
import BookCard from "./components/BookCard";
import { Book } from "./services/types";
import DetailsBook from "./components/DetailsBook";

function App() {
  const books: Book[] = [
    {
      id: "1",
      title: "Book Title 1",
      genre: ["Fiction"],
      authors: ["Author 1", "Author 2"],
      image: "/path/to/image1.jpg",
      description: "sssssssssssssssssssssss",
      date: "2023-01-01",
    },
    {
      id: "2",
      title: "Book Title 2",
      genre: ["Fantasy"],
      authors: ["Author 3"],
      image: "/path/to/image2.jpg",
      description: "sssssssssssssssssssssss",
      date: "2022-01-01",
    },
    {
      id: "3",
      title: "Book Title 3",
      genre: ["Science", "Fiction"],
      authors: ["Author 4", "Auth4"],
      image: "/path/to/image3.jpg",
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

  return (
    <div className="App">
      <Header />
      <BookCard book={books} />
      {/* <DetailsBook book={books[2]}></DetailsBook> */}
    </div>
  );
}

export default App;
