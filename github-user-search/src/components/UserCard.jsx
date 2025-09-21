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
