import { useState, useEffect } from "react";

// Custom hook to simulate authentication
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  return isAuthenticated;
}
