import { API_KEY, API_URL, APP_ID } from "./_constants";

async function fetchMealType(mealType) {
  try {
    const url = `${API_URL}?type=public&${APP_ID}&${API_KEY}&mealType=${mealType}`;

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
    sessionStorage.setItem("mealType", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    throw error;
  }
}

export default fetchMealType;
