import { API_KEY, API_URL, APP_ID } from "./_constants";

export async function fetchDataRecipes(recipeId) {
  try {
    const url = `${API_URL}/${recipeId}?type=public&app_id=${APP_ID}&app_key=${API_KEY}&field=label&field=image&field=yield&field=dietLabels&field=healthLabels&field=ingredientLines&field=ingredients&field=calories&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar dados da receita");
      // INCLUIR UMA MENSAGEM AO USUARIO EM CASO DE ERRO
    }

    const recipeData = await response.json();
    sessionStorage.setItem("recipeData", JSON.stringify(recipeData));
    return recipeData;
  } catch (error) {
    console.error("Erro ao buscar dados da receita:", error);
    throw error;
  }
}
