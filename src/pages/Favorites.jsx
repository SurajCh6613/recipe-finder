import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const removeFavorites = (meal) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.idMeal !== meal.idMeal
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-4">
      {favorites.length>0?
        favorites.map((fav) => (
          <div
            className="border rounded-lg p-2 shadow text-center"
            key={fav.idMeal}
          >
            <Link to={`/recipe/${fav.idMeal}`}>
              <img
                src={fav.strMealThumb}
                alt={fav.strMeal}
                className="rounded mb-2"
              />
              <h3 className="font-semibold">{fav.strMeal}</h3>
            </Link>
            <button
              onClick={() => removeFavorites(fav)}
              className={`mt-2 px-3 py-1 rounded  text-white bg-red-500`}
            >
              Remove Favorite
            </button>
          </div>
        )):<p className="text-4xl text-gray-500">No Favorites</p>}
    </div>
  );
};

export default Favorites;
