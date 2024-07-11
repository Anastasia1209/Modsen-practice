import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SearchForm from "../SearchForm";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({
  handleSearch,
  handleSearchParamsChange,
}) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#eae8e8",
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
      <SearchForm
        onSearch={handleSearch}
        onParamsChange={handleSearchParamsChange}
      />
    </Container>
  );
};

export default Header;
