import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchRandomRecipes from "../data/_randomRecipes";
import CardRecipe from "./_cardRecipe";

function FeaturedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

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

  const shuffleRecipes = (array) => {
    //embaralha os objetos do array. Vamos usar so os tres primeiros depois de embaralhados
    return array.sort(() => Math.random() - 0.5);
  };

  const handleClick = () => {
    navigate("/recipes-list");
  };

  return (
    <section className="featured-recipes-section">
      <h3>Receitas em destaque</h3>
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

export default FeaturedRecipes;
