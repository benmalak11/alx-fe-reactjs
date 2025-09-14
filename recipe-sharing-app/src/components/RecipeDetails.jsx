// src/components/RecipeDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <p><strong>Preparation Time:</strong> {recipe.prepTime} mins</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
    </div>
  );
};

export default RecipeDetail;
