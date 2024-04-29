import { API_KEY, API_URL, APP_ID } from "./_constants";

async function fetchAdvancedSearch(mealType = "", dietLabel = "", cuisineType = "") {
  try {
    let url = `${API_URL}?type=public&${APP_ID}&${API_KEY}&`;

    if (mealType) {
      url += `&mealType=${mealType}`;
    }
    if (dietLabel) {
      url += `&dietLabel=${dietLabel}`;
    }
    if (cuisineType) {
      url += `&cuisineType=${cuisineType}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar receitas");
      // INCLUIR UMA MENSAGEM AO USUARIO EM CASO DE ERRO
    }

    const data = await response.json();
    sessionStorage.setItem("recipeSearchResults", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    throw error;
  }
}

export default fetchAdvancedSearch;
