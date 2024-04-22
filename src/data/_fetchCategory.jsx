import { API_KEY, API_URL, APP_ID } from "./_constants";

async function fetchCategory(params) {
  try {
    let url = `${API_URL}?type=public&app_id=${APP_ID}&app_key=${API_KEY}`;

    if (params.cuisineType) {
      url += `&cuisineType=${params.cuisineType}`;
    }
    if (params.dietLabel) {
      url += `&diet=${params.dietLabel}`;
    }
    if (params.mealType) {
      url += `&mealType=${params.mealType}`;
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
    sessionStorage.setItem("dataCategory", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    throw error;
  }
}

export default fetchCategory;
