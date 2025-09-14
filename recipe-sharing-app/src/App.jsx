// src/App.jsx (HomePage section)
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function HomePage() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    const recipes = [
      { id: 1, title: 'Pasta', prepTime: 20, ingredients: ['pasta', 'tomato'] },
      { id: 2, title: 'Salad', prepTime: 10, ingredients: ['lettuce', 'tomato'] },
      { id: 3, title: 'Pizza', prepTime: 30, ingredients: ['flour', 'cheese', 'tomato'] },
    ];
    setRecipes(recipes);
  }, [setRecipes]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <SearchBar />
      <FavoritesList />
      <RecommendationsList />
      <RecipeList />
    </div>
  );
}
