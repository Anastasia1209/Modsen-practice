import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import DetailsBook from "../components/DetailsBook";
import { Book } from "../types/types";
import { searchBooks } from "../services/api";

const Main: React.FC = () => {
  const initialBooks: Book[] = [];
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    query: "",
    category: "all",
    sort: "relevance",
  });

  const maxResPage = 30;

  const handleSearch = async () => {
    setLoading(true);
    const { query, category, sort } = searchParams;

    if (query.trim() === "") {
      setBooks(initialBooks);
      setTotalItems(0);
      setStartIndex(0);
      setLoading(false);
    } else {
      try {
        const { books: respBooks, totalItems: respTotalItems } =
          await searchBooks(query, category, sort, 0, maxResPage);

        setBooks(respBooks);
        setTotalItems(respTotalItems);
        setStartIndex(maxResPage);
      } catch (error) {
        console.error("Error fetching books: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const loadMoreBooks = async () => {
    setLoading(true);
    const { query, category, sort } = searchParams;
    try {
      const { books: moreBooks } = await searchBooks(
        query,
        category,
        sort,
        startIndex,
        maxResPage
      );

      setBooks([...books, ...moreBooks]);
      setStartIndex(startIndex + maxResPage);
    } catch (error) {
      console.error("Error loading more books: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchParamsChange = (
    newSearchParams: Partial<typeof searchParams>
  ) => {
    setSearchParams({
      ...searchParams,
      ...newSearchParams,
    });
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      <Header
        books={books}
        setBooks={setBooks}
        handleSearch={handleSearch}
        handleSearchParamsChange={handleSearchParamsChange}
      />
      {isHomePage && (
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          {`Found ${totalItems} results`}
        </Typography>
      )}
      {isHomePage && totalItems === 0 && (
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          Start searching to see results
        </Typography>
      )}
      {loading && <CircularProgress sx={{ margin: "20px" }} />}
      <Routes>
        <Route path="/" element={<BookCard books={books} />} />
        <Route path="/book/:id" element={<DetailsBook />} />
      </Routes>

      {isHomePage && books.length < totalItems && (
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
