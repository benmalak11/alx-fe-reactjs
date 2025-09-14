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
