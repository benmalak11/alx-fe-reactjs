import React from "react";

function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue", marginBottom: "10px" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: "italic", color: "darkslategray" }}>{props.bio}</p>
    </div>
  );
}

// src/ProfilePage.jsx
import UserInfo from "./UserInfo";

function ProfilePage() {
  return <UserInfo />;
}

export default ProfilePage;
