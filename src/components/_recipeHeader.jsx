import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faEarthAmerica,
  faFire,
  faHeart,
  faKitchenSet,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import FavoriteRecipeButton from "./_favoriteRecipeBtn";
import NutritionalFacts from "./_nutrionalFacts";
import PropTypes from "prop-types";

function RecipeHeader(props) {

  const currentURL = window.location.href;
  const urlParts = currentURL.split("/");
  const recipeId = urlParts[urlParts.length - 1];
  
  const storedRecipe =
    JSON.parse(sessionStorage.getItem("recipeData"))?.recipe || {};
  const {
    label,
    calories,
    cuisineType,
    dietLabels,
    dishType,
    mealType,
    image,
  } = storedRecipe;

  const yieldValue = storedRecipe["yield"];

  const dietLabelsWithCommas = dietLabels.map((item, index) =>
    index === dietLabels.length - 1 ? `${item}` : `${item}, `
  );

  return (
    <section className="recipe-header">
      <div className="title">
        <h1>{label}</h1>
        <FavoriteRecipeButton currentUser={props.currentUser} recipeId={recipeId} />
      </div>
      <div className="recipe-specs">
        <div className="calories">
          <FontAwesomeIcon
            icon={faFire}
            className="spec-icon"
          />
          <span>{`${calories.toFixed(0)} calories`}</span>
        </div>
        <div className="cuisine-type">
          <FontAwesomeIcon
            icon={faEarthAmerica}
            className="spec-icon"
          />
          <span>{cuisineType}</span>
        </div>
        <div className="dish-type">
          <FontAwesomeIcon
            icon={faKitchenSet}
            className="spec-icon"
          />
          <span>{dishType}</span>
        </div>
        <div className="meal-type">
          <FontAwesomeIcon
            icon={faUtensils}
            className="spec-icon"
          />
          <span>{mealType}</span>
        </div>
        <div className="yield-value">
          <FontAwesomeIcon
            icon={faBowlFood}
            className="spec-icon"
          />
          <span>{`${yieldValue} portions`}</span>
        </div>
        <div className="diet-labels">
          <FontAwesomeIcon
            icon={faHeart}
            className="spec-icon"
          />
          <span>{dietLabelsWithCommas}</span>
        </div>
      </div>
      <div className="recipe-cover">
        <img
          src={image}
          alt="imagem da receita"
        />
        <NutritionalFacts />
      </div>
    </section>
  );
}

RecipeHeader.propTypes = {
  currentUser: PropTypes.object,
};

export default RecipeHeader;
