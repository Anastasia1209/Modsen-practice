import React, { useState } from "react";
import SearchForm from "../SearchForm";
import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { Book } from "../../services/types";
interface HeaderProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  handleSearch: (
    query: string,
    category: string,
    sort: string
  ) => Promise<void>;
}
const Header: React.FC<HeaderProps> = ({ books, setBooks, handleSearch }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#ededed",
        boxShadow: 2,
        py: 2,
        mb: 4,
        textAlign: "center",
        width: "100%",
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
      {/* <SearchForm onSearch={() => {}} />{" "} */}
      <SearchForm onSearch={handleSearch} />
    </Container>
  );
};

export default Header;
