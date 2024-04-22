import { useState } from "react";
import fetchDietLabel from "../data/_dietLabel";

function SearchDietLabel() {
  const [selectedDiet, setSelectedDiet] = useState("");

  const handleDietChange = (event) => {
    setSelectedDiet(event.target.value);
  };

  const fetchRecipes = async () => {
    try {
      const response = await fetchDietLabel(selectedDiet);
      console.log(response);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  return (
    <div className="category-container">
      <h5>Dieta</h5>
      <div className="filters-container">
        <select
          value={selectedDiet}
          onChange={handleDietChange}
          className="cuisine-selector"
        >
          <option value="">Selecione uma opção</option>
          <option value="balanced">Balanced</option>
          <option value="high-fiber">High-fiber</option>
          <option value="high-protein">High-protein</option>
          <option value="low-carb">Low-carb</option>
          <option value="low-fat">Low-fat</option>
          <option value="low-sodium">Low-sodium</option>
        </select>
      </div>
        <button
          id="fetchButton"
          className={selectedDiet ? "selected" : ""}
          onClick={fetchRecipes}
        >
          Go
        </button>
    </div>
  );
}

export default SearchDietLabel;
