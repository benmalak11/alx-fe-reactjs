
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
import { useRecipeStore } from '../recipeStore';

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 && <p>No matching recipes found.</p>}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '16px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
import { useRecipeStore } from '../recipeStore';

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      {filteredRecipes.length === 0 && <p>No matching recipes found.</p>}
      {filteredRecipes.map((recipe) => {
        const isFav = favorites.includes(recipe.id);
        return (
          <div key={recipe.id} style={{ marginBottom: '16px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {isFav ? (
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove Favorite
              </button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>Add Favorite</button>
            )}
          </div>
        );
      })}
    </div>
  );
}
