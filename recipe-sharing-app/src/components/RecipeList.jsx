// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  if (filteredRecipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredRecipes.map(recipe => (
        <Link
          to={`/recipe/${recipe.id}`}
          key={recipe.id}
          className="border p-4 rounded shadow block hover:shadow-lg transition"
        >
          <h3 className="font-bold text-lg">{recipe.title}</h3>
          <p>Preparation Time: {recipe.prepTime} mins</p>
          <p>Ingredients: {recipe.ingredients.join(', ')}</p>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
