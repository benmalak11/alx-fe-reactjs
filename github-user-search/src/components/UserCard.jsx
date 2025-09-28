import React from 'react';

export default function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
      <img src={user.avatar_url} alt={user.login} width={50} height={50} />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}
// src/components/UserCard.jsx
import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded shadow p-4 flex gap-4 items-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{user.name || user.login}</h3>
        <p className="text-sm text-gray-600">{user.login}</p>
        <p className="text-sm text-gray-600">
          {user.location ? `Location: ${user.location}` : ""}
          {user.public_repos !== undefined ? ` • Repos: ${user.public_repos}` : ""}
        </p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
