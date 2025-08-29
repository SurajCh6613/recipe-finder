import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import Favorites from "./Favorites";

export default function Home() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const searchRecipe = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    setRecipes(res.data.meals.slice(0, 20));
  };

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      setRecipes(res.data.meals.slice(0, 20));
    };
    fetchMeal();
  }, []);

  const toggleFavorite = (meal) => {
    let updatedFavorites;
    if (favorites.find((fav) => fav.idMeal === meal.idMeal)) {
      updatedFavorites = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
    } else {
      updatedFavorites = [...favorites, meal];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-4">
        Find Recipes by Ingredient
      </h1>
      <SearchBar setIngredient={setIngredient} searchRecipe={searchRecipe} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-4">
        {recipes.length > 0 ? (
          recipes.map((meal, index) => (
            <RecipeCard
              meal={meal}
              key={index}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.some((fav) => fav.idMeal === meal.idMeal)}
            />
          ))
        ) : (
          <p className="text-center text-3xl text-gray-400">Loading.........</p>
        )}
      </div>
    </div>
  );
}
