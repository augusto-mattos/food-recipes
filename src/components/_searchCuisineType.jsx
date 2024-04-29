/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchCuisineType({ setCuisineType }) {
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const handleCuisineChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCuisine(selectedValue);
    setCuisineType(selectedValue); 
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
    </div>
  );
}

export default SearchCuisineType;
