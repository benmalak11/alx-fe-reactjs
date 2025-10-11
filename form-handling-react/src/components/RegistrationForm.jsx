import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("User Registered:", { username, email, password });

    // Simulate a mock API call
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("API Response:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>User Registration (Controlled Form)</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
