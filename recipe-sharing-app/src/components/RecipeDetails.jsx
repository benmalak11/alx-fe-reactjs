// src/components/RecipeDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  );
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <p><strong>Preparation Time:</strong> {recipe.prepTime} mins</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <button
        onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}
        className={`mt-4 px-4 py-2 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetail;
