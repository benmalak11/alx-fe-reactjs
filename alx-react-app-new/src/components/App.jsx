import React from "react";
import Header from "./Header";
import UserProfile from "./UserProfile";
import MainContent from "./MainContent";
import Footer from "./Footer";

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

export default App;
