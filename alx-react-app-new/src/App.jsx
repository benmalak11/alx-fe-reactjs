import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Malak" age={22} bio="Loves design, travel, and coffee." />
      <UserProfile name="Romaissae" age={20} bio="Passionate about coding and digital art." />
      <MainContent />
      <Footer />
    </div>
  );
}
import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
// src/App.jsx
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
