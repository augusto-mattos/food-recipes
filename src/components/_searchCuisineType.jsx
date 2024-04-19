import { useState } from "react";
import fetchCuisineType from "../data/_cuisineType";

function SearchCuisineType() {
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
  };

  const fetchRecipes = async () => {
    try {
      const response = await fetchCuisineType(selectedCuisine);
      console.log(response);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  return (
    <section>
    <h4>
        Busca por categorias
    </h4>
    <div>
      <h5>
        Cuisine type
      </h5>
      <select value={selectedCuisine} onChange={handleCuisineChange}>
        <option value="American">American</option>
        <option value="British">British</option>
        <option value="Chinese">Chinese</option>
        <option value="French">French</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
    <button onClick={fetchRecipes}>Buscar</button>
    </section>
  ) 
}

export default SearchCuisineType;