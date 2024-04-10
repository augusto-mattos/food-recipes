import { useEffect, useState } from "react";
import { fetchDataRecipes } from "../../data/_dataRecipe";
import RecipeHeader from "../../components/_recipeHeader";
import IngredientsList from "../../components/_ingredientsList";

function Recipe() {
  const currentURL = window.location.href;
  const urlParts = currentURL.split("/");
  const recipeId = urlParts[urlParts.length - 1];

  const [loading, setLoading] = useState(true);
  const [recipeData, setRecipeData] = useState(null);

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
      <IngredientsList />
    </>
  );
}

export default Recipe;
