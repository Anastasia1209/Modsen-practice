import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { BookCardProps } from "../../services/types";
import styles from "./BookCard.module.css";

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Grid container spacing={4} justifyContent="flex-start">
      {book &&
        book.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
            <Link to={`/book/${book.id}`} style={{ textDecoration: "none" }}>
              <Card
                // className={styles.card}
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
                    margin: "20px 0",
                    filter: "drop-shadow(10px 10px 10px #404040)",
                  }}
                  // className={styles.cardImage}
                />
                <CardContent
                  // className={styles.cardContent}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    //className={styles.genre}
                    sx={{
                      color: "#b8b8b8",
                      fontSize: "15px",
                      textDecoration: "underline",
                    }}
                  >
                    {book.genre && book.genre.join(", ")}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    // className={styles.title}
                    sx={{ lineHeight: 1.2 }}
                  >
                    {book.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    // className={styles.authors}
                    sx={{ marginTop: "10px" }}
                  >
                    {book.authors && book.authors.join(", ")}
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
