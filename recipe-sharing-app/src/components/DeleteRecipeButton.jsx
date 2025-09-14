import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // go back to recipe list after deleting
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: 8, color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
