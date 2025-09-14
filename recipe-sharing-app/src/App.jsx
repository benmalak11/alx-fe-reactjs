import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
        <header style={{ marginBottom: 20 }}>
          <h1>🍲 Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
