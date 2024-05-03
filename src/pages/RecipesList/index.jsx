import { useState, useEffect } from "react";
import CardRecipe from "../../components/_cardRecipe";

function RecipesList() {
  
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  
  useEffect(() => { 
      try {
        const searchResults = sessionStorage.getItem("recipeSearchResults");
        const randomRecipes = sessionStorage.getItem("randomRecipes");

        if (searchResults) {
          console.log("Usando resultados de busca salvos");
          setRecipes(JSON.parse(searchResults));
        } else if (randomRecipes) {
          console.log("Usando receitas aleatórias salvas");
          setRecipes(JSON.parse(randomRecipes));
        } else {
          console.log("Nenhum resultado encontrado");
          setRecipes([]);
        }
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
  }, []);

  useEffect(() => {
    setDisplayedRecipes(recipes.slice(0, 3));
  }, [recipes]);

  const loadMoreRecipes = () => {
    setDisplayedRecipes(recipes);
  };

  return (
    <section className="featured-recipes-section">
      <h3>Resultados da busca</h3>
      <div className="btn-container">
        <button className="view-more-btn" onClick={loadMoreRecipes}>View more</button>
      </div>
      <div className="top-recipes">
      {displayedRecipes.map((recipe, index) => (
          <CardRecipe
            key={index}
            id={recipe.recipe.uri}
            {...recipe.recipe}
          />
        ))}
      </div>
    </section>
  );
}

export default RecipesList;
