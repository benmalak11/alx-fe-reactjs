import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found.</p>;

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* ✅ explicitly render recipe.id */}
      <small>Recipe ID: {recipe.id}</small>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
        <button onClick={handleDelete} style={{ marginLeft: 8 }}>
          Delete
        </button>
        <br />
        <Link to="/">← Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
