// src/store/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  favorites: [],            // User favorites
  recommendations: [],      // Recommended recipes

  // Set recipes and update filtered recipes
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  // Search and filter
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const lowerTerm = searchTerm.toLowerCase();
    set({
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerTerm) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerTerm))
      )
    });
  },

  // Favorites actions
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate mock recommendations based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(recipe =>
      !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  }
}));
