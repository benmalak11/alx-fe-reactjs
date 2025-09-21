// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      className="p-2 border rounded w-full mb-4"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
import React from 'react';
import { useRecipeStore } from '../recipeStore';

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
    />
  );
}
