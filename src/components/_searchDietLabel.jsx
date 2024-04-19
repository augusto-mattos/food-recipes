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
    <section>
    <h4>
        Busca por categorias
    </h4>
    <div>
      <h5>
        Cuisine type
      </h5>
      <select value={selectedDiet} onChange={handleDietChange}>
      <option value="balanced">balanced</option>
        <option value="high-fiber">high-fiber</option>
        <option value="high-protein">high-protein</option>
        <option value="low-carb">low-carb</option>
        <option value="low-fat">low-fat</option>
        <option value="low-sodium">low-sodium</option>
      </select>
    </div>
    <button onClick={fetchRecipes}>Buscar</button>
    </section>
  ) 
}

export default SearchDietLabel;