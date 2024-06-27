import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import { Book } from "../../services/types";
import { useParams } from "react-router-dom";
import { getBookById, formatText } from "../../services/api";

// interface DetailsBookProps {
//   book: Book;
// }

const DetailsBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      if (id) {
        const fetchedBook = await getBookById(id);
        setBook(fetchedBook);
      }
    };
    fetchBook();
  }, [id]);

  if (!book || book.id !== id) {
    return <Typography variant="h5">Book not found</Typography>;
  }

  const formatDescr = formatText(book.description);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
        <Card
          sx={{ maxWidth: "99%", backgroundColor: "#f7f7f7", boxShadow: 0 }}
        >
          <CardMedia
            component="img"
            height="400"
            image={book.image}
            alt="Book Image"
            sx={{
              objectFit: "contain",
              height: "400px",
              margin: "40px 0",
              filter: "drop-shadow(10px 10px 10px #404040)",
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
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: "#686666" }}
          >
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
            sx={{ color: "#a1a1a1", textDecoration: "underline" }}
          >
            {book.authors.join(", ")}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <div dangerouslySetInnerHTML={{ __html: formatDescr }}></div>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DetailsBook;
