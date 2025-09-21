// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id} className="border p-3 rounded mb-2">
          <Link to={`/recipe/${recipe.id}`} className="font-medium">{recipe.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
import React from 'react';
import { useRecipeStore } from '../recipeStore';

export default function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recommended For You</h2>
      <button onClick={generateRecommendations} style={{ marginBottom: '10px' }}>
        Refresh Recommendations
      </button>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}
