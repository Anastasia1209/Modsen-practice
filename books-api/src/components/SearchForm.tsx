import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import {
  CATEGORY_SELECT_OPTIONS,
  SORT_SELECT_OPTIONS,
} from "../services/options";
import { SelectOption } from "../services/types";

interface SearchFormProps {
  onSearch: (query: string, category: string, sort: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("Relevance");

  const handleSearch = () => {
    onSearch(query, category, sort);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" alignItems="center" gap={2} justifyContent={"center"}>
        <TextField
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{ height: "100%", padding: "8px 16px" }}
        >
          Search
        </Button>
      </Box>
      <Box display="flex" gap={2}>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          justifyContent={"right"}
        >
          <Typography>Categories</Typography>
          <FormControl>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value as string)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {CATEGORY_SELECT_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" alignItems="center" gap={1} sx={{ width: "50%" }}>
          <Typography>Sorting by</Typography>
          <FormControl>
            <Select
              value={sort}
              onChange={(e) => setSort(e.target.value as string)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {SORT_SELECT_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchForm;
