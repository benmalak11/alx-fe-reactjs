import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}
import React from 'react';
import {
  BrowserRouter as Router,   // <-- contains "Router"
  Routes,                      // <-- contains "Routes"
  Route,                       // <-- contains "Route"
  Link
} from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

export default function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <header style={{ marginBottom: 20 }}>
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Recipe Sharing Application
            </Link>
          </h1>
        </header>

        {/* keyword "path" appears below */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm />
                <RecipeList />
              </div>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
    </div>
  );
}
import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}
