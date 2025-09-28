import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { searchUsers } from './services/githubService';
import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Search />
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    const result = await searchUsers(query);
    setUsers(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {users.length === 0 && <p>No users found.</p>}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
// src/App.jsx
import React from "react";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Search />
    </div>
  );
}

export default App;