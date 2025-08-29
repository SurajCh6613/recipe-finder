import { Link } from "react-router-dom";
export default function RecipeCard({ meal, toggleFavorite, isFavorite }) {
  return (
    <div className="border rounded-lg p-2 shadow text-center">
      <Link to={`recipe/${meal.idMeal}`}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded mb-2"
        />
        <h3 className="font-semibold">{meal.strMeal}</h3>
      </Link>
      <button
        onClick={() => toggleFavorite(meal)}
        className={`mt-2 px-3 py-1 rounded ${
          isFavorite ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
}
