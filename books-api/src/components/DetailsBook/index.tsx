import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Book } from "../../services/types";
import { useParams } from "react-router-dom";

interface DetailsBookProps {
  book: Book;
}

const DetailsBook: React.FC<DetailsBookProps> = ({ book }) => {
  const { id } = useParams<{ id: string }>();
  // const book = books.find((book: Book) => book.id === id);
  if (!book || book.id !== id) {
    return <Typography variant="h5">Book not found</Typography>;
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
        <Card
          sx={{ maxWidth: "99%", backgroundColor: "#f7f7f7", boxShadow: 0 }}
        >
          <CardMedia
            component="img"
            height="500"
            image={book.image}
            alt="Book Cover"
            sx={{
              objectFit: "contain",
              height: "500px",
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            textAlign: "left",
            padding: "20px",
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            {book.genre.join(", ")}
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ padding: " 25px 0 0 0 " }}
          >
            {book.title}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: "#a1a1a1" }}
          >
            {book.authors.join(", ")}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {book.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DetailsBook;
