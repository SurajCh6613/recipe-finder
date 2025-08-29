export default function SearchBar({ setIngredient, searchRecipe }) {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter ingredient (e.g. chicken)"
        className="border p-2 rounded w-64"
      />
      <button
        onClick={()=>searchRecipe()}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}
