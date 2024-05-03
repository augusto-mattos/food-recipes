/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchDietLabel({ setDiet }) {
  const [selectedDiet, setSelectedDiet] = useState("");

  const handleDietChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDiet(selectedValue);
    setDiet(selectedValue); 
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
    </div>
  );
}

export default SearchDietLabel;
