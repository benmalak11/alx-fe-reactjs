
import { useRecipeStore } from '../recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 8 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link to={`/recipes/${recipe.id}`}><button>View</button></Link>
            <Link to={`/edit/${recipe.id}`}><button>Edit</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}
