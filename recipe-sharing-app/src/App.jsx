import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Add Recipe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
