import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/blog/1">Blog Post 1</Link> or <Link to="/blog/2">Blog Post 2</Link>
      </p>
    </div>
  );
}

export default Home;

