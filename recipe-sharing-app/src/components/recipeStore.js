// src/store/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],           // All recipes
  searchTerm: '',        // Current search term
  filteredRecipes: [],   // Filtered recipes

  // Update search term and filter recipes
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Filter recipes based on searchTerm
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

  // Set recipes (e.g., from API) and update filteredRecipes
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },
}));
