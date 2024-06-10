import { useEffect, useState } from "react";
import fetchRandomRecipes from "../data/_randomRecipes";
import CardRecipe from "./_cardRecipe";

function FeaturedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        //Verifica se ja tem randomRecipes na sessionStorage. Se nao encontrar, chama o fetchRandomRecipes e salva os items para poder usar
        const storageItems = sessionStorage.getItem("randomRecipes");
        if (!storageItems) {
          console.log("chamou o fetch para buscar outras");
          const fetchedRecipes = await fetchRandomRecipes();
          setRecipes(fetchedRecipes);
        } else {
          setRecipes(JSON.parse(storageItems));
          console.log("pegou as que ja tinha");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    setDisplayedRecipes(recipes.slice(0, 3));
  }, [recipes]);

  const loadMoreRecipes = () => {
    setDisplayedRecipes(recipes);
  };

  return (
    <section className="featured-recipes-section">
      <h3>Receitas em destaque</h3>
      <div className="btn-container">
        <button className="view-more-btn" onClick={loadMoreRecipes}>
          View more
        </button>
      </div>
      <div className="top-recipes">
        {displayedRecipes.map((recipe, index) => (
          <CardRecipe key={index} id={recipe.recipe.uri} {...recipe.recipe} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedRecipes;
