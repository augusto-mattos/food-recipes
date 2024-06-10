import { useNavigate } from "react-router-dom";
import { useState } from "react";

import SearchCuisineType from "./_searchCuisineType";
import SearchDietLabel from "./_searchDietLabel";
import SearchMealType from "./_searchMealType";

import fetchAdvancedSearch from "../data/_fetchAdvancedSearch";

function AdvancedSearch() {
  const navigate = useNavigate();

  const [cuisineType, setCuisineType] = useState("");
  const [diet, setDiet] = useState("");
  const [mealType, setMealType] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await fetchAdvancedSearch(mealType, diet, cuisineType);
      console.log(response);
      navigate("/recipes-list");
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  return (
    <section id="search" className="search-recipe-container">
      <div className="search-title">
        <h3>Encontre novas receitas por categoria</h3>
        <p>Selecione as categorias desejadas para fazer sua busca</p>
      </div>
      <div className="category-filters">
        <SearchCuisineType setCuisineType={setCuisineType} />
        <SearchDietLabel setDiet={setDiet} />
        <SearchMealType setMealType={setMealType} />
      </div>
      <button
        id="fetchButton"
        onClick={fetchRecipes}
        className={mealType || diet || cuisineType ? "selected" : ""}
      >
        Vai
      </button>
    </section>
  );
}

export default AdvancedSearch;
