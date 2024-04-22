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
    <div className="category-container">
      <h5>Tipo de cozinha</h5>
      <div className="filters-container">
        <select
          value={selectedCuisine}
          onChange={handleCuisineChange}
          className="cuisine-selector"
        >
          <option value="">Selecione uma opção</option>
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
        <button
          id="fetchButton"
          className={selectedCuisine ? "selected" : ""}
          onClick={fetchRecipes}
        >
          Go
        </button>
    </div>
  );
}

export default SearchCuisineType;
