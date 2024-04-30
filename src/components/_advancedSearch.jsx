import { useNavigate } from "react-router-dom";
import { useState } from "react";

import SearchCuisineType from "./_searchCuisineType";
import SearchDietLabel from "./_searchDietLabel";
import SearchMealType from "./_searchMealType";

import fetchAdvancedSearch from "../data/_fetchAdvancedSearch";

function AdvancedSearch() {

  const navigate = useNavigate();

  const [cuisineType, setCuisineType] = useState("");
  const [dietLabel, setDietLabel] = useState("");
  const [mealType, setMealType] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await fetchAdvancedSearch(mealType, dietLabel, cuisineType);
      console.log(response);
      navigate("/recipes-list");
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  return (
    <section className="search-recipe-container">
    <div>
      <h3>Encontre novas receitas por categoria</h3>
      <p>
        Selecione uma categoria e clique apenas uma categoria por pesquisa
      </p>
    </div>
    <div className="category-filters">
      <SearchCuisineType setCuisineType={setCuisineType} />
      <SearchDietLabel setDietLabel={setDietLabel} />
      <SearchMealType setMealType={setMealType} />
    </div>
      <button id="fetchButton" onClick={fetchRecipes} className={mealType || dietLabel || cuisineType ? "selected" : ""} >
        Vai
      </button>
  </section>
  );
}

export default AdvancedSearch;
