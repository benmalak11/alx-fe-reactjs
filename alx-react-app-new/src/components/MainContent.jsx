import React from "react";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#eef2f3",
        minHeight: "200px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "darkred" }}>
        Explore the World
      </h2>
      <p style={{ textAlign: "center", fontSize: "18px" }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;