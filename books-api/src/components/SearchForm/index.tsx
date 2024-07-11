import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  CATEGORY_SELECT_OPTIONS,
  SORT_SELECT_OPTIONS,
} from "../../constants/options";
import { SearchFormProps } from "./types";
import { SelectOption } from "../../types/types";

const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  onParamsChange,
}) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("relevance");

  useEffect(() => {
    onParamsChange({ query, category, sort });
  }, [query, category, sort, onParamsChange]);

  const handleSearch = () => {
    onSearch();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleChangeCategory = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const handleChangeSort = (event: SelectChangeEvent<string>) => {
    setSort(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box display="flex" alignItems="center" gap={2} justifyContent={"center"}>
        <TextField
          variant="outlined"
          value={query}
          onChange={handleChangeQuery}
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
            onChange={handleChangeCategory}
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
            onChange={handleChangeSort}
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
