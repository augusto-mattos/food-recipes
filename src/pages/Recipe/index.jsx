import { useEffect, useState } from "react";
import { fetchDataRecipes } from "../../data/_dataRecipe";
import RecipeHeader from "../../components/_recipeHeader";

function Recipe() {
  const currentURL = window.location.href;
  const urlParts = currentURL.split("/");
  const recipeId = urlParts[urlParts.length - 1];

  const [loading, setLoading] = useState(true);
  const [recipeData, setRecipeData] = useState(null);

  const storedRecipe =
    JSON.parse(sessionStorage.getItem("recipeData"))?.recipe || {};
  const { ingredientLines, ingredients } = storedRecipe;

  useEffect(() => {
    async function fetchRecipeData() {
      try {
        const data = await fetchDataRecipes(recipeId);
        setRecipeData(data);
        setLoading(false);
      } catch (error) {
        // INCLUIR MSG DE ERRO
        console.error("Erro ao buscar dados da receita:", error);
        setLoading(false);
      }
    }

    fetchRecipeData();
  }, [recipeId]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!recipeData) {
    return <div>Erro ao carregar a receita.</div>;
  }

  return (
    <>
      <RecipeHeader />
      <div>
        {ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </div>
      <div>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </div>
    </>
  );
}

export default Recipe;
