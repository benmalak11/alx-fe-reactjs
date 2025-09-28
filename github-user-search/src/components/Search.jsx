import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {user && (
        <div style={{ marginTop: '20px' }}>
          <img src={user.avatar_url} alt={user.login} width="120" />
          <h2>{user.name || user.login}</h2>
          <p>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>} {/* ✅ EXACT TEXT */}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="120" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};
// src/components/Search.jsx
import React, { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";
import UserCard from "./UserCard";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const perPage = 10;

  const doSearch = async (reset = true) => {
    if (reset) {
      setPage(1);
      setResults([]);
      setTotal(0);
    }

    setLoading(true);
    setError(false);
    try {
      const { items, total_count } = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: reset ? 1 : page,
        per_page: perPage,
      });

      if (reset) {
        setResults(items);
      } else {
        setResults((prev) => [...prev, ...items]);
      }
      setTotal(total_count);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doSearch(true);
  };

  const loadMore = async () => {
    setPage((p) => p + 1);
    const nextPage = page + 1;
    setLoading(true);
    try {
      const { items } = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: nextPage,
        per_page: perPage,
      });
      setResults((prev) => [...prev, ...items]);
      setPage(nextPage);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub Advanced User Search</h1>

      <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-3 sm:gap-4 mb-6">
        <input
          className="p-2 border rounded"
          placeholder="Username (text)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          placeholder="Location (city/country)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Min repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          min="0"
        />
        <div className="sm:col-span-3 flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => {
              setUsername("");
              setLocation("");
              setMinRepos("");
              setResults([]);
              setTotal(0);
              setPage(1);
              setError(false);
            }}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">Looks like we cant find the user</p>}

      {!loading && !error && results.length === 0 && (
        <p className="text-center text-gray-500">No users found. Try different filters.</p>
      )}

      <ul className="grid gap-4">
        {results.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>

      {results.length > 0 && results.length < total && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {loading ? "Loading..." : "Load more"}
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Showing {results.length} of {total} results
          </p>
        </div>
      )}
    </div>
  );
}


export default Search;