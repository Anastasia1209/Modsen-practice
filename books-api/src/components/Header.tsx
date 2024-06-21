import React, { useState } from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { Book } from "../services/types";

const Header: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = (query: string, category: string, sort: string) => {
    console.log(`Search query: ${query}, Category: ${category}, Sort: ${sort}`);
    const filteredBooks = books
      //  .filter((book) => category === "all" || book.genre === category)
      .sort((a, b) =>
        sort === "newest"
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : 0
      );
    setBooks(filteredBooks);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#ededed",
        boxShadow: 2,
        py: 2,
        mb: 4,
        textAlign: "center",
      }}
    >
      <Box sx={{ mb: 3, mt: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: "#3b3b3b", fontWeight: "bold", fontSize: "2rem" }}
        >
          Search For Books
        </Typography>
      </Box>
      <SearchForm onSearch={handleSearch} />
    </Container>
  );
};

export default Header;
