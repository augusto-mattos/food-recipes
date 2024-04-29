/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchMealType({ setMealType }) {
  const [selectedMealType, setSelectedMealType] = useState("");

  const handleMealType = (event) => {
    const selectedValue = event.target.value;
    setSelectedMealType(selectedValue);
    setMealType(selectedValue); 
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
      </div>
    </div>
  );
}

export default SearchMealType;
