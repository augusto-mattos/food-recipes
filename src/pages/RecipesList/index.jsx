import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardRecipe from "../../components/_cardRecipe";

function RecipesList() {
  
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  
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

  const shuffleRecipes = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleClick = () => {
    navigate("/recipes-list");
    // TODO arrumar esse handleclick para atualizar exibir todos os resultados na mesma pagina e nao apenas 3
    // TODO mudar a posicao do botao?
    // TODO incluir messagem indicando que é necessario fazer uma nova busca
  };

  return (
    <section className="featured-recipes-section">
      <h3>Resultados da busca</h3>
      <div className="btn-container">
        <button className="view-more-btn" onClick={handleClick}>View more</button>
      </div>
      <div className="top-recipes">
        {shuffleRecipes(recipes)
          .slice(0, 3)
          .map((recipe, index) => (
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
