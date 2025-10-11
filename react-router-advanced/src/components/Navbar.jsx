import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
