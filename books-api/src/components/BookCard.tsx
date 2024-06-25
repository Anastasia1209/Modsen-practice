import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { Book } from "../services/types";

interface BookCardProps {
  book: Book[];
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Grid container spacing={4} justifyContent="flex-start">
      {book.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/book/${book.id}`} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#f7f7f7",
                boxShadow: 0,
                margin: "0 20px",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={book.image}
                alt="Book Image"
                sx={{
                  objectFit: "contain",
                  height: "200px",
                }}
              />
              <CardContent
                sx={{
                  textAlign: "left",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#b8b8b8",
                    fontSize: "15px",
                  }}
                >
                  {book.genre.join(", ")}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.authors.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookCard;
