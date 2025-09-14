// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const setRecipes = useRecipeStore(state => state.setRecipes);
  const recipes = useRecipeStore(state => state.recipes);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      prepTime: parseInt(prepTime),
      ingredients: ingredients.split(',').map(i => i.trim())
    };
    setRecipes([...recipes, newRecipe]);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Preparation Time (mins)"
        value={prepTime}
        onChange={e => setPrepTime(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p
