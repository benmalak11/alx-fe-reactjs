function Login() {
  // Simulate login
  const handleLogin = () => {
    localStorage.setItem("authenticated", "true");
    alert("Logged in!");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
