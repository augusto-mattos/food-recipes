import { API_KEY, API_URL, APP_ID } from "./constants";

async function fetchRandomRecipes() {
  try {
    const url = `${API_URL}?type=public&${APP_ID}&${API_KEY}&dishType=Starter&random=true`;

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

    const randomRecipes = await response.json();
    const hits = randomRecipes.hits;
    sessionStorage.setItem("randomRecipes", JSON.stringify(hits));
    return hits;
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    throw error;
  }
}

export default fetchRandomRecipes;
