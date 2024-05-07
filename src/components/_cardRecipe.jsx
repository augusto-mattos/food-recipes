import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import FavoriteRecipeButton from "./_favoriteRecipeBtn";

function CardRecipe(props) {
  const recipeId = props.uri.split("_")[1];

  return (
    <Link
      to={`/recipe/${recipeId}`}
      id={recipeId}
      className="card-recipe"
    >
      <img
        src={props.image}
        alt=""
      />
      <div className="title-and-like">
        <h4 className="recipe-title">{props.label}</h4>
        <FavoriteRecipeButton
          currentUser={props.currentUser}
          recipeId={recipeId}
          label={props.label}
          image={props.image}
        />
      </div>
      <div className="recipe-info">
        <span>{`Category: ${props.mealType[0]}`}</span>
        <div className="calories">
          <FontAwesomeIcon icon={faFire} />
          <span>{`${props.calories.toFixed(0)} cals`}</span>
        </div>
      </div>
    </Link>
  );
}

CardRecipe.propTypes = {
  currentUser: PropTypes.object,
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mealType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  calories: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
};

export default CardRecipe;
