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
        Travel opens your heart, broadens your mind, and fills your life with
        stories to tell.
      </p>
    </main>
  );
}

export default MainContent;