import React from "react";

const Main: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Main page</h2>
      <p style={styles.paragraph}>To find a book enter the title</p>
    </div>
  );
};
const styles = {
  container: {
    padding: "20px",
    textAlign: "center" as const,
    marginTop: "50px",
  },
  heading: {
    fontSize: "24px",
    color: "gray",
  },
  paragraph: {
    fontSize: "20px",
    color: "gray",
  },
};

export default Main;
