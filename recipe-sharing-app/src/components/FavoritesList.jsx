// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  );
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (favorites.length === 0) return <p>You have no favorite recipes.</p>;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} className="border p-3 rounded mb-2 flex justify-between items-center">
          <Link to={`/recipe/${recipe.id}`} className="font-medium">{recipe.title}</Link>
          <button
            onClick={() => removeFavorite(recipe.id)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
import React from 'react';
import { useRecipeStore } from '../recipeStore';

export default function FavoritesList() {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 && <p>No favorites yet.</p>}
      {favorites.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id} style={{ marginBottom: '10px' }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove Favorite
              </button>
            </div>
          )
      )}
    </div>
  );
}
