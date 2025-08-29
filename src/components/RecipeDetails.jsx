import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(res.data.meals[0]);
    };
    fetchMeal();
  }, [id]);

  if (!meal) return <p className="text-center mt-10">Loading...</p>;
  // Extract ingredients & measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }
  return (
    <div className="p-6 max-w-3xl mx-auto shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-lg shadow mb-4 w-44 md:w-100"
      />

      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc list-inside mt-2">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <p className="mt-2 whitespace-pre-line">{meal.strInstructions}</p>

      {meal.strYoutube && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Video Tutorial</h2>
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
}
