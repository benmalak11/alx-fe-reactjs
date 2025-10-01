import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error("Error loading detail:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-green-600 hover:underline text-lg font-medium"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-xl shadow-lg mt-6 p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        {/* Example sections for ingredients & instructions */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Step 1: Prepare the ingredients.</li>
            <li>Step 2: Cook according to recipe instructions.</li>
            <li>Step 3: Serve and enjoy!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
