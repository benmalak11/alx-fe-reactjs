// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecipeStore } from './store/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';

function HomePage() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    const recipes = [
      { id: 1, title: 'Pasta', prepTime: 20, ingredients: ['pasta', 'tomato'] },
      { id: 2, title: 'Salad', prepTime: 10, ingredients: ['lettuce', 'tomato'] },
    ];
    setRecipes(recipes);
  }, [setRecipes]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
