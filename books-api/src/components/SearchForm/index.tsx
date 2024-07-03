import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import {
  CATEGORY_SELECT_OPTIONS,
  SORT_SELECT_OPTIONS,
} from "../../services/options";
import { SelectOption } from "../../services/types";
import { SearchFormProps } from "../../services/types";

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("relevance");

  const handleSearch = () => {
    onSearch(query, category, sort);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box display="flex" alignItems="center" gap={2} justifyContent={"center"}>
        <TextField
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
              backgroundColor: "white",
              height: "35px",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: 0,
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: "#ccc",
            color: "black",
            borderRadius: 0,
            boxShadow: 0,
            "&:hover": {
              backgroundColor: "#999",
            },
            height: "35px",
            padding: "8px 10px",
          }}
        >
          Search
        </Button>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="category-label">Categories</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Categories"
            sx={{ height: "35px" }}
          >
            <MenuItem value="all">All</MenuItem>
            {CATEGORY_SELECT_OPTIONS.map((option: SelectOption) => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="sort-label">Sorting by</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            label="Sorting by"
            sx={{ height: "35px" }}
          >
            {SORT_SELECT_OPTIONS.map((option: SelectOption) => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchForm;
