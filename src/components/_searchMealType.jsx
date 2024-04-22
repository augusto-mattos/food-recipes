import { useState } from "react";
import fetchMealType from "../data/_mealType";

function SearchMealType() {
  const [selectedMealType, setSelectedMealType] = useState("");

  const handleMealType = (event) => {
  setSelectedMealType(event.target.value);
  };

  const fetchRecipes = async () => {
    try {
      const response = await fetchMealType(selectedMealType);
      console.log(response);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  return (
    <div className="category-container">
      <h5>Tipo de refeição</h5>
      <div className="filters-container">
        <select
          value={selectedMealType}
          onChange={handleMealType}
          className="cuisine-selector"
        >
          <option value="">Selecione uma opção</option>
          <option value="breakfast">Breakfast</option>
        <option value="dinner">Dinner</option>
        <option value="lunch">Lunch</option>
        <option value="snack">Snack</option>
        <option value="teatime">Teatime</option>
        </select>
        <button
          id="fetchButton"
          className={selectedMealType ? "selected" : ""}
          onClick={fetchRecipes}
        >
          Go
        </button>
      </div>
    </div>
  ) 
}

export default SearchMealType;