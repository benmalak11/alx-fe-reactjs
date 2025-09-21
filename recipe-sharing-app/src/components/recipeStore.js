import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
  setRecipes: (recipes) => set({ recipes }),
}));

import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
}));
